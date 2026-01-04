'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ProjectSlideContent } from '@/config/content';
import { ImageModal } from '@/components/ImageModal';
import { VideoModal } from '@/components/VideoModal';
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
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    // Handle images
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

    // Handle videos
    const videos = contentEl.querySelectorAll('video');
    videos.forEach((video) => {
      video.style.cursor = 'pointer';
      video.title = 'Click to expand';
      
      const handleClick = () => {
        video.pause();
        setModalVideo(video.src);
      };
      
      video.addEventListener('click', handleClick);
    });

    return () => {
      images.forEach((img) => {
        img.replaceWith(img.cloneNode(true));
      });
      videos.forEach((video) => {
        video.replaceWith(video.cloneNode(true));
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

      <VideoModal
        src={modalVideo || ''}
        isOpen={!!modalVideo}
        onClose={() => setModalVideo(null)}
      />
    </div>
  );
};
