'use client';

import React from 'react';
import { Experience } from '@/config/content';
import styles from './Slide.module.css';

interface ExperienceSlideProps {
  experience: Experience[];
}

export const ExperienceSlide: React.FC<ExperienceSlideProps> = ({ experience }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <h2 className={styles.heading}>Experience</h2>
        
        {experience.map((exp, index) => (
          <div key={index} className={styles.section}>
            <div className={styles.expHeader}>
              <h3 className={styles.subheading}>{exp.position}</h3>
              <span className={styles.expPeriod}>{exp.period}</span>
            </div>
            <p className={styles.expCompany}>{exp.company}</p>
            <p className={styles.paragraph}>{exp.description}</p>
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className={styles.list}>
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className={styles.listItem}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
