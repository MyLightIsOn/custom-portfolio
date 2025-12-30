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

export const portfolioContent: PortfolioContent = {
  personal: {
    name: 'Lawrence Kim',
    title: 'Staff AI Innovation Engineer Candidate',
    bio: 'Building the future of employee onboarding with Anthropic\'s Agent Skills',
    location: 'Las Vegas, NV',
  },
  about: {
    title: 'Why Airbnb?',
    content: 'I\'m passionate about using AI to solve real-world problems at scale. Airbnb\'s commitment to innovative employee experiences and your work in AI-powered tools aligns perfectly with my expertise in building intelligent systems. I\'ve spent the last week building AirOnboard to demonstrate how Agent Skills can transform onboarding—not just as a concept, but as a working product.',
    skills: [
      'Next.js',
      'TypeScript',
      'AI/LLM Integration',
      'Agent Skills Architecture',
      'Product Thinking',
      'System Design',
      'UX Engineering',
    ],
  },
  education: [
    {
      institution: 'Your University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      year: '20XX',
      description: 'Focus on artificial intelligence and human-computer interaction.',
    },
  ],
  projects: [
    {
      id: 'aironboard',
      title: 'AirOnboard',
      description: 'Intelligent onboarding system powered by Anthropic\'s Agent Skills',
      longDescription: 'A production-ready demo showcasing how Agent Skills can create personalized, scalable employee onboarding experiences that reduce context usage by 93% while delivering role-aware guidance.',
      technologies: ['Next.js 15', 'TypeScript', 'Anthropic Claude API', 'Agent Skills', 'Tailwind CSS', 'Shadcn/ui'],
      link: 'https://aironboard-demo.vercel.app',
      github: 'https://github.com/yourusername/aironboard',
      slides: [
        {
          title: 'The Problem',
          content: `Employee onboarding at scale is broken.

**Traditional Challenges:**

• Generic, one-size-fits-all content that doesn't adapt to roles

• Information overload—new hires drown in policies, docs, and tasks

• Manual curation required for each role and department

• Static content that quickly becomes outdated

• No intelligent guidance or personalized recommendations


**The AI Approach Falls Short Too:**

• Loading all content upfront = 35,000+ tokens per request

• Context bloat makes responses slow and expensive

• Difficult to maintain as company grows

• Can't scale beyond a handful of roles


**What if we could deliver personalized onboarding that's fast, scalable, and intelligent?**`,
        },
      ],
    },
  ],
};
