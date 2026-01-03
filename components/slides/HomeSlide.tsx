'use client';

import React from 'react';
import { PersonalInfo } from '@/config/content';
import styles from './Slide.module.css';

interface HomeSlideProps {
  personal: PersonalInfo;
}

export const HomeSlide: React.FC<HomeSlideProps> = ({ personal }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <h1 className={styles.heading}>{personal.name}</h1>
        <p className={styles.title}>{personal.title}</p>
        <p className={styles.bio} dangerouslySetInnerHTML={{ __html: personal.bio }} />
        {personal.location && (
          <p className={styles.meta}>📍 {personal.location}</p>
        )}
        {personal.email && (
          <p className={styles.meta}>✉️ {personal.email}</p>
        )}
      </div>
    </div>
  );
};
