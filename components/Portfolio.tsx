'use client';

import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { PortfolioContent } from '@/config/content';
import { FloatingNav } from './FloatingNav';
import { HomeSlide } from './slides/HomeSlide';
import { AboutSlide } from './slides/AboutSlide';
import { EducationSlide } from './slides/EducationSlide';
import { ProjectSlide } from './slides/ProjectSlide';
import { ProjectSubSlide } from './slides/ProjectSubSlide';
import styles from './Portfolio.module.css';

interface PortfolioProps {
  content: PortfolioContent;
}

interface Section {
  id: string;
  title: string;
  slides: React.ReactNode[];
}

export const Portfolio: React.FC<PortfolioProps> = ({ content }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isNavigatingRef = useRef(false);
  const prevSectionRef = useRef(0);
  const prevSlideRef = useRef(0);

  // Build sections with their slides
  const sections = useMemo<Section[]>(() => {
    const sectionList: Section[] = [];

    // Home section (single slide)
    sectionList.push({
      id: 'home',
      title: 'Home',
      slides: [<HomeSlide key="home-0" personal={content.personal} />],
    });

    // About section (single slide)
    sectionList.push({
      id: 'about',
      title: 'About',
      slides: [<AboutSlide key="about-0" about={content.about} />],
    });

    // Education section (single slide)
    sectionList.push({
      id: 'education',
      title: 'Education',
      slides: [<EducationSlide key="education-0" education={content.education} />],
    });

    // Project sections (each project is a section with multiple slides)
    content.projects.forEach((project, projectIndex) => {
      const projectSlides: React.ReactNode[] = [];

      // First slide: overview
      projectSlides.push(
        <ProjectSlide key={`${project.id}-0`} project={project} />
      );

      // Additional slides if they exist
      if (project.slides && project.slides.length > 0) {
        project.slides.forEach((slideContent, slideIndex) => {
          projectSlides.push(
            <ProjectSubSlide
              key={`${project.id}-${slideIndex + 1}`}
              slideContent={slideContent}
              projectTitle={project.title}
            />
          );
        });
      }

      sectionList.push({
        id: project.id,
        title: project.title,
        slides: projectSlides,
      });
    });

    return sectionList;
  }, [content]);

  // Navigation items for the menu
  const navItems = useMemo(() => {
    return sections.map((section) => ({
      id: section.id,
      label: section.title,
    }));
  }, [sections]);

  // Parse URL and update current section/slide
  useEffect(() => {
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length === 0) return;

    // Determine section and slide from URL structure
    let sectionId: string;
    let slideIndex = 0;

    // Check URL pattern to determine section
    if (pathParts[0] === 'home' || pathParts[0] === 'about' || pathParts[0] === 'education') {
      // Simple sections: /home, /about, /education
      sectionId = pathParts[0];
      slideIndex = 0;
    } else if (pathParts[0] === 'projects') {
      // Project sections: /projects/project-1 or /projects/project-1/1
      sectionId = pathParts[1];
      slideIndex = pathParts[2] ? parseInt(pathParts[2], 10) : 0;
    } else {
      // Fallback for old URL structure
      sectionId = pathParts[0];
      slideIndex = pathParts[1] ? parseInt(pathParts[1], 10) : 0;
    }

    const sectionIndex = sections.findIndex((s) => s.id === sectionId);

    if (sectionIndex !== -1) {
      const validSlideIndex = Math.min(
        slideIndex,
        sections[sectionIndex].slides.length - 1
      );

      const sectionChanged = sectionIndex !== prevSectionRef.current;
      const slideChanged = validSlideIndex !== prevSlideRef.current;

      if (sectionChanged || slideChanged) {
        setCurrentSectionIndex(sectionIndex);
        setCurrentSlideIndex(validSlideIndex);
        setAnimationKey(prev => prev + 1);

        // Update refs
        prevSectionRef.current = sectionIndex;
        prevSlideRef.current = validSlideIndex;
      }
    }
  }, [pathname, sections]);

  const navigateToSlide = (sectionIndex: number, slideIndex: number) => {
    if (isNavigatingRef.current) return;

    const section = sections[sectionIndex];
    if (!section) return;

    const validSlideIndex = Math.min(slideIndex, section.slides.length - 1);

    isNavigatingRef.current = true;

    // Build URL based on section type
    let url: string;

    // Check if this is a project section (sections after home, about, education)
    const isProject = sectionIndex > 2;

    if (isProject) {
      // Projects use /projects/project-id or /projects/project-id/slideIndex
      url = validSlideIndex === 0
        ? `/projects/${section.id}`
        : `/projects/${section.id}/${validSlideIndex}`;
    } else {
      // Simple sections use /section-id
      url = `/${section.id}`;
    }

    router.push(url);

    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 600);
  };

  const goToNext = () => {
    const currentSection = sections[currentSectionIndex];

    // Only navigate if there's a next slide in the CURRENT section
    if (currentSlideIndex < currentSection.slides.length - 1) {
      navigateToSlide(currentSectionIndex, currentSlideIndex + 1);
    }
    // Otherwise do nothing - we're at the end of this section
  };

  const goToPrevious = () => {
    // Only navigate if we're not on the first slide of current section
    if (currentSlideIndex > 0) {
      navigateToSlide(currentSectionIndex, currentSlideIndex - 1);
    }
    // Otherwise do nothing - we're at the beginning of this section
  };

  const handleMenuNavigate = (sectionId: string) => {
    const sectionIndex = sections.findIndex((s) => s.id === sectionId);
    if (sectionIndex !== -1) {
      navigateToSlide(sectionIndex, 0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionIndex, currentSlideIndex, sections]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  const hasPrevious = currentSlideIndex > 0;
  const hasNext = currentSlideIndex < sections[currentSectionIndex].slides.length - 1;

  const currentSlide = sections[currentSectionIndex]?.slides[currentSlideIndex];

  return (
    <div
      className={styles.portfolio}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`${styles.slideWrapper} ${styles.animateHorizontal}`}
        key={animationKey}
      >
        {currentSlide}
      </div>

      <FloatingNav
        items={navItems}
        currentSlide={sections[currentSectionIndex]?.id || 'home'}
        onNavigate={handleMenuNavigate}
        onPrevious={goToPrevious}
        onNext={goToNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </div>
  );
};

