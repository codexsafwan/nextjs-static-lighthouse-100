import styles from './page.module.css';

export const dynamic = 'error';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.statusBadge}>
        <div className={styles.statusDot} />
        System Status: Operational
      </div>

      <h1 className={styles.heroTitle}>
        Architecting <span>High-Performance</span>
        <br />
        Digital Systems.
      </h1>

      <p className={styles.heroSubtitle}>
        Building scalable, pixel-perfect interfaces with a focus on technical
        precision and exceptional user experiences.
      </p>

      <div className={styles.ctaGroup}>
        <button className={styles.btnPrimary} type="button">
          View Projects
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
        <button className={styles.btnSecondary} type="button">
          Get in Touch
        </button>
      </div>

      <div className={styles.footerMetadata}>
        <div>
          // COORDINATES: 23.8103° N, 90.4125° E
          <br />
          // STACK: REACT_NEXT_TYPESCRIPT
        </div>
        <div>
          BUILD_VER: 2024.0.1_STABLE
          <br />
          RENDER_ENGINE: NEXUS_CORE
        </div>
      </div>
    </div>
  );
}
