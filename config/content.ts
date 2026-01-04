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
          content: `Here is a high-level overview of the system architecture. I explain what\'s happening in the demo video on the next slide. Click on the image to get a better view.

          <img src="/images/aironboard-architecture.png" alt="AirOnboard Architecture" />
          `,
        },
        {
          title: "Live Demo",
          content: `

        <video src="/video/aironboard-video.mp4" controls playsinline></video>
        `,
          image: "/demo-placeholder.png",
        },
        {
          title: "Success Metrics",
          content: `This prototype demonstrates measurable improvements across technical performance and business outcomes:

<div class="solutions">
<ul>
  <li>
  <h3>Technical Performance</h3>
  <p><strong>93% reduction in token usage</strong> – Processing 2,600 tokens per session vs 35,000 in traditional approaches, delivering sub-second response times (400ms average from my tests). This architecture achieves scalability, allowing new roles to be added without increasing context size, at just $0.005 per conversation. A 95% cost savings over monolithic prompts.</p>
  </li>
  <li>
  <h3>Business Impact</h3>
  <p><strong>Accelerated time-to-productivity</strong> – New hires would become productive faster and feel less uncertainty. The system delivers instant answers (under 1 minute vs 1+ hours), tracks completion rates, and provides 100% consistent, up-to-date information across all employees.</p>
  </li>
</ul>
</div>`,
        },
      ],
    },
  ],
};
