"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

interface Slide {
  id: string;
  section: string;
  content: React.ReactNode;
}

export const useSlideContainer = (slides: Slide[]) => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal",
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Find current slide index based on pathname
  useEffect(() => {
    const slideIndex = slides.findIndex((slide) => `/${slide.id}` === pathname);
    if (slideIndex !== -1 && slideIndex !== currentIndex) {
      const currentSection = slides[currentIndex]?.section;
      const newSection = slides[slideIndex].section;
      setDirection(currentSection === newSection ? "horizontal" : "vertical");
      setCurrentIndex(slideIndex);
    }
  }, [pathname, slides]);

  const navigateToSlide = (index: number) => {
    if (index < 0 || index >= slides.length || isAnimating) return;

    const currentSection = slides[currentIndex].section;
    const newSection = slides[index].section;
    setDirection(currentSection === newSection ? "horizontal" : "vertical");
    setIsAnimating(true);

    router.push(`/${slides[index].id}`);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (currentIndex < slides.length - 1) {
      navigateToSlide(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      navigateToSlide(currentIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

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

  return {
    currentIndex,
    currentSlide: slides[currentIndex],
    navigateToSlide,
    goToNext,
    goToPrevious,
    hasPrevious: currentIndex > 0,
    hasNext: currentIndex < slides.length - 1,
    direction,
    isAnimating,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
    },
  };
};
