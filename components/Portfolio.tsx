'use client';

import React, { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PortfolioContent } from '@/config/content';
import { FloatingNav } from './FloatingNav';
import { HomeSlide } from './slides/HomeSlide';
import { AboutSlide } from './slides/AboutSlide';
import { EducationSlide } from './slides/EducationSlide';
import { ProjectSlide } from './slides/ProjectSlide';
import { SlideContainer } from './SlideContainer';
import styles from './Portfolio.module.css';

interface PortfolioProps {
  content: PortfolioContent;
}

export const Portfolio: React.FC<PortfolioProps> = ({ content }) => {
  const pathname = usePathname();
  const router = useRouter();

  const slides = useMemo(() => {
    const slideList = [
      {
        id: 'home',
        section: 'home',
        content: <HomeSlide personal={content.personal} />,
      },
      {
        id: 'about',
        section: 'about',
        content: <AboutSlide about={content.about} />,
      },
      {
        id: 'education',
        section: 'education',
        content: <EducationSlide education={content.education} />,
      },
    ];

    content.projects.forEach((project) => {
      slideList.push({
        id: project.id,
        section: 'projects',
        content: <ProjectSlide project={project} />,
      });
    });

    return slideList;
  }, [content]);

  const navItems = useMemo(() => {
    const items = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'education', label: 'Education' },
    ];

    content.projects.forEach((project) => {
      items.push({
        id: project.id,
        label: project.title,
      });
    });

    return items;
  }, [content]);

  const {
    currentIndex,
    currentSlide,
    navigateToSlide,
    goToNext,
    goToPrevious,
    hasPrevious,
    hasNext,
    direction,
    isAnimating,
    touchHandlers,
  } = SlideContainer({ slides });

  const handleNavigate = (slideId: string) => {
    const index = slides.findIndex((s) => s.id === slideId);
    if (index !== -1) {
      navigateToSlide(index);
    }
  };

  return (
    <div className={styles.portfolio} {...touchHandlers}>
      <div
        className={`${styles.slideWrapper} ${
          isAnimating ? styles[`animate-${direction}`] : ''
        }`}
      >
        {currentSlide?.content}
      </div>

      <FloatingNav
        items={navItems}
        currentSlide={currentSlide?.id || 'home'}
        onNavigate={handleNavigate}
        onPrevious={goToPrevious}
        onNext={goToNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </div>
  );
};
