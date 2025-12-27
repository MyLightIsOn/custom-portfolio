'use client';

import React from 'react';
import { PortfolioContent } from '@/config/content';
import styles from './Slide.module.css';

interface AboutSlideProps {
  about: PortfolioContent['about'];
}

export const AboutSlide: React.FC<AboutSlideProps> = ({ about }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <h2 className={styles.heading}>{about.title}</h2>
        <p className={styles.paragraph}>{about.content}</p>
        
        {about.skills && about.skills.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.subheading}>Skills</h3>
            <div className={styles.skillsGrid}>
              {about.skills.map((skill, index) => (
                <span key={index} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
