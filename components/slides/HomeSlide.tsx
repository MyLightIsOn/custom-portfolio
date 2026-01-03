'use client';

import React from 'react';
import Image from 'next/image';
import { PersonalInfo } from '@/config/content';
import styles from './Slide.module.css';

interface HomeSlideProps {
  personal: PersonalInfo;
}

export const HomeSlide: React.FC<HomeSlideProps> = ({ personal }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <div className={'flex items-center'}>
            {personal.logo && (
                <div className={styles.logoContainer}>
                    <Image
                        src={personal.logo}
                        alt="Logo"
                        width={90}
                        height={40}
                        className={styles.logo}
                        priority
                    />
                </div>
            )}
            <h1 className={styles.heading}>{personal.name}</h1>
        </div>
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
