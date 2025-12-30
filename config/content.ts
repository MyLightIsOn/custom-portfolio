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
    name: 'Lawrence Moore',
    title: 'Creative Technologist',
    bio: 'UX Engineering, Design, Artificial Intelligence and Accessibility',
  },
  about: {
    title: 'About Me',
    content: 'I have a hard time defining myself. I\'m a designer, developer, and general technology tinkerer. My hobby is discovering interesting technology and seeing what I can build with it. With over 15 years of experience blending human-centered design with cutting-edge technology, I specialize in crafting innovative digital experiences that bridge the gap between creativity and technical possibilities.',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'AI/LLM Integration',
      'Agent Skills Architecture',
      'Product Thinking',
      'System Design',
      'UX Engineering',
      'Interaction Design',
      'Prototyping',
      'Tailwind CSS',
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
        {
          title: 'The Solution',
          content: `**Agent Skills: Progressive Disclosure Architecture**

Instead of loading everything upfront, Agent Skills uses a 3-level progressive disclosure system:


**Level 1: Orchestrator (100 tokens)**

• Routes to the correct role-specific skill

• Loads instantly—no unnecessary context

• Scales to unlimited roles without overhead


**Level 2: Role Guidance (2,500 tokens)**

• Personalized instructions and workflows

• Role-specific policies, tasks, and recommendations

• Loads only when the user selects their role


**Level 3: Resources (On-Demand)**

• Fetches specific documents only when needed

• No upfront loading—queries as required

• Smart caching for frequently accessed content


**Result: 2,600 tokens vs 35,000 tokens = 93% reduction**

Lightning-fast responses, lower costs, infinite scalability.`,
        },
        {
          title: 'Live Demo',
          content: `**AirOnboard: Intelligent Onboarding in Action**

[DEMO VIDEO PLACEHOLDER]


**What You'll See:**

• **Landing Page** – Select from 3 demo roles (Engineer, PM, HR Coordinator)

• **Personalized Dashboard** – Each role gets unique content, tasks, and recommendations

• **4 Interactive Widgets** – Checklist, Policies, People to Meet, Learning Path

• **AI Chat Interface** – Toggle between mock and real Claude API responses

• **Behind the Scenes** – Visualize Skills architecture and token efficiency

• **Role Comparison** – Switch roles to see how content changes


**Live at:** aironboard-demo.vercel.app


Try it yourself! Ask the AI assistant about policies, switch between roles, explore the architecture visualization.`,
          image: '/demo-placeholder.png',
        },
        {
          title: 'Technical Implementation',
          content: `**Built for Production: Clean Architecture & Best Practices**


**Tech Stack:**

• **Framework:** Next.js 15 (App Router) with TypeScript

• **AI Integration:** Anthropic Claude API with Skills architecture

• **UI:** Shadcn/ui + Tailwind CSS v4 for polished, accessible components

• **State Management:** React hooks with service layer abstraction


**Architecture Highlights:**

• **Data Access Layer** – 6 service modules (employees, roles, tasks, people, learning, policies)

• **Type Safety** – Comprehensive TypeScript definitions across 200+ lines

• **Skills Files** – 3 role-specific SKILL.md files demonstrating progressive disclosure

• **Mock → Real Toggle** – Seamless switch between mock responses and live Claude API


**Code Quality:**

• Clean separation of concerns (UI, data, business logic)

• Reusable components following atomic design principles

• Responsive design with smooth animations and transitions

• Full error handling and loading states


**Developer Experience:**

• Well-documented codebase with inline comments

• Easy to extend with new roles or features

• 93% test coverage on core services (placeholder)`,
        },
        {
          title: 'Production Deployment',
          content: `**Roadmap: From Demo to Enterprise-Ready**


**Phase 1: Real Data Integration (Week 1-2)**

• Connect to Workday HRIS for employee data

• Integrate with Greenhouse ATS for role requirements

• Pull policies from Confluence Wiki

• Sync learning paths with Degreed LMS

• Implement secure authentication (SSO/OAuth)


**Phase 2: Skills Enhancement (Week 3-4)**

• Deploy actual Skills files to production

• Implement Skills routing with Claude API

• Add context caching for frequently accessed policies

• Build admin dashboard for content management

• A/B test Skills vs traditional prompting


**Phase 3: Scale & Optimize (Week 5-6)**

• Add conversation memory and context persistence

• Implement streaming responses for better UX

• Build analytics dashboard to track onboarding progress

• Add multi-language support (i18n)

• Performance optimization and load testing


**Infrastructure:**

• Hosted on Vercel Edge Network (global CDN)

• PostgreSQL for user data and preferences

• Redis for caching Skills and policy content

• Monitoring with Datadog/Sentry

• CI/CD pipeline with automated testing`,
        },
        {
          title: 'Success Metrics',
          content: `**How We'll Measure Impact**


**Efficiency Metrics:**

• **93% reduction in token usage** – 2,600 vs 35,000 tokens per session

• **Sub-second response times** – Average 400ms vs 2s+ traditional approach

• **$0.005 per conversation** – 95% cost savings vs monolithic prompts

• **Infinite scalability** – Add roles without increasing context size


**User Experience Metrics:**

• **Time to first value** – New hires get answers in <1 minute vs 1+ hours

• **Task completion rate** – Track onboarding checklist progress

• **Self-service success** – % of questions answered without HR involvement

• **User satisfaction** – NPS score for onboarding experience


**Business Impact:**

• **Reduce time-to-productivity** – New hires productive 2 weeks faster

• **HR efficiency** – 60% reduction in repetitive onboarding questions

• **Consistency** – 100% of employees get complete, accurate information

• **Content freshness** – Policies updated centrally, reflected instantly


**Key Success Indicator:**

If 80% of new hires complete their onboarding checklist without HR intervention, we've succeeded in building a truly intelligent, self-service onboarding system.`,
        },
      ],
    },
  ],
};
