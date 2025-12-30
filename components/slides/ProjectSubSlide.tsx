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
  // Parse content to handle bold markdown and preserve structure
  const renderContent = (content: string) => {
    const lines = content.split('\n');

    return lines.map((line, index) => {
      // Handle bold text with **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const renderedLine = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      // Empty lines create spacing
      if (line.trim() === '') {
        return <br key={index} />;
      }

      // Lines starting with • are bullet points
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} style={{
            marginLeft: '1.5rem',
            marginBottom: '0.75rem',
            lineHeight: '1.6'
          }}>
            {renderedLine}
          </div>
        );
      }

      // Regular lines
      return (
        <div key={index} style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
          {renderedLine}
        </div>
      );
    });
  };

  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <p className={styles.overline}>{projectTitle}</p>
        {slideContent.title && (
          <h2 className={styles.heading}>{slideContent.title}</h2>
        )}
        <div className={styles.paragraph}>
          {renderContent(slideContent.content)}
        </div>
      </div>
    </div>
  );
};
