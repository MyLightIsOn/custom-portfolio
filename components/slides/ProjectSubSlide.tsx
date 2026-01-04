'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ProjectSlideContent } from '@/config/content';
import { ImageModal } from '@/components/ImageModal';
import styles from './Slide.module.css';

interface ProjectSubSlideProps {
  slideContent: ProjectSlideContent;
  projectTitle: string;
}

export const ProjectSubSlide: React.FC<ProjectSubSlideProps> = ({
  slideContent,
  projectTitle
}) => {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    const images = contentEl.querySelectorAll('img');
    
    images.forEach((img) => {
      img.style.cursor = 'pointer';
      img.title = 'Click to enlarge';
      
      const handleClick = () => {
        setModalImage({
          src: img.src,
          alt: img.alt || 'Image',
        });
      };
      
      img.addEventListener('click', handleClick);
    });

    return () => {
      images.forEach((img) => {
        img.replaceWith(img.cloneNode(true));
      });
    };
  }, [slideContent.content]);

  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <p className={styles.overline}>{projectTitle}</p>
        {slideContent.title && (
          <h2 className={styles.heading}>{slideContent.title}</h2>
        )}
        <p 
          ref={contentRef}
          className={styles.paragraph} 
          dangerouslySetInnerHTML={{ __html: slideContent.content }} 
        />
      </div>

      <ImageModal
        src={modalImage?.src || ''}
        alt={modalImage?.alt || ''}
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
      />
    </div>
  );
};
