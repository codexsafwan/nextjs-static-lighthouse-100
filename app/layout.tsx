import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import styles from './layout.module.css';
import { SidebarNav } from './components/SidebarNav';
import { RightNav } from './components/RightNav';
import { MobileMenuButton } from './components/MobileMenuButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Safwan Alamgir | Front-End Developer',
  description: 'A 100/100 Lighthouse scored, pure static Next.js App Router application.',
  alternates: {
    canonical: 'https://example.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <MobileMenuButton />

        <div className={styles.layout}>
          {/* Left Sidebar */}
          <aside className={styles.leftSidebar} id="sidebar" aria-label="Profile sidebar">
            <div className={styles.profileHeader}>
              <div className={styles.profileImageWrapper}>
                <Image
                  src="/profile.webp"
                  alt="Profile picture of Safwan Alamgir"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="100px"
                />
              </div>
              <h2 className={styles.name}>Safwan Alamgir</h2>
              <p className={styles.jobTitle}>FRONT-END DEVELOPER</p>
            </div>

            <SidebarNav />

            <div className={styles.progressSection}>
              <div className={styles.progressItem}>
                <div className={styles.progressHeader}>
                  <span>Backend Architecture</span>
                  <span>92%</span>
                </div>
                <div className={styles.progressTrack} aria-hidden="true">
                  <div className={styles.progressFill} style={{ width: '92%' }} />
                </div>
              </div>
              <div className={styles.progressItem}>
                <div className={styles.progressHeader}>
                  <span>Frontend Systems</span>
                  <span>88%</span>
                </div>
                <div className={styles.progressTrack} aria-hidden="true">
                  <div className={styles.progressFill} style={{ width: '88%' }} />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className={styles.mainContent}>
            <Header />
            {children}
            <Footer />
          </main>

          {/* Right Navigation */}
          <RightNav />
        </div>
      </body>
    </html>
  );
}
