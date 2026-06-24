'use client';

import { useState, useEffect } from 'react';
import styles from './MobileMenuButton.module.css';

export function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-menu', isOpen ? 'open' : 'closed');
    return () => {
      document.documentElement.removeAttribute('data-menu');
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="sidebar"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        type="button"
      >
        <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`} aria-hidden="true" />
        <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`} aria-hidden="true" />
        <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsOpen(false);
            }
          }}
          role="button"
          tabIndex={-1}
          aria-label="Close menu overlay"
        />
      )}
    </>
  );
}
