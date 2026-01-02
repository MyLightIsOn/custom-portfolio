'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './FloatingNav.module.css';

interface NavItem {
  id: string;
  label: string;
}

interface FloatingNavProps {
  items: NavItem[];
  currentSlide: string;
  onNavigate: (slideId: string) => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  items,
  currentSlide,
  onNavigate,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const { theme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);

    if (newMenuState) {
      // Set focus to current slide when opening
      const currentIndex = items.findIndex(item => item.id === currentSlide);
      setFocusedIndex(currentIndex !== -1 ? currentIndex : 0);
    }
  };

  // Keyboard navigation for menu
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % items.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        onNavigate(items[focusedIndex].id);
        setMenuOpen(false);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, focusedIndex, items, onNavigate]);

  return (
    <div className={styles.container}>
      {menuOpen && (
        <>
          <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
          <div className={styles.menu} ref={menuRef}>
            {items.map((item, index) => (
              <button
                key={item.id}
                className={`${styles.menuItem} ${
                  currentSlide === item.id ? styles.menuItemActive : ''
                } ${
                  focusedIndex === index ? styles.menuItemFocused : ''
                }`}
                onClick={() => {
                  onNavigate(item.id);
                  setMenuOpen(false);
                }}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}

      <div className={styles.nav}>
        <button
          className={styles.navButton}
          onClick={onPrevious}
          disabled={!hasPrevious}
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          className={`${styles.navButton} ${styles.menuButton}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <button
          className={styles.navButton}
          onClick={onNext}
          disabled={!hasNext}
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
