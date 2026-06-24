import type { Metadata } from 'next';
import Link from 'next/link';
import { articles, getArticleBySlug, getAllSlugs } from '../../data/articles';
import styles from './page.module.css';

export const dynamic = 'error';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.title} | Tech Journal`,
    description: article.description,
    alternates: {
      canonical: `https://example.com/tech/${article.slug}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className={styles.page}>
        <h1>Article not found</h1>
        <Link href="/tech">Back to Tech Journal</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/tech" className={styles.backLink}>
          <svg
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Journal
        </Link>
      </nav>

      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <div className={styles.meta}>
            <span
              className={`${styles.badge} ${
                article.categoryColor === 'green'
                  ? styles.badgeGreen
                  : styles.badgeBlue
              }`}
            >
              {article.category}
            </span>
            <time className={styles.date} dateTime={article.date}>
              {article.date}
            </time>
          </div>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <p className={styles.articleLead}>{article.description}</p>
        </header>

        <div className={styles.articleBody}>
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
