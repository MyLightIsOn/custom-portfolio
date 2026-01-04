"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { PortfolioContent } from "@/config/content";
import { FloatingNav } from "./FloatingNav";
import { HomeSlide } from "./slides/HomeSlide";
import { ExperienceSlide } from "./slides/ExperienceSlide";
import { ProjectSlide } from "./slides/ProjectSlide";
import { ProjectSubSlide } from "./slides/ProjectSubSlide";
import { GenericSubSlide } from "./slides/GenericSubSlide";
import { SlideDots } from "./SlideDots";
import styles from "./Portfolio.module.css";

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

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [nextSlideIndex, setNextSlideIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    "forward" | "backward"
  >("forward");

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const sections = useMemo<Section[]>(() => {
    const sectionList: Section[] = [];

    sectionList.push({
      id: "home",
      title: "Home",
      slides: [
        <HomeSlide key="home-0" personal={content.personal} />,
        ...(content.personal.slides?.map((slide, index) => (
          <GenericSubSlide
            key={`home-${index + 1}`}
            slideContent={slide}
            parentTitle={content.personal.name}
          />
        )) || []),
      ],
    });

    if (content.experience && content.experience.length > 0) {
      sectionList.push({
        id: "experience",
        title: "Experience",
        slides: content.experience.map((exp, index) => (
          <ExperienceSlide key={`experience-${index}`} experience={exp} />
        )),
      });
    }

    content.projects.forEach((project) => {
      const projectSlides: React.ReactNode[] = [];
      projectSlides.push(
        <ProjectSlide key={`${project.id}-0`} project={project} />,
      );

      if (project.slides && project.slides.length > 0) {
        project.slides.forEach((slideContent, slideIndex) => {
          projectSlides.push(
            <ProjectSubSlide
              key={`${project.id}-${slideIndex + 1}`}
              slideContent={slideContent}
              projectTitle={project.title}
            />,
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

  const navItems = useMemo(() => {
    return sections.map((section) => ({
      id: section.id,
      label: section.title,
    }));
  }, [sections]);

  // Sync URL on mount
  useEffect(() => {
    const pathParts = pathname.split("/").filter(Boolean);
    if (pathParts.length === 0) return;

    let sectionId: string;
    let slideIndex = 0;

    if (pathParts[0] === "home" || pathParts[0] === "experience") {
      sectionId = pathParts[0];
      slideIndex = pathParts[1] ? parseInt(pathParts[1], 10) : 0;
    } else if (pathParts[0] === "projects") {
      sectionId = pathParts[1];
      slideIndex = pathParts[2] ? parseInt(pathParts[2], 10) : 0;
    } else {
      sectionId = pathParts[0];
      slideIndex = pathParts[1] ? parseInt(pathParts[1], 10) : 0;
    }

    const sectionIndex = sections.findIndex((s) => s.id === sectionId);
    if (sectionIndex !== -1) {
      const validSlideIndex = Math.min(
        slideIndex,
        sections[sectionIndex].slides.length - 1,
      );
      setCurrentSectionIndex(sectionIndex);
      setCurrentSlideIndex(validSlideIndex);
    }
  }, []); // Only on mount

  // Update URL after state changes (without triggering navigation)
  useEffect(() => {
    const section = sections[currentSectionIndex];
    if (!section) return;

    const isProject = !["home", "experience"].includes(section.id);
    const url = isProject
      ? currentSlideIndex === 0
        ? `/projects/${section.id}`
        : `/projects/${section.id}/${currentSlideIndex}`
      : currentSlideIndex === 0
        ? `/${section.id}`
        : `/${section.id}/${currentSlideIndex}`;

    window.history.replaceState({}, "", url);
  }, [currentSectionIndex, currentSlideIndex, sections]);

  const navigateToSlide = (
    targetSlideIndex: number,
    direction: "forward" | "backward",
  ) => {
    if (isAnimating) return;

    setAnimationDirection(direction);
    setNextSlideIndex(targetSlideIndex);
    setIsAnimating(true);

    // Wait for animation to complete
    setTimeout(() => {
      setCurrentSlideIndex(targetSlideIndex);
      setNextSlideIndex(null);
      setIsAnimating(false);
    }, 500); // Match CSS animation duration
  };

  const goToNext = () => {
    const currentSection = sections[currentSectionIndex];
    if (currentSlideIndex < currentSection.slides.length - 1) {
      navigateToSlide(currentSlideIndex + 1, "forward");
    }
  };

  const goToPrevious = () => {
    if (currentSlideIndex > 0) {
      navigateToSlide(currentSlideIndex - 1, "backward");
    }
  };

  const handleMenuNavigate = (sectionId: string) => {
    const sectionIndex = sections.findIndex((s) => s.id === sectionId);
    if (sectionIndex !== -1 && !isAnimating) {
      setCurrentSectionIndex(sectionIndex);
      setCurrentSlideIndex(0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSectionIndex, currentSlideIndex, isAnimating]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  const handleDotClick = (index: number) => {
    if (index === currentSlideIndex || isAnimating) return;
    const direction = index > currentSlideIndex ? "forward" : "backward";
    navigateToSlide(index, direction);
  };

  const hasPrevious = currentSlideIndex > 0;
  const hasNext =
    currentSlideIndex < sections[currentSectionIndex].slides.length - 1;

  const currentSlide = sections[currentSectionIndex]?.slides[currentSlideIndex];
  const incomingSlide =
    nextSlideIndex !== null
      ? sections[currentSectionIndex]?.slides[nextSlideIndex]
      : null;

  return (
    <div
      className={styles.portfolio}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slidesContainer}>
        {/* Current slide - slides out */}
        <div
          className={`${styles.slideWrapper} ${
            isAnimating
              ? animationDirection === "forward"
                ? styles.slideOutLeft
                : styles.slideOutRight
              : styles.slideActive
          }`}
        >
          {currentSlide}
        </div>

        {/* Incoming slide - slides in */}
        {isAnimating && incomingSlide && (
          <div
            className={`${styles.slideWrapper} ${
              animationDirection === "forward"
                ? styles.slideInRight
                : styles.slideInLeft
            }`}
          >
            {incomingSlide}
          </div>
        )}
      </div>

      <SlideDots
        totalSlides={sections[currentSectionIndex]?.slides.length || 0}
        currentSlideIndex={currentSlideIndex}
        onDotClick={handleDotClick}
      />

      <FloatingNav
        items={navItems}
        currentSlide={sections[currentSectionIndex]?.id || "home"}
        onNavigate={handleMenuNavigate}
        onPrevious={goToPrevious}
        onNext={goToNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </div>
  );
};
