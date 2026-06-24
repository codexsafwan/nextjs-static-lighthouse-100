import Image from 'next/image';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.profileImageContainer}>
            <div className={styles.profileImageOuter}>
              <div className={styles.profileImageInner}>
                <Image
                  src="/profile.webp"
                  alt="Profile picture of Safwan Alamgir"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="80px"
                />
              </div>
            </div>
          </div>
          <span className={styles.profileLabel}>Safwan Alamgir</span>
          <h1 className={styles.profileTitle}>
            DESIGNING <span className={styles.highlight}>TECHNICAL</span> EXCELLENCE.
          </h1>
          <p className={styles.profileSubtitle}>
            Full-Stack Engineer specialized in high-performance architectures and minimalist interfaces.
          </p>
          <div className={styles.ctaRow}>
            <button className={styles.btnPrimary} type="button">
              View Projects
            </button>
            <a href="mailto:safwan.alamgir@example.com" className={styles.btnMail} aria-label="Email Safwan Alamgir">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
