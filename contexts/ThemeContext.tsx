'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { Theme, defaultTheme } from '@/config/themes';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({ theme: defaultTheme });

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div
        style={{
          '--color-primary': theme.colors.primary,
          '--color-secondary': theme.colors.secondary,
          '--color-accent': theme.colors.accent,
          '--color-background': theme.colors.background,
          '--color-surface': theme.colors.surface,
          '--color-text': theme.colors.text,
          '--color-text-secondary': theme.colors.textSecondary,
          '--font-heading': theme.typography.fontFamily.heading,
          '--font-body': theme.typography.fontFamily.body,
          '--spacing-sm': theme.spacing.sm,
          '--spacing-md': theme.spacing.md,
          '--spacing-lg': theme.spacing.lg,
          '--spacing-xl': theme.spacing.xl,
          '--border-radius': theme.borderRadius,
          '--duration-fast': theme.animation.duration.fast,
          '--duration-normal': theme.animation.duration.normal,
          '--duration-slow': theme.animation.duration.slow,
          '--easing': theme.animation.easing,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
