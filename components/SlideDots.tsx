import React from 'react';
import styles from './SlideDots.module.css';

interface SlideDotsProps {
  totalSlides: number;
  currentSlideIndex: number;
  onDotClick: (index: number) => void;
}

export const SlideDots: React.FC<SlideDotsProps> = ({
  totalSlides,
  currentSlideIndex,
  onDotClick,
}) => {
  if (totalSlides <= 1) return null;

  return (
    <div className={styles.container}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={`${styles.dot} ${index === currentSlideIndex ? styles.active : ''}`}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
