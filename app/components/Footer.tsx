import Image from 'next/image';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Skill Bars Card */}
        <div className={styles.card}>
          <div className={styles.cardHeaderRow}>
            <span className={styles.cardTitle}>Core Stack</span>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span>Typescript</span>
                <span className={styles.skillPercent}>95%</span>
              </div>
              <div className={styles.skillTrack} aria-hidden="true">
                <div className={styles.skillFill} style={{ width: '95%' }} />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span>React / Next.js</span>
                <span className={styles.skillPercent}>90%</span>
              </div>
              <div className={styles.skillTrack} aria-hidden="true">
                <div className={styles.skillFill} style={{ width: '90%' }} />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span>Node.js / Go</span>
                <span className={styles.skillPercent}>85%</span>
              </div>
              <div className={styles.skillTrack} aria-hidden="true">
                <div className={styles.skillFill} style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>4+</span>
            <span className={styles.statLabel}>Years Exp</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>32</span>
            <span className={styles.statLabel}>Shipped</span>
          </div>
        </div>

        {/* Current Focus Card */}
        <div className={styles.focusCard}>
          <div className={styles.focusCardHeader}>
            <span className={styles.cardTitle}>Current Focus</span>
          </div>
          <p className={styles.focusText}>
            Scaling cloud-native infrastructure for fintech startups using AWS and Kubernetes.
          </p>
          <div className={styles.cloudIconWrapper} aria-hidden="true">
            <svg className={styles.cloudIcon} width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
        </div>

        {/* Synergy AI Card */}
        <div className={styles.projectCard}>
          <div className={styles.projectImageWrapper}>
            <Image
              src="/hero.webp"
              alt="Synergy AI collaboration platform mockup"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 480px) 100vw, 480px"
            />
          </div>
          <div className={styles.projectContent}>
            <div className={styles.projectTitleRow}>
              <span className={styles.projectDot} />
              <span className={styles.projectTitle}>Synergy AI</span>
            </div>
            <p className={styles.projectDescription}>
              Real-time collaboration platform for distributed engineering teams.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
