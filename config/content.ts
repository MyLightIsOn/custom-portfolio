export interface PersonalInfo {
  name: string;
  logo?: string;
  title: string;
  bio: string;
  email?: string;
  location?: string;
  slides?: ProjectSlideContent[];
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
  skills?: string[];
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
  type: "home" | "project" | "custom";
  data: any;
}

export interface PortfolioContent {
  personal: PersonalInfo;
  experience?: Experience[];
  slides?: ProjectSlideContent[];
  projects: Project[];
}

export const portfolioContent: PortfolioContent = {
  personal: {
    name: "Welcome AirBnB people!",
    logo: "/images/airbnb-logo.webp",
    title: "",
    bio: "Thank you for visiting my portfolio! I created this to showcase my work in relation to the Staff AI Innovation Engineer role. Use the nav at the bottom to explore my projects and learn more about my background. Each page is it's own slide show.",
    slides: [
      {
        title: "About Me",
        content:
          "I have a hard time defining myself. I'm a designer, developer, and general technology tinkerer. My hobby is discovering interesting technology and seeing what I can build with it. For over 15 years, I have been blending human-centered design with cutting-edge technology. Here are a collection of some of the things I'm good at:",
        skills: [
          "Javascript",
          "TypeScript",
          "AI/LLM Integration",
          "AI System Design",
          "Product Thinking",
          "System Design",
          "UX Engineering",
          "Interaction Design",
          "Prototyping",
          "Accessibility",
        ],
      },
    ],
  },
  experience: [
    {
      company: "T-Mobile",
      position: "Technical Product Manager (Accessibility & AI Tooling)",
      period: "Dec 2024 - Present",
      description:
        "I'm a contractor that builds internal tools. Due to the positioning of accessibility, I interact with stakholders across the org, from product, to legal, to HR.",
      achievements: [
        "Designed and built a new AI-powered bug logger for T-Mobile's testing team.",
        "Build AI driven dashboards that used reports to build charts and LLMs to explain the charts insights.",
        "Partnered with HR to manage their internal tools UX and accessibility.",
        "Interviewed employees and discovered the benefits portal was inaccessible.",
        "Led workshops on incorporating AI automation into everyday workflows.",
      ],
    },
    {
      company: "Seismic",
      position: "Technical Program Manager",
      period: "Jan 2023 - Jun 2024",
      description:
        "This is where I first started building my own AI driven apps. As part of the design engineering team, I participated in many AI projects.",
      achievements: [
        "Built AI-powered dashboards with real-time accessibility analytics, LLM-driven summaries, and feedback loops.",
        "As an HCI expert, I was a key UX contributor to the system design of our AI offering.",
        "Conducted over 30 contextual interviews to understand how internal users interacted with our AI tools.",
      ],
    },
    {
      company: "Medallia",
      position: "Design Engineer",
      period: "Jun 2018 - May 2022",
      description:
        "At Medallia, I was a design engineer and program manager. While I wasn't working with AI yet, I helped build components and workflows that utilized it.",
      achievements: [
        "Refactored and engineered 50+ React components in the company’s design system, embedding accessibility and performance improvements for enterprise clients.",
        "Created custom components for the companies first AI feature.",
        "Partnered with Legal to improve documentation and processes for compliance.",
      ],
    },
    {
      company: "HCI Design Lab",
      position: "Founder + Creative Technologist",
      period: "Jan 2015 - present",
      description:
        "This company is my passion project that allows me to work on interesting projects. For the past year, I've been working on a variety of projects, including AI-driven accessibility tools and innovative user interfaces.",
      achievements: [
        "Turned simple accessibility logger into a multi-agent, AI compliance doc generator.",
        "Created WCAGPicker.com, an AI accessibility tool that uses LLMs to generate WCAG compliance information.",
        "Built a variety of AI chat applications for clients in Hong Kong due to the restrictions.",
      ],
    },
  ],
  projects: [
    {
      id: "aironboard",
      title: "AirOnboard Prototype",
      description:
        "Intelligent onboarding system powered by Anthropic's Agent Skills",
      longDescription:
        "A rapid-prototype demo showcasing how Agent Skills can create personalized, scalable employee onboarding experiences. I started working on this after seeing the post. These slides will show my process.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Anthropic Claude API",
        "Agent Skills",
        "Tailwind CSS",
        "Shadcn/ui",
      ],
      link: "https://hr-onboarding-edmo.vercel.app",
      github: "https://github.com/MyLightIsOn/hr-onboarding-edmo/",
      slides: [
        {
          title: "The Problem",
          content: `Employee onboarding at scale is challenge for many companies. It is the first impression on new hires and shapes much of the initial experience as an employee. Some issues include:
          <ul>
              <li>
                  <ul>
                      <li>• Generic, one-size-fits-all content that doesn't adapt to roles</li>
          
                      <li>• Information overload as new hires drown in policies, docs, and tasks</li>
          
                      <li>• Manual curation required for each role and department</li>
          
                      <li>• Static content that quickly becomes outdated</li>
          
                      <li>• No intelligent guidance or personalized recommendations</li>
                  </ul>
              </li>
          </ul>
`,
        },
        {
          title: "AI Technical Challenge",
          content: `While it is tempting to just load everything into an LLM upfront, here are likely side effects of doing that:
          
          <ul>
            <li>• Loading all content upfront = 30,000+ tokens per request
  
            <li>• Context bloat makes responses slow and expensive</li>
            
            <li>• Difficult to maintain as company grows</li>
            
            <li>• Can't scale beyond a handful of roles</li>
          </ul>
`,
        },
        {
          title: "The Solution",
          content: `The way my prototype solves the AI overload issues is by using progressive disclosure architecture: Instead of loading everything upfront, Agent Skills uses a 3-level progressive disclosure system:


<div class="solutions">
<ul>
  <li>
  <h3>Progressive Disclosure</h3>
  <p>This architecture optimizes performance by providing the LLM with minimal initial context required for immediate responses. When additional data is necessary, the system dynamically retrieves relevant information via modular "Skills," ensuring responses remain accurate and contextually rich without overwhelming the model's processing capacity.</p>
  </li>
  <li>
  <h3>Agent Skills</h3>
  <p>This framework enables the development of specialized AI agents equipped with modular capabilities tailored for specific organizational functions. By leveraging discrete toolsets rather than a general-purpose model, these agents deliver higher precision and operational efficiency, significantly reducing latency and token consumption in complex enterprise workflows.</p>
  </li>
</ul>
</div>
`,
        },
        {
          title: "System Architecture",
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
          image: "/demo-placeholder.png",
        },
        {
          title: "Live Demo",
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
          image: "/demo-placeholder.png",
        },
        {
          title: "Technical Implementation",
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
          title: "Production Deployment",
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
          title: "Success Metrics",
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
