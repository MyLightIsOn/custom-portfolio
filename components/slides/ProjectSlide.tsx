'use client';

import React from 'react';
import { Project } from '@/config/content';
import styles from './Slide.module.css';

interface ProjectSlideProps {
  project: Project;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({ project }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <h2 className={styles.heading}>{project.title}</h2>
        <p
          className={styles.paragraph}
          dangerouslySetInnerHTML={{ __html: project.longDescription || project.description }}
        />

        <div className={styles.section}>
          <h3 className={styles.subheading}>Technologies</h3>
          <div className={styles.skillsGrid}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.skill}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {(project.link || project.github) && (
          <div className={styles.links}>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Project →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Code →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
