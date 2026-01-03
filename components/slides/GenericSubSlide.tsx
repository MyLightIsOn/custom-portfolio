'use client';

import React from 'react';
import { ProjectSlideContent } from '@/config/content';
import styles from './Slide.module.css';

interface GenericSubSlideProps {
  slideContent: ProjectSlideContent;
  parentTitle?: string;
}

export const GenericSubSlide: React.FC<GenericSubSlideProps> = ({
  slideContent,
  //parentTitle
}) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        {/*{parentTitle && (
          <p className={styles.overline}>{parentTitle}</p>
        )}*/}
        {slideContent.title && (
          <h2 className={styles.heading}>{slideContent.title}</h2>
        )}
        <p className={styles.paragraph}>{slideContent.content}</p>
        {slideContent.skills && (
          <div className={styles.skillsContainer}>
            {slideContent.skills.map((skill, index) => (
              <span key={index} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
