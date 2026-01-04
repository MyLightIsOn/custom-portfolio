"use client";

import React, { useEffect, useCallback } from "react";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  isOpen,
  onClose,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close modal"
      >
        ×
      </button>
      <div
        className={styles.imageContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className={styles.image} />
      </div>
      <p className={styles.caption}>{alt}</p>
    </div>
  );
};
