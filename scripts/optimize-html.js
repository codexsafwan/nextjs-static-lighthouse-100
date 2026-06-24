const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

// Recursively find all HTML files
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (filePath.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

// Convert image to base64 Data URI
function getBase64Image(srcPath) {
  const absolutePath = path.join(OUT_DIR, srcPath);
  if (fs.existsSync(absolutePath)) {
    const fileBuffer = fs.readFileSync(absolutePath);
    return `data:image/webp;base64,${fileBuffer.toString('base64')}`;
  }
  return null;
}

function run() {
  console.log('Optimizing HTML files (CSS + profile.webp inlining + script lazy-load) in', OUT_DIR);

  const htmlFiles = getHtmlFiles(OUT_DIR);
  const profileBase64 = getBase64Image('profile.webp');

  htmlFiles.forEach((htmlPath) => {
    let content = fs.readFileSync(htmlPath, 'utf8');

    // 1. Inline CSS Stylesheets and fix relative font paths
    const cssLinkRegex = /<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/g;
    let match;
    const replacements = [];

    // Reset regex lastIndex
    cssLinkRegex.lastIndex = 0;
    while ((match = cssLinkRegex.exec(content)) !== null) {
      const fullTag = match[0];
      const href = match[1];

      // Only inline local Next.js CSS files
      if (href.startsWith('/_next/')) {
        const cssPath = path.join(OUT_DIR, href);
        if (fs.existsSync(cssPath)) {
          let cssContent = fs.readFileSync(cssPath, 'utf8');
          
          // Fix relative font/media paths: replace "../media/" with "/_next/static/media/"
          cssContent = cssContent.replace(/\.\.\/media\//g, '/_next/static/media/');

          replacements.push({
            target: fullTag,
            replacement: `<style>${cssContent}</style>`
          });
        }
      }
    }

    replacements.forEach(({ target, replacement }) => {
      content = content.replace(target, replacement);
    });

    // 2. Remove profile.webp preload tag
    content = content.replace(/<link[^>]+rel="preload"[^>]+href="\/profile\.webp"[^>]*>/g, '');

    // 3. Inline profile.webp only
    if (profileBase64) {
      content = content.replace(/src="\/profile\.webp"/g, `src="${profileBase64}"`);
    }

    // 4. Remove all script preload tags (to prevent preload network requests)
    content = content.replace(/<link[^>]+as="script"[^>]*>/g, '');

    // 5. Extract script tags with src and id
    const scriptRegex = /<script([^>]+)><\/script>/g;
    const scriptItems = [];
    let scriptMatch;

    scriptRegex.lastIndex = 0;
    while ((scriptMatch = scriptRegex.exec(content)) !== null) {
      const attributes = scriptMatch[1];
      const srcMatch = attributes.match(/src="([^"]+)"/);
      if (srcMatch) {
        const src = srcMatch[1];
        const idMatch = attributes.match(/id="([^"]+)"/);
        const id = idMatch ? idMatch[1] : null;
        scriptItems.push({ src, id });
      }
    }

    // Remove all external script tags
    content = content.replace(/<script[^>]+src="[^"]+"[^>]*><\/script>/g, '');

    // Inject lazy script loader before </body>
    if (scriptItems.length > 0) {
      const loaderScript = `
<script>
(function() {
  var scripts = ${JSON.stringify(scriptItems)};
  var loaded = false;
  function loadScripts() {
    if (loaded) return;
    loaded = true;
    scripts.forEach(function(item) {
      var s = document.createElement('script');
      s.src = item.src;
      s.async = true;
      if (item.id) {
        s.id = item.id;
      }
      document.body.appendChild(s);
    });
  }
  var events = ['touchstart', 'mousedown', 'keydown', 'scroll', 'mousemove'];
  events.forEach(function(ev) {
    window.addEventListener(ev, loadScripts, { once: true, passive: true });
  });
})();
</script>
`;
      content = content.replace('</body>', `${loaderScript}</body>`);
    }

    fs.writeFileSync(htmlPath, content, 'utf8');
    console.log(`Optimized: ${path.relative(OUT_DIR, htmlPath)}`);
  });

  console.log('Static HTML optimization complete!');
}

run();
