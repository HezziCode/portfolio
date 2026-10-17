export const websiteContent = {
  hero: {
    greeting: "Hi everyone 👋, I am Huzaifa Sys",
    title: "Full Stack AI\nEngineer Based\nin Pakistan",
    description:
      "I build full-stack web applications and autonomous AI agents. From responsive Next.js platforms and FastAPI backends to appointment booking bots built with the OpenAI Agent SDK, I help businesses ship fast, reliable software.",
    buttons: {
      contact: "Get in Touch",
      cv: "Download CV",
    },
    socials: {
      github: "https://github.com/HezziCode",
      instagram: "https://instagram.com/huzaifasys",
      linkedin: "https://linkedin.com/in/huzaifasys",
    },
    stats: {
      label: "Projects Shipped",
      value: "10+",
    },
  },

  aboutStats: {
    tag: "PHILOSOPHY",
    skills: [
      { name: "Full Stack", icon: "code" },
      { name: "AI Agents", icon: "ai" },
      { name: "DevOps", icon: "devops" },
    ],
    skillsTicker: ["Full Stack", "AI Agents", "DevOps"],
    subLinks: ["GITHUB", "LINKEDIN", "INSTAGRAM"],
    manifesto: {
      normal:
        "I build modern full-stack web applications and intelligent AI agents. From clean user interfaces to automated appointment booking,",
      bold: "I focus on shipping reliable software that solves real business problems and runs smoothly.",
    },
  },

  workProcess: {
    tag: "METHODOLOGY",
    headline: "WORK\nPROCESS",
    description:
      "How I design, build, and deploy full-stack web applications and AI agents from start to finish.",
    steps: [
      {
        id: "01",
        title: "UNDERSTANDING YOUR GOALS",
        description:
          "We start by discussing your product requirements — whether you need a full-stack SaaS platform, an appointment booking AI agent, or custom workflow automation.",
        icon: "ear",
      },
      {
        id: "02",
        title: "SYSTEM & UI ARCHITECTURE",
        description:
          "Planning the user interface, database schemas, and AI agent logic so the entire application is intuitive, secure, and built on a solid foundation.",
        icon: "search",
      },
      {
        id: "03",
        title: "FULL-STACK & AI DEVELOPMENT",
        description:
          "Building the application using Next.js, FastAPI, and the OpenAI Agent SDK. Connecting databases, APIs, and calendars for a complete, production-ready product.",
        icon: "code",
      },
      {
        id: "04",
        title: "TESTING & PRODUCTION LAUNCH",
        description:
          "Testing every feature and user flow thoroughly, setting up cloud hosting, and ensuring your application and AI agents run fast and reliably.",
        icon: "rocket",
      },
    ],
  },

  testimonials: [] as Array<{
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
    companyIcon: string;
  }>,

  projects: [
    {
      slug: "al-rafai-clinic",
      title: "Al-Rafai Clinic — 24/7 AI Patient Appointment Booking",
      tagline:
        "Automates patient appointment booking with 24/7 conversational voice & chat AI, live doctor calendar sync, and SMS confirmations.",
      category: "AI Agents",
      featured: true,
      year: "2025",
      role: "Full Stack & AI Engineer",
      client: "Al-Rafai Clinic",
      liveUrl: "https://al-rafai-clinic.vercel.app",
      githubUrl: "https://github.com/HezziCode/al-rafai-clinic-agent",
      coverGradient: "from-blue-600 via-primary to-slate-900",
      image: "/projects/project-al-rafai.png",
      overview:
        "Engineered for Dr. Fatima's medical practice in North Karachi, this platform automates patient appointments through an intelligent 24/7 conversational voice and chat agent, real-time doctor slot availability, and patient follow-up notifications.",
      challenge:
        "Eliminating missed calls during peak clinic hours, reducing administrative front-desk friction, and handling patient booking inquiries reliably with zero double-booking.",
      solution:
        "Built a full-stack Next.js web application with a 24/7 conversational voice and chat AI agent that checks live doctor calendar slots and confirms bookings with instant alerts.",
      architecture: [
        "Autonomous Conversational Voice & Chat Agent for Appointment Booking",
        "Dynamic Doctor Schedule & Time-Slot Availability Engine",
        "Next.js App Router with Responsive Patient Booking UI",
        "Automated Appointment Confirmation & Doctor Admin Dashboard",
      ],
      techStack: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AI Agents",
        "Voice AI",
        "PostgreSQL",
        "Vercel",
      ],
      metrics: [
        { label: "AI Booking Flow", value: "Voice & Chat" },
        { label: "Doctor Schedule", value: "Live Sync" },
        { label: "Architecture", value: "Next.js + Postgres" },
      ],
    },
    {
      slug: "cogniclose",
      title: "CogniClose — B2B Outbound Sales Engine & Pipeline Platform",
      tagline:
        "Managed B2B outbound engine replacing complicated prospecting tools with verified lead research and automated sales pipeline booking.",
      category: "Full Stack",
      featured: true,
      year: "2025",
      role: "Lead Full Stack Engineer",
      client: "CogniClose (US Client)",
      liveUrl: "https://cogniclose.com",
      githubUrl: "",
      coverGradient: "from-blue-600 via-indigo-600 to-slate-900",
      image: "/projects/project-cogniclose-showcase.png",
      overview:
        "Engineered as a full-scale digital platform for CogniClose, a modern Outbound-as-a-Service (OaaS) company based in the US. The platform replaces traditional SDR overhead and fragmented prospecting tools with a streamlined outbound engine, verified prospect research, and automated meeting booking directly into client sales pipelines.",
      challenge:
        "B2B companies waste substantial capital on complex prospecting tools and SDR hires, leading to poor inbox deliverability, high churn, and empty sales pipelines.",
      solution:
        "Architected a high-speed Next.js web platform with interactive ICP funnels, responsive case studies, and automated booking to acquire qualified sales calls.",
      architecture: [
        "Next.js App Router Architecture with Server-Side Rendering & Edge Caching",
        "Fluid 60fps Micro-Interactions & Kinetic Animations powered by Framer Motion",
        "Interactive ICP Intelligence Calculator & Multi-Step Lead Qualification Funnel",
        "Seamless CRM Webhook Integrations & Real-Time Meeting Booking Calendar",
      ],
      techStack: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        "CRM Webhooks",
      ],
      metrics: [
        { label: "Rendering", value: "Next.js SSR" },
        { label: "Lead Funnel", value: "ICP Guided" },
        { label: "Integrations", value: "CRM Webhooks" },
      ],
    },
    {
      slug: "spec-driven-todoz",
      title: "ChatTask — To-Do App with AI Chat Assistant",
      tagline:
        "A to-do application with an integrated AI chat assistant that lets you create, edit, delete, and manage tasks through natural chat.",
      category: "Full Stack",
      featured: true,
      year: "2025",
      role: "Full Stack & Cloud Engineer",
      client: "Independent Product",
      liveUrl: "https://secure-todoz.vercel.app/",
      githubUrl: "https://github.com/HezziCode/spec-driven-devlopment-hackathone",
      coverGradient: "from-teal-600 via-primary to-slate-900",
      image: "/projects/project-secure-todoz-showcase.png",
      overview:
        "ChatTask is a to-do app with an integrated AI chat assistant. You can create, edit, and delete tasks through the UI or directly through chat. Built with Next.js, FastAPI, PostgreSQL, and OpenAI SDK with MCP.",
      challenge:
        "Standard to-do applications require manual clicking for every item. The challenge was building an app where users can manage tasks via UI buttons or through an AI chat assistant.",
      solution:
        "Built with Next.js, Python FastAPI, PostgreSQL, and OpenAI SDK using MCP for chat task actions. Containerized with Docker and Kubernetes for an AWS trial, with live hosting on Vercel.",
      architecture: [
        "Next.js Frontend with Clean Responsive Task & Chat Interface",
        "FastAPI (Python) REST API for Fast Task CRUD Operations",
        "PostgreSQL Database for Reliable Task Storage & State",
        "OpenAI SDK with MCP (Model Context Protocol) for Chat Tool Calling",
        "Multi-Stage Docker Containers & Kubernetes Cloud Deployment",
        "Tested on AWS (1-Month Free Trial) & Live Web Deployment on Vercel",
      ],
      techStack: [
        "Next.js",
        "FastAPI",
        "OpenAI SDK",
        "Python",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "MCP",
      ],
      metrics: [
        { label: "Task Actions", value: "Chat + UI" },
        { label: "AI Integration", value: "OpenAI SDK" },
        { label: "Live Hosting", value: "Vercel Web" },
      ],
    },
    {
      slug: "ui-ux-hackathon",
      title: "Modern Living — High-Speed E-Commerce & Furniture Store",
      tagline:
        "High-speed online furniture store with instant search, real-time inventory updates, and a friction-free checkout.",
      category: "Full Stack",
      featured: false,
      year: "2025",
      role: "Full Stack & UI/UX Engineer",
      client: "Living Storefront",
      liveUrl: "https://ui-ux-hackhathone.vercel.app",
      githubUrl: "https://github.com/HezziCode/ui-ux-hackhathone",
      coverGradient: "from-blue-600 via-primary to-slate-900",
      image: "/projects/project-ecommerce.png",
      overview:
        "Engineered for a modern living and furniture marketplace, this full-stack web application delivers lightning-fast product browsing, dynamic content synchronization with Sanity Headless CMS, seamless customer authentication with Clerk, and persistent order state.",
      challenge:
        "Traditional e-commerce platforms often suffer from slow catalog filtering, complicated CMS workflows, and high drop-off rates during checkout.",
      solution:
        "Architected a high-speed headless store with Next.js App Router, Sanity CMS, and Clerk authentication, delivering instant product search and a smooth checkout.",
      architecture: [
        "Headless Content Lake & Dynamic Schema with Sanity CMS",
        "Secure Customer Identity, OAuth & Session Management via Clerk",
        "Accessible, 60fps Micro-Interactions built with Radix UI & Tailwind CSS",
        "Prisma ORM with PostgreSQL for Cart State & Order Checkout Sync",
      ],
      techStack: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Sanity CMS",
        "Clerk Auth",
        "Prisma",
        "Tailwind CSS",
        "Radix UI",
      ],
      metrics: [
        { label: "Page Hydration", value: "< 80ms" },
        { label: "Lighthouse Score", value: "99/100" },
        { label: "Catalog Products", value: "100+ Live" },
      ],
    },
        {
      slug: "crypto-agent",
      title: "Crypto Agent — Autonomous Market Intelligence Assistant",
      tagline:
        "Conversational AI assistant powered by OpenAI Agent SDK and Chainlit with sub-2s tool execution for real-time crypto price tracking, market sentiment, and token analytics.",
      category: "AI Agents",
      featured: true,
      year: "2025",
      role: "AI Agent & Full Stack Developer",
      client: "Independent Product",
      liveUrl: "https://crypto-agent-0ay9.onrender.com/",
      githubUrl: "https://github.com/HezziCode/crypto-agent",
      coverGradient: "from-purple-600 via-primary to-slate-900",
      image: "/projects/project-crypto-agent-light.png",
      overview:
        "Crypto Agent is an autonomous financial assistant built to simplify crypto market analysis. Using the OpenAI Agent SDK and Chainlit UI, it processes natural language questions and executes real-time function calls to external market APIs for token prices, sentiment indicators, and market momentum summaries.",
      challenge:
        "Crypto traders and developers waste time navigating multiple fragmented dashboards to verify market trends, token liquidity, and news sentiment before taking action.",
      solution:
        "Engineered an agentic assistant leveraging OpenAI function tool calling connected to market APIs, serving instant structured crypto insights with sub-2s response latency.",
      architecture: [
        "OpenAI Agent SDK Engine with Custom Financial Function Tools",
        "Chainlit UI Framework for Real-Time Streaming & Interactive Tool Artifacts",
        "Python AsyncIO Service Architecture for Low-Latency API Integrations",
        "Live Market Sentiment (Fear & Greed Index) & Token Metrics Aggregation",
        "Multi-Stage Docker Container Service Deployed for Production on Render",
      ],
      techStack: [
        "OpenAI Agents SDK",
        "Chainlit",
        "Python",
        "FastAPI",
        "Docker",
        "Function Tools",
        "Render",
      ],
      metrics: [
        { label: "Query Latency", value: "< 2.0 sec" },
        { label: "Market Data", value: "Real-Time" },
        { label: "Tool Execution", value: "Sub-Second" },
      ],
    },
    {
      slug: "humanoid-robotics-book",
      title: "Humanoid AI — Interactive Learning Platform with 24/7 AI Tutor",
      tagline:
        "Interactive digital learning platform with an embedded AI tutor that answers student queries 24/7 in English and Urdu.",
      category: "AI Agents",
      featured: true,
      year: "2025",
      role: "AI Author & Full Stack Engineer",
      client: "Open Education Initiative",
      liveUrl: "https://humanoid-intelligence.vercel.app/",
      githubUrl: "https://github.com/HezziCode/physical-ai-and-humanoid-robotics-book",
      coverGradient: "from-emerald-600 via-primary to-slate-900",
      image: "/projects/project-humanoid.png",
      overview:
        "An AI-native textbook and digital knowledge platform bridging advanced humanoid robotics engineering with artificial intelligence, featuring an integrated RAG (Retrieval Augmented Generation) conversational tutor with English and Urdu language support.",
      challenge:
        "Traditional robotics textbooks become outdated quickly and lack interactive ways for students to query complex engineering concepts in their native language.",
      solution:
        "Built an interactive learning platform using Docusaurus and FastAPI, integrated with the OpenAI Agents SDK to provide a 24/7 bilingual AI tutor in English and Urdu.",
      architecture: [
        "Docusaurus v3.9 Documentation Platform with Custom Interactive React MDX",
        "FastAPI Async Python 3.14 Backend with Intelligent RAG Retrieval Pipeline",
        "Bilingual Language Switching Engine Supporting English and Urdu",
        "OpenAI Agents SDK Embedded Chatbot with Grounded Knowledge Guardrails",
      ],
      techStack: [
        "Docusaurus",
        "FastAPI",
        "Python 3.14",
        "OpenAI Agents SDK",
        "RAG",
        "TypeScript",
        "Vercel",
      ],
      metrics: [
        { label: "Knowledge Engine", value: "RAG Pipeline" },
        { label: "Backend API", value: "FastAPI Async" },
        { label: "Bilingual Support", value: "English & Urdu" },
      ],
    },
    {
      slug: "whatsapp-ai-agent",
      title: "WhatsApp AI Agent — Autonomous Action & Messaging Assistant",
      tagline:
        "Autonomous WhatsApp AI agent that parses natural voice/text commands ('text my mom I'll be late') and executes real-time messaging workflows via LLM tool-calling.",
      category: "AI Agents",
      featured: true,
      year: "2025",
      role: "AI Agent & Backend Engineer",
      client: "Open-Source AI Tool",
      liveUrl: "https://github.com/HezziCode/My-What-sApp-Agent",
      githubUrl: "https://github.com/HezziCode/My-What-sApp-Agent",
      coverGradient: "from-emerald-600 via-teal-600 to-slate-900",
      image: "/projects/project-whatsapp-agent.png",
      overview:
        "An action-oriented WhatsApp AI agent engineered to process natural voice and text requests and autonomously trigger messaging workflows, calendar updates, and notifications using LLM tool-calling and API integrations.",
      challenge:
        "Standard AI chatbots only return plain text responses instead of taking real, practical actions on behalf of the user in everyday messaging apps.",
      solution:
        "Built a tool-calling AI agent connected to WhatsApp messaging webhooks, allowing users to send natural commands like 'Message mom I'll be 20 minutes late' and have the agent execute the action instantly.",
      architecture: [
        "LLM Tool-Calling Engine for Natural Intent Recognition",
        "WhatsApp Messaging Webhook Service & Automated Message Dispatch",
        "Python & FastAPI Async Service Architecture for Low-Latency Responses",
        "Secure Environment Configuration & Error-Handling Middleware",
      ],
      techStack: [
        "Python",
        "FastAPI",
        "WhatsApp API",
        "LLM Tool Calling",
        "AI Agents",
        "Docker",
        "Webhooks",
      ],
      metrics: [
        { label: "Architecture", value: "Python Async CLI" },
        { label: "Tool Calling", value: "OpenAI Agent SDK" },
        { label: "Messaging API", value: "WhatsApp Cloud" },
      ],
    },
    {
      slug: "huzen-perfumes",
      title: "Huzen Perfumes — Luxury Fragrance Store with WhatsApp Ordering",
      tagline:
        "Luxury perfume e-commerce storefront with immersive product showcases and instant WhatsApp checkout for higher conversion.",
      category: "Full Stack",
      featured: true,
      year: "2025",
      role: "Full Stack Engineer",
      client: "Made for Client",
      liveUrl: "https://huzen-perfumes.vercel.app/",
      githubUrl: "",
      coverGradient: "from-amber-600 via-primary to-slate-900",
      image: "/projects/project-huzen.png",
      overview:
        "Engineered for a high-end fragrance retailer, Huzen Perfumes delivers a sensory digital shopping experience with fluid micro-interactions, responsive scent tiers, and instant WhatsApp customer checkout flow.",
      challenge:
        "Presenting high-end fragrances online requires luxury visuals and smooth animations without causing browser lag or high bounce rates on mobile.",
      solution:
        "Crafted a modern e-commerce storefront using Next.js 16 and Framer Motion with fluid 60fps animations, instant catalog filtering, and direct WhatsApp ordering.",
      architecture: [
        "Next.js 16 Turbopack Architecture with Modular Component Design",
        "Framer Motion Kinetic Physics & Scroll-Linked Luxury Product Reveals",
        "Mobile-First Responsive Layout with Fluid Touch-Optimized Interactions",
        "Instant WhatsApp Cart Persistence & Direct Customer Order Routing",
      ],
      techStack: [
        "Next.js 16",
        "Turbopack",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
      ],
      metrics: [
        { label: "Frontend", value: "Next.js 16" },
        { label: "Checkout Mode", value: "Direct WhatsApp" },
        { label: "Smooth Animation", value: "60 FPS" },
      ],
    },
    {
      slug: "hezzi-blogs",
      title: "HezziBlogs — High-Performance Tech Publication & Content Platform",
      tagline:
        "Modern engineering blog and publishing platform designed for instant page loads, zero reading lag, and high Google search visibility.",
      category: "Full Stack",
      featured: false,
      year: "2025",
      role: "Full Stack Engineer & Writer",
      client: "Personal Publication",
      liveUrl: "https://hezzi-blogs.vercel.app/",
      githubUrl: "https://github.com/HezziCode/Blog",
      coverGradient: "from-indigo-600 via-primary to-slate-900",
      image: "/projects/project-blog.png",
      overview:
        "A high-performance technical blogging and publishing engine built to share architectural blueprints, code breakdowns, and real-world system designs with the software engineering community.",
      challenge:
        "Publishing technical content often suffers from layout shifts, slow code rendering, and clunky dark-mode transitions that hurt reader retention.",
      solution:
        "Engineered a fast publication platform on Next.js App Router with server-rendered markdown syntax highlighting, 100/100 Lighthouse SEO, and seamless theme switching.",
      architecture: [
        "Next.js App Router with Server-Rendered Markdown Syntax Highlighting",
        "Dynamic Light/Dark Theme Switching with Zero Flash of Unstyled Content",
        "User Authentication, Profile Management, and Reactive Comment Threads",
        "SEO-Optimized Metadata Engine with OpenGraph Social Preview Cards",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MDX",
        "Vercel",
      ],
      metrics: [
        { label: "SEO Lighthouse", value: "100/100" },
        { label: "Hydration Latency", value: "< 60ms" },
        { label: "Reading Experience", value: "0 Jank" },
      ],
    },
    {
      slug: "openai-agent-sdk",
      title: "OpenAI Agent SDK — Autonomous AI Agent & Workflow Blueprints",
      tagline:
        "Production-ready blueprints for building autonomous AI agents that handle customer requests, execute tools, and automate business operations.",
      category: "AI Agents",
      featured: true,
      year: "2025",
      role: "AI Systems Architect",
      client: "Open Source Community",
      liveUrl: "https://github.com/HezziCode/Learn-Open-Ai-Agent-SDK/tree/main/Learning-Open-AI-Agent-SDK",
      githubUrl: "https://github.com/HezziCode/Learn-Open-Ai-Agent-SDK",
      coverGradient: "from-sky-600 via-primary to-slate-900",
      image: "/projects/project-openai-sdk.png",
      overview:
        "Created as a comprehensive masterclass and open-source blueprint repository to help engineers master autonomous multi-agent development using the OpenAI Agent SDK. Covers everything from foundational tool patterns to production multi-agent handoffs, guardrails, and telemetry.",
      challenge:
        "The OpenAI Agent SDK is a newly released framework with limited real-world production guides for state persistence, tool error recovery, and multi-agent handoffs.",
      solution:
        "Built 16 production-ready architectural modules with step-by-step code implementations demonstrating Agent-as-Tool patterns, custom handoffs, and safety guardrails.",
      architecture: [
        "Hierarchical Agent-as-Tool Orchestration & Delegation Blueprints",
        "Deterministic Multi-Agent Custom Handoffs & State Transitions",
        "Comprehensive Input/Output Guardrails for Safety & Schema Validation",
        "Streaming Responses, Session State Memory, and Run-Level Observability",
      ],
      techStack: [
        "OpenAI Agents SDK",
        "Python",
        "Multi-Agent Handoffs",
        "Tool Calling",
        "Guardrails",
        "Streaming",
        "Tracing",
      ],
      metrics: [
        { label: "Production Modules", value: "16 Blueprints" },
        { label: "Open Access", value: "100% Free" },
        { label: "Architecture Patterns", value: "Multi-Agent" },
      ],
    },
  ],

  about: {
    headingPrefix: "About Me —",
    headingMain: "Who I Am, My Story",
    headingSub: "& The Journey of a",
    headingHighlight: "Full Stack AI Engineer",
    subtext:
      "As a Full Stack & AI Engineer with 1+ year of professional hands-on experience, I build production web applications and autonomous AI agents. Over the course of my engineering journey, I've combined deep foundational learning with real-world shipping — pairing modern TypeScript & Next.js frontends with robust FastAPI backends and practical AI integrations like the OpenAI Agent SDK.",
    boldStatement:
      "I build reliable full-stack software and smart AI agents that help businesses grow and automate real work.",
    image: "/about-real.jpg",
    video: {
      enabled: true,
      customThumbnail: "/huzaifa-who-i-am.jpg",
      tag: "HUZAIFA'S STORY • 1-MIN INTRO",
      titleLine1: "Huzaifa's",
      titleBadge: "Story",
      titleLine2: "Who I Am...",
      subtitle: "The journey, philosophy & the human behind the code",
      duration: "0:53",
      videoUrl: "/video/intro.mp4",
      embedUrl: "/video/intro.mp4",
      caption: "Huzaifa Sys // Full Stack AI Engineer",
      location: "Karachi, Pakistan",
    },
    stats: [
      { value: "0 → 1", label: "Architecture to Live Production" },
      { value: "Full Stack", label: "TypeScript, Next.js & Python" },
      { value: "AI Agents", label: "OpenAI SDK & Webhook Tooling" },
      { value: "End-to-End", label: "Full Ownership & Deployment" },
    ],
  },

  aboutPage: {
    badge: "ENGINEER & BUILDER",
    headline: "Building Full-Stack Web Applications & Intelligent AI Systems",
    subheadline:
      "From responsive web platforms to 24/7 appointment booking agents, I create software that solves real business challenges.",
    video: {
      title: "A 53-Second Video Intro",
      description:
        "Watch this quick intro where I share my background, the full-stack apps and AI agents I build, and how we can work together.",
      videoUrl: "/video/intro.mp4",
      embedUrl: "/video/intro.mp4",
      duration: "0:53",
    },
    experience: {
      description:
        "A timeline of the companies I've worked with, the products I've built, and my day-to-day work in software and AI.",
      jobs: [
        {
          title: "Lead Full Stack & AI Architect",
          company: "Higlax Solutions",
          location: "Onsite",
          period: "2026 — Present",
          periodHover: "May 2026 — Present",
          description:
            "Developing internal enterprise platforms and workflow solutions for UK-based clients using Next.js and FastAPI. Integrating conversational voice AI with Vapi, autonomous multi-agent systems via OpenAI Agent SDK, and end-to-end task automation with Zapier and Docker.",
          technologies: [
            "Next.js",
            "FastAPI",
            "OpenAI Agent SDK",
            "Vapi",
            "Zapier",
            "Docker",
            "TypeScript",
            "Python",
          ],
        },
        {
          title: "Frontend Developer",
          company: "Wewise Labs",
          location: "Remote",
          period: "2025 — 2026",
          periodHover: "Jun 2025 — Jan 2026",
          description:
            "Engineered the responsive frontend and interactive dashboard architecture for Wewise Labs' AI & SaaS platform. Built production-grade web interfaces with Next.js, integrating seamlessly with high-performance Python and FastAPI backend services.",
          technologies: ["Next.js", "Python", "FastAPI"],
        },
        {
          title: "Full Stack AI Engineer",
          company: "Freelance & Independent Consulting",
          location: "Remote / Worldwide",
          period: "2026 — Present",
          periodHover: "Jan 2026 — Present",
          description:
            "Delivering full-stack web platforms, SaaS applications, and custom AI agent workflows for international clients via LinkedIn, Fiverr, and direct advisory contracts. Specializing in Next.js, FastAPI, PostgreSQL database design, and cloud deployments.",
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "FastAPI",
            "PostgreSQL",
            "Node.js",
            "Tailwind CSS",
            "Prisma",
          ],
        },
        {
          title: "Junior Software Developer",
          company: "BixForge Solutions",
          location: "Remote",
          period: "2024 — 2025",
          periodHover: "Dec 2024 — Mar 2025",
          description:
            "Engineered responsive, pixel-perfect web pages and cross-browser frontend layouts for an Europe-based digital agency. Built interactive client portals and scalable page views utilizing Next.js, React, Tailwind CSS, and PHP integrations.",
          technologies: ["Next.js", "React", "Tailwind CSS", "PHP", "HTML5", "CSS3"],
        },
        {
          title: "Faculty & Technical Instructor",
          company: "GIAIC — Governor Initiative for AI & Computing",
          location: "Karachi, PK",
          period: "2025 — 2026",
          periodHover: "July 2025 — July 2026",
          skillsLabel: "Core:",
          description:
            "Guiding thousands of students through their technical learning journey across artificial intelligence and modern web technologies. Leading educational cohorts, attending high-level executive meetings with industry professionals to manage student roadmaps, and providing hands-on project mentorship.",
          technologies: [
            "Technical Leadership",
            "Student Mentorship",
            "Professional Communication",
            "Curriculum Delivery",
            "Executive Meetings",
          ],
        },
      ],
    },
    faq: {
      tag: "Clear Answers",
      title: "Frequently Asked Questions",
      description:
        "Find answers to common questions about my technical stack, engineering standards, and how we can collaborate.",
      categories: [
        {
          id: "general",
          name: "General Information",
          items: [
            {
              question: "Can you work with wireframes or our existing designs?",
              answer:
                "Yes, absolutely. Whether you have complete Figma designs or just rough notes for an AI agent or web app, I can jump in at any stage. I will build clean, fast, and easy-to-use software that matches your vision.",
            },
            {
              question: "What happens after the design is ready & I approve it?",
              answer:
                "Once we agree on the scope, I jump straight into building: setting up the codebase, connecting the OpenAI Agent SDK or backend APIs, building the frontend with Next.js, and sharing live preview links so you can test everything as it develops.",
            },
            {
              question: "I have an agency. Can I outsource work to you?",
              answer:
                "Yes! I regularly partner with agencies, startups, and founders as a Full Stack AI Engineer. I build full-stack web applications, autonomous appointment booking agents, and end-to-end software solutions.",
            },
            {
              question: "What do I need to give you to get started?",
              answer:
                "Just a brief summary of your project, target business goals, any existing design or technical assets, and your ideal timeline. From there, we can schedule a quick 15-minute discovery call to align on technical feasibility, scope, and the delivery roadmap.",
            },
          ],
        },
        {
          id: "purchasing-payment",
          name: "Purchasing and Payment",
          items: [
            {
              question: "How are project milestones and payments structured?",
              answer:
                "Standard engagements are broken down into transparent milestones: typically a 30-50% commencement deposit, interim milestone deliverables with live preview demos, and the final payment upon production handover and sign-off.",
            },
            {
              question: "Do you charge for additional revisions?",
              answer:
                "Minor adjustments, polish, and UX refinements are always included during our review milestones. If there are major scope expansions or brand-new features requested midway through, we discuss and agree on a transparent milestone-based estimate before writing any additional code.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "I accept international bank wire transfers, Stripe, Wise, and Payoneer for seamless cross-border transactions in USD, EUR, or GBP.",
            },
          ],
        },
        {
          id: "plans-pricing",
          name: "Plans and Pricing",
          items: [
            {
              question: "Do you offer monthly retainer plans?",
              answer:
                "Yes, I offer dedicated monthly engineering retainers for growing startups and agencies that require dedicated weekly hours for continuous feature development, code reviews, and architecture optimization.",
            },
            {
              question: "What is the difference between fixed-price and hourly engagements?",
              answer:
                "Fixed-price works best for well-defined project scopes with finalized wireframes and specifications. For exploratory R&D, rapid AI prototyping, or ongoing backlog sprints, hourly or weekly retainers provide the greatest flexibility.",
            },
          ],
        },
        {
          id: "setup-config",
          name: "Setup and Configuration",
          items: [
            {
              question: "What repository and deployment setup do you provide?",
              answer:
                "Every project comes configured with TypeScript, ESLint, Tailwind CSS, automated GitHub Actions CI/CD workflows, environment variable configurations, and automated zero-downtime previews on Vercel or AWS.",
            },
            {
              question: "How do you handle staging and preview environments?",
              answer:
                "Every pull request automatically deploys to an ephemeral preview URL so you and your stakeholders can click through and verify new features on real devices before approving them into main.",
            },
          ],
        },
        {
          id: "ai-features",
          name: "AI & Agentic Systems",
          items: [
            {
              question: "What AI models and frameworks do you build with?",
              answer:
                "I build autonomous systems with the Google Gemini API, OpenAI GPT-4o, Anthropic Claude, LangChain, LangGraph, and LlamaIndex, combining structured outputs, function calling, and vector retrieval (RAG).",
            },
            {
              question: "How do you prevent hallucinations in AI agent workflows?",
              answer:
                "By implementing deterministic tool-calling constraints, strict Pydantic/Zod schema validation on model responses, contextual ground truth embeddings, and multi-turn verification loops.",
            },
          ],
        },
        {
          id: "security-privacy",
          name: "Security and Privacy",
          items: [
            {
              question: "How is client data and code confidentiality protected?",
              answer:
                "I routinely sign mutual Non-Disclosure Agreements (NDAs). All source code remains 100% your intellectual property, stored strictly inside your organization's private GitHub repositories with zero code leakage.",
            },
            {
              question: "How do you handle API keys and private secrets?",
              answer:
                "All sensitive credentials, API keys, and database connection strings are managed strictly via environment variables (.env) and secret managers, ensuring no secrets are ever committed to version control.",
            },
          ],
        },
        {
          id: "support-resources",
          name: "Customer Support and Resources",
          items: [
            {
              question: "Do you provide post-launch support and warranty?",
              answer:
                "Yes, every delivered project includes a complimentary 30-day bug-fixing and monitoring warranty. I make sure everything runs smoothly in production after launch.",
            },
            {
              question: "Do you provide documentation and handover training?",
              answer:
                "Yes, I deliver comprehensive README files, architecture diagrams, API specifications, and recorded Loom video walkthroughs so your team can easily maintain or scale the codebase.",
            },
          ],
        },
      ],
      // Fallback flat items array
      items: [
        {
          question: "Can you work with wireframes or our existing designs?",
          answer:
            "Yes, absolutely. Whether you have complete Figma mockups, preliminary wireframes, or just a rough idea in a Notion document, I can step in at any stage. I will translate your concepts into clean, accessible, and high-performance production code with pixel-perfect precision.",
        },
        {
          question: "What happens after the design is ready & I approve it?",
          answer:
            "Once the architecture and design specs are finalized, I move straight into engineering: setting up the repository, structuring database schemas, developing responsive frontend components with Next.js & Tailwind, implementing backend APIs, and establishing automated CI/CD deployment pipelines with continuous staging previews.",
        },
        {
          question: "Do you charge for additional revisions?",
          answer:
            "Minor adjustments, polish, and UX refinements are always included during our review milestones. If there are major scope expansions or brand-new features requested midway through, we will discuss and agree on a transparent milestone-based estimate before writing any additional code.",
        },
        {
          question: "I have an agency. Can I outsource work to you?",
          answer:
            "Yes, I regularly collaborate with creative agencies, dev shops, and venture-backed startups as an embedded senior full-stack & AI engineer. I integrate seamlessly with your existing team, working directly inside your GitHub repositories, Slack channels, and agile sprint workflows.",
        },
        {
          question: "What do I need to give you to get started?",
          answer:
            "Just a brief summary of your project, target business goals, any existing design or technical assets, and your ideal timeline. From there, we can schedule a quick 15-minute discovery call to align on technical feasibility, scope, and the delivery roadmap.",
        },
      ],
    },
    story: [
      "Based in Pakistan, I have spent years architecting scalable full-stack web applications and AI-driven systems for international clients across North America, Europe, and Asia.",
      "My engineering philosophy is rooted in pragmatism: writing clean, typed TypeScript and Python code, designing intuitive user journeys, and deploying resilient systems that handle growth without breaking.",
      "When I am not deep in code or fine-tuning agent workflows, I am researching distributed systems, optimizing Core Web Vitals, and exploring the bleeding edge of generative AI.",
    ],
    techCategories: [
      {
        name: "Frontend Architecture",
        tools: [
          "Next.js (App Router)",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Motion / Framer Motion",
          "Zustand / Redux",
          "Shadcn UI",
        ],
      },
      {
        name: "AI & Agentic Systems",
        tools: [
          "Autonomous AI Agents",
          "LangChain & LangGraph",
          "LlamaIndex",
          "Google Gemini API",
          "OpenAI / Anthropic APIs",
          "Vector Databases (Pinecone, pgvector)",
          "RAG Pipelines",
        ],
      },
      {
        name: "Backend & Databases",
        tools: [
          "Node.js & Express",
          "Python & FastAPI",
          "PostgreSQL & MySQL",
          "Supabase & Firebase",
          "Prisma & Drizzle ORM",
          "REST & GraphQL APIs",
          "Redis In-Memory Caching",
        ],
      },
      {
        name: "Cloud & DevOps",
        tools: [
          "Docker & Containers",
          "AWS (S3, EC2, Lambda)",
          "Vercel & Cloudflare",
          "CI/CD (GitHub Actions)",
          "Linux & Shell Scripting",
          "Nginx & Reverse Proxies",
        ],
      },
    ],
    milestones: [
      {
        year: "2024 — Present",
        title: "Lead Full Stack AI Engineer",
        description:
          "Designing autonomous AI agents, enterprise Next.js applications, and cloud microservices for global clients.",
      },
      {
        year: "2022 — 2024",
        title: "Full Stack AI Engineer",
        description:
          "Developed high-traffic SaaS dashboards, integrated Stripe payment systems, and optimized frontend web vitals.",
      },
      {
        year: "2020 — 2022",
        title: "Frontend & UI/UX Specialist",
        description:
          "Crafted modern design systems, reactive UI components, and accessible web experiences.",
      },
    ],
  },

  contactPage: {
    badge: "GET IN TOUCH",
    headline: "Let's Build Something Exceptional Together",
    description:
      "Have a new project, an AI system to build, or need an experienced full-stack engineer? Book a direct 30-minute discovery call below or send a message.",
    calLink: "https://cal.com/huzaifasys/30min",
    calUsername: "huzaifasys/30min",
    email: "huzaifasys@gmail.com",
    phone: "+92 346 2037714",
    location: "Pakistan (PKT • UTC+5)",
    timezoneNote: "Flexible schedule with 4–6 hours daily overlap with US & European working hours.",
    availability: "Available for new client contracts & technical advisory.",
  },

  footer: {
    card: {
      statusBadge: "Available for work",
      headline: "Need a high-performance web app or AI-powered solution?",
      subheadline:
        "I build fast, scalable web applications, smooth interactions, and practical automations for modern teams and founders.",
      buttonText: "Send Inquiry",
      buttonHref: "/contact",
    },
    name: "Huzaifa Sys",
    thankYouText:
      "Thank you for exploring my work! Whether you're looking to build an enterprise web application, deploy autonomous AI agents, or optimize scalable cloud infrastructure — let's connect and build something exceptional.",
    consultationText: "Schedule a free consultation",
    consultationHref: "https://cal.com/huzaifasys/15min",
    navLinks: [
      { label: "About", href: "/about" },
      { label: "Stack", href: "/about#tech-stack" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
    socials: [
      { platform: "github", label: "GitHub", href: "https://github.com/HezziCode" },
      { platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/huzaifasys" },
      { platform: "instagram", label: "Instagram", href: "https://instagram.com/huzaifasys" },
      { platform: "google", label: "Email", href: "mailto:huzaifasys@gmail.com" },
    ],
    email: "huzaifasys@gmail.com",
    phone: "+92 346 2037714",
    copyright: "Huzaifa Sys",
    handcraftedNote: "Handcrafted with passion & code",
  },
};
