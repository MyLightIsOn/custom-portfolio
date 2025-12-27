export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email?: string;
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
  slides?: ProjectSlideContent[];
}

export interface ProjectSlideContent {
  title?: string;
  content: string;
  image?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
  description?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface Section {
  id: string;
  title: string;
  slides: SlideData[];
}

export interface SlideData {
  type: 'home' | 'about' | 'education' | 'project' | 'custom';
  data: any;
}

export interface PortfolioContent {
  personal: PersonalInfo;
  about: {
    title: string;
    content: string;
    skills?: string[];
  };
  education: Education[];
  experience?: Experience[];
  projects: Project[];
}

export const defaultContent: PortfolioContent = {
  personal: {
    name: 'Lawrence Kim',
    title: 'UX Engineer',
    bio: 'Next.js engineer with a background in user experience design and engineering.',
    email: 'hello@example.com',
    location: 'San Francisco, CA',
  },
  about: {
    title: 'About Me',
    content: 'I\'m a Next.js engineer with a strong background in user experience design and engineering. I specialize in creating intuitive, performant interfaces that delight users.',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'UX Design',
      'UX Engineering',
      'Interaction Design',
      'Prototyping',
      'Tailwind CSS',
    ],
  },
  education: [
    {
      institution: 'University of Design',
      degree: 'Bachelor of Science',
      field: 'Human-Computer Interaction',
      year: '2020',
      description: 'Focused on interaction design and frontend development.',
    },
  ],
  projects: [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and Stripe',
      longDescription: 'Built a full-featured e-commerce platform with product management, shopping cart, checkout flow, and order management. Implemented advanced UX patterns for search, filtering, and product discovery.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      image: '/projects/ecommerce.jpg',
      slides: [
        {
          title: 'Overview',
          content: 'Built a full-featured e-commerce platform with product management, shopping cart, checkout flow, and order management.',
        },
        {
          title: 'Key Features',
          content: 'Advanced search and filtering, real-time inventory management, secure payment processing with Stripe, responsive design optimized for mobile shopping.',
        },
        {
          title: 'Impact',
          content: 'Increased conversion rates by 35% and reduced cart abandonment by 20% through optimized checkout flow and improved UX.',
        },
      ],
    },
    {
      id: 'project-2',
      title: 'Design System',
      description: 'Component library and design system for enterprise applications',
      longDescription: 'Created a comprehensive design system with 50+ components, extensive documentation, and accessibility guidelines. Used by multiple teams across the organization.',
      technologies: ['React', 'TypeScript', 'Storybook', 'Figma'],
      image: '/projects/design-system.jpg',
      slides: [
        {
          title: 'Overview',
          content: 'Created a comprehensive design system with 50+ components, extensive documentation, and accessibility guidelines.',
        },
        {
          title: 'Components',
          content: 'Built reusable components including buttons, forms, modals, tables, and data visualization elements. All components follow WCAG 2.1 AA standards.',
        },
      ],
    },
    {
      id: 'project-3',
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive visualizations',
      longDescription: 'Developed a real-time analytics dashboard featuring interactive charts, customizable widgets, and advanced filtering. Handles millions of data points with optimized rendering.',
      technologies: ['Next.js', 'D3.js', 'WebSockets', 'PostgreSQL'],
      image: '/projects/analytics.jpg',
      slides: [
        {
          title: 'Overview',
          content: 'Developed a real-time analytics dashboard featuring interactive charts, customizable widgets, and advanced filtering.',
        },
        {
          title: 'Performance',
          content: 'Optimized rendering to handle millions of data points. Implemented virtual scrolling and lazy loading for smooth performance.',
        },
        {
          title: 'Real-time Updates',
          content: 'WebSocket integration provides live data updates without page refresh. Users can monitor metrics in real-time with sub-second latency.',
        },
      ],
    },
  ],
};
