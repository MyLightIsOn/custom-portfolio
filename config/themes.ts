export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  typography: {
    fontFamily: {
      heading: string;
      body: string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      bold: number;
    };
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: string;
  animation: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: string;
  };
  logo?: string;
}

export const defaultTheme: Theme = {
  name: 'default',
  colors: {
    primary: '#fd5c63',
    secondary: '#8B5CF6',
    accent: '#EC4899',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#111827',
    textSecondary: '#484848',
  },
  typography: {
    fontFamily: {
      heading: 'system-ui, -apple-system, sans-serif',
      body: 'system-ui, -apple-system, sans-serif',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  borderRadius: '0.5rem',
  animation: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const airbnbTheme: Theme = {
  name: 'airbnb',
  colors: {
    primary: '#FF385C',
    secondary: '#00A699',
    accent: '#FC642D',
    background: '#FFFFFF',
    surface: '#F7F7F7',
    text: '#222222',
    textSecondary: '#717171',
  },
  typography: {
    fontFamily: {
      heading: 'Circular, -apple-system, sans-serif',
      body: 'Circular, -apple-system, sans-serif',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 600,
    },
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  borderRadius: '0.75rem',
  animation: {
    duration: {
      fast: '200ms',
      normal: '350ms',
      slow: '500ms',
    },
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
};

export const themes = {
  default: defaultTheme,
  airbnb: airbnbTheme,
};
