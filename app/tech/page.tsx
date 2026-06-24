import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '../data/articles';
import styles from './page.module.css';

export const dynamic = 'error';

export const metadata: Metadata = {
  title: 'Tech Journal | Safwan Alamgir',
  description:
    'Deep dives into modern architecture, performance optimization, and the future of full-stack engineering.',
  alternates: {
    canonical: 'https://example.com/tech',
  },
};

export default function TechJournalPage() {
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <header className={styles.header}>
        <div className={styles.labelRow}>
          <span className={styles.labelLine} aria-hidden="true" />
          <span className={styles.label}>Thought Leadership</span>
        </div>
        <h1 className={styles.title}>Tech Journal</h1>
        <p className={styles.subtitle}>
          Deep dives into modern architecture, performance optimization, and the
          future of full-stack engineering.
        </p>
      </header>

      {/* Article Grid */}
      <section className={styles.grid} aria-label="Articles">
        {articles.map((article) => (
          <article key={article.slug} className={styles.card}>
            <div className={styles.cardHeader}>
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

            <h2 className={styles.cardTitle}>
              <Link href={`/tech/${article.slug}`} className={styles.cardLink}>
                {article.title}
              </Link>
            </h2>

            <p className={styles.cardDescription}>{article.description}</p>

            <div className={styles.cardFooter}>
              <Link
                href={`/tech/${article.slug}`}
                className={styles.readMore}
                aria-label={`Read more about ${article.title}`}
              >
                Read More <span className="u-sr-only"> about {article.title}</span>
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

              <div className={styles.cardActions}>
                <button className={styles.actionIcon} aria-label="Share article" type="button">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
                <button
                  className={styles.actionIcon}
                  aria-label="Bookmark article"
                  type="button"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
