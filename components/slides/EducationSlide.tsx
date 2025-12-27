'use client';

import React from 'react';
import { Education } from '@/config/content';
import styles from './Slide.module.css';

interface EducationSlideProps {
  education: Education[];
}

export const EducationSlide: React.FC<EducationSlideProps> = ({ education }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <h2 className={styles.heading}>Education</h2>
        
        {education.map((edu, index) => (
          <div key={index} className={styles.section}>
            <h3 className={styles.subheading}>{edu.institution}</h3>
            <p className={styles.eduDegree}>
              {edu.degree} in {edu.field}
            </p>
            <p className={styles.eduYear}>{edu.year}</p>
            {edu.description && (
              <p className={styles.paragraph}>{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
