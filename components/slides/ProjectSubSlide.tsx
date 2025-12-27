'use client';

import React from 'react';
import { ProjectSlideContent } from '@/config/content';
import styles from './Slide.module.css';

interface ProjectSubSlideProps {
  slideContent: ProjectSlideContent;
  projectTitle: string;
}

export const ProjectSubSlide: React.FC<ProjectSubSlideProps> = ({ 
  slideContent, 
  projectTitle 
}) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <p className={styles.overline}>{projectTitle}</p>
        {slideContent.title && (
          <h2 className={styles.heading}>{slideContent.title}</h2>
        )}
        <p className={styles.paragraph}>{slideContent.content}</p>
      </div>
    </div>
  );
};
