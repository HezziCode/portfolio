"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Check,
  Calendar,
  Lock,
  Layers,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import PreFooterConversion from "@/components/PreFooterConversion";
import {
  IconNextjs,
  IconReact,
  IconTypeScript,
  IconTailwind,
  IconPython,
  IconFastAPI,
  IconDocker,
  IconPostgreSQL,
  IconRedis,
  IconGitHub,
  IconVercel,
} from "@/components/TechIcons";

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  year: string;
  role: string;
  client: string;
  liveUrl: string;
  githubUrl?: string;
  coverGradient: string;
  overview: string;
  challenge: string;
  solution: string;
  challengeTitle?: string;
  solutionTitle?: string;
  challengeFooter?: string;
  solutionFooter?: string;
  architecture: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  image?: string;
}

interface ProjectDetailViewProps {
  project: ProjectData;
  prevProject: ProjectData;
  nextProject: ProjectData;
  index: number;
}

// Tech Icon Mapping Helper
function getTechIcon(techName: string) {
  const lower = techName.toLowerCase();
  if (lower.includes("next")) return <IconNextjs className="w-4 h-4 text-slate-950" />;
  if (lower.includes("react")) return <IconReact className="w-4 h-4 text-[#087ea4]" />;
  if (lower.includes("typescript")) return <IconTypeScript className="w-4 h-4 text-[#3178c6]" />;
  if (lower.includes("tailwind")) return <IconTailwind className="w-4 h-4 text-[#06b6d4]" />;
  if (lower.includes("python")) return <IconPython className="w-4 h-4 text-[#3776ab]" />;
  if (lower.includes("fastapi")) return <IconFastAPI className="w-4 h-4 text-[#009688]" />;
  if (lower.includes("docker")) return <IconDocker className="w-4 h-4 text-[#2496ed]" />;
  if (lower.includes("postgres")) return <IconPostgreSQL className="w-4 h-4 text-[#4169e1]" />;
  if (lower.includes("redis")) return <IconRedis className="w-4 h-4 text-[#dc382d]" />;
  if (lower.includes("github")) return <IconGitHub className="w-4 h-4 text-slate-950" />;
  if (lower.includes("vercel")) return <IconVercel className="w-4 h-4 text-slate-950" />;
  return <Layers className="w-4 h-4 text-primary" />;
}

export default function ProjectDetailView({
  project,
  prevProject,
  nextProject,
  index,
}: ProjectDetailViewProps) {
  const isEduGuide = project.slug === "openai-agent-sdk";
  const isRepoOnly =
    isEduGuide ||
    (Boolean(project.liveUrl) && project.liveUrl.includes("github.com"));

  // Testimonial / Social Proof Data tailored to project index
  // Project-specific architecture highlights & verified impact
  const projectHighlightsMap: Record<
    string,
    Array<{ tag: string; title: string; description: string; author: string; badge: string }>
  > = {
    "al-rafai-clinic": [
      {
        tag: "AI AUTOMATION",
        title: "< 60s Booking Speed",
        description:
          "24/7 conversational voice & chat agent handles patient inquiries, triage questions, and slot reservations in seconds, eliminating missed calls during peak clinic hours.",
        author: "AI Voice & Chat Engine",
        badge: "AI Agents • Voice AI",
      },
      {
        tag: "CLINICAL RELIABILITY",
        title: "Automated Calendar Sync",
        description:
          "Automated real-time calendar synchronization prevents double-booking and dispatches instant booking confirmations to both patients and Dr. Fatima.",
        author: "Al-Rafai Practice Management",
        badge: "Next.js 15 • PostgreSQL",
      },
    ],
    "cogniclose": [
      {
        tag: "MANAGED OUTBOUND",
        title: "Sub-100ms Page Speed",
        description:
          "High-performance Next.js web application built with server-side rendering, responsive interactive funnels, and fluid Framer Motion micro-interactions.",
        author: "CogniClose Web Architecture",
        badge: "Next.js 15 • Framer Motion",
      },
      {
        tag: "PIPELINE CONVERSION",
        title: "Streamlined ICP Funnel",
        description:
          "Replaced complex prospecting software with an interactive ICP qualification funnel, direct calendar booking, and automated CRM webhook synchronization.",
        author: "Client Revenue Engine",
        badge: "CRM Webhooks • Vercel",
      },
    ],
    "huzen-perfumes": [
      {
        tag: "TURBOPACK PERFORMANCE",
        title: "< 90ms Page Speed",
        description:
          "Next.js 16 with Turbopack compilation powers instant route transitions, sub-second product hydration, and responsive fragrance browsing.",
        author: "Turbopack Commerce",
        badge: "Next.js 16 • Turbopack",
      },
      {
        tag: "CLIENT SATISFACTION",
        title: "60 FPS Fluid UI",
        description:
          "Engineered bespoke Framer Motion interactions and direct WhatsApp order dispatch, delivering a high-converting luxury boutique retail experience.",
        author: "Client Architecture",
        badge: "Framer Motion • Vercel",
      },
    ],
    "spec-driven-todoz": [
      {
        tag: "TO-DO CHAT ASSISTANT",
        title: "Create, Edit & Delete via Chat",
        description:
          "Manage your to-do list through regular UI actions or talk directly with the integrated OpenAI SDK chat assistant powered by MCP tool calling.",
        author: "ChatTask Architecture",
        badge: "Next.js • FastAPI • OpenAI SDK",
      },
      {
        tag: "CLOUD & CONTAINER OPS",
        title: "Docker, Kubernetes & Vercel",
        description:
          "Containerized with Docker and deployed with Kubernetes on AWS (1-month free trial period), with the production web application hosted live on Vercel.",
        author: "DevOps & Cloud Setup",
        badge: "Docker • Kubernetes • PostgreSQL",
      },
    ],
    "ui-ux-hackathon": [
      {
        tag: "HEADLESS CMS",
        title: "Real-Time Sanity Sync",
        description:
          "Connected live Sanity Content Lake queries to dynamic Next.js App Router routes, allowing instantaneous inventory and banner updates with automated ISR cache revalidation.",
        author: "Sanity & Next.js",
        badge: "Sanity CMS • ISR Edge",
      },
      {
        tag: "AUTHENTICATION",
        title: "Zero-Friction Clerk Auth",
        description:
          "Integrated Clerk multi-session authentication and OAuth providers with Prisma PostgreSQL database mapping for seamless customer profiles and cart persistence.",
        author: "Identity Security",
        badge: "Clerk • Prisma ORM",
      },
    ],
    "humanoid-robotics-book": [
      {
        tag: "EMBODIED AI",
        title: "Physical AI & Robotics",
        description:
          "Digital textbook on physical artificial intelligence and humanoid robotics with continuously validated technical content built on Docusaurus v3.9.",
        author: "Humanoid Knowledge Base",
        badge: "Docusaurus • TypeScript",
      },
      {
        tag: "RAG TUTOR",
        title: "Dual-Language RAG Tutor",
        description:
          "Intelligent RAG assistant powered by OpenAI Agents SDK supports English and Urdu queries with grounded citations directly from robotics chapters.",
        author: "OpenAI Agents & FastAPI",
        badge: "RAG Agent • Python 3.14",
      },
    ],
    "hezzi-blogs": [
      {
        tag: "PERFORMANCE",
        title: "100/100 Lighthouse SEO",
        description:
          "Server-rendered dynamic MDX with zero layout shifts, syntax highlighting, and optimized typography for deep engineering articles.",
        author: "HezziBlogs Platform",
        badge: "Next.js • Dynamic MDX",
      },
      {
        tag: "DEVELOPER UX",
        title: "< 60ms Hydration",
        description:
          "Instant light/dark theme switching, authenticated discussion threads, and reactive social cards designed for modern technical publications.",
        author: "Publishing Architecture",
        badge: "React • Tailwind CSS",
      },
    ],
    "openai-agent-sdk": [
      {
        tag: "PRODUCTION BLUEPRINTS",
        title: "16 Agent Modules",
        description:
          "Comprehensive open-source curriculum covering Agent-as-Tool patterns, custom handoffs, input/output guardrails, and persistent sessions.",
        author: "Agent Architecture",
        badge: "OpenAI Agents SDK",
      },
      {
        tag: "OPEN ACCESS",
        title: "100% Free Community IP",
        description:
          "Full code implementations and documentation enabling any engineer to build, test, trace, and deploy resilient autonomous multi-agent systems.",
        author: "Open Source Initiative",
        badge: "Multi-Agent • Python",
      },
    ],
  };

  const projectHighlights = projectHighlightsMap[project.slug] || [
    {
      tag: "SYSTEM WIN",
      title: project.metrics[0]?.value || "4.2x Speedup",
      description: project.solution,
      author: project.role,
      badge: project.techStack.slice(0, 2).join(" • "),
    },
    {
      tag: "INFRASTRUCTURE",
      title: project.metrics[1]?.value || "99.99% Uptime",
      description: project.overview,
      author: project.client,
      badge: project.techStack.slice(2, 4).join(" • "),
    },
  ];

  const titleWords = project.title.split(" ");
  const mainTitle = titleWords.length > 1 ? titleWords.slice(0, -1).join(" ") : "";
  const highlightWord = titleWords.length > 1 ? titleWords[titleWords.length - 1] : project.title;

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* ══════════════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-8 sm:pt-14 pb-12 sm:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* ─── Left Column: Headline, Hook & Action Buttons ─── */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Technical Engineering Index */}
              <div className="flex items-center gap-2 text-xs font-mono mb-5 select-none">
                <span className="font-bold text-primary bg-blue-50 border border-blue-200/90 px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider">
                  [{project.category}]
                </span>
                <span className="text-slate-300 font-normal">/</span>
                <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
                  {project.year} • {project.client} • <span className="text-primary font-bold">{project.role}</span>
                </span>
              </div>

              {/* Main Headline with Signature Royal Blue Accent */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-dark tracking-tight leading-[1.12] mb-5">
                {mainTitle ? `${mainTitle} ` : ""}
                <span className="italic font-normal text-primary font-sans">
                  {highlightWord}
                </span>
              </h1>

              {/* Hook / Tagline */}
              <p className="text-base sm:text-lg text-slate-mid leading-relaxed max-w-xl mb-8">
                {project.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {isEduGuide ? (
                  <>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white text-sm font-bold pl-6 pr-2.5 py-3 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all duration-200 group select-none hover:-translate-y-0.5"
                    >
                      <span>Browse Learning Guide</span>
                      <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-2xs">
                        <BookOpen className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-slate-200 hover:border-primary/40 bg-white hover:bg-blue-50/50 text-slate-700 hover:text-primary font-semibold text-sm transition-all shadow-2xs select-none"
                      >
                        <IconGitHub className="w-4 h-4 text-slate-700" />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </>
                ) : isRepoOnly ? (
                  <a
                    href={project.githubUrl || project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold pl-6 pr-2.5 py-3 rounded-full shadow-lg shadow-slate-900/25 hover:shadow-xl hover:shadow-slate-900/35 transition-all duration-200 group select-none hover:-translate-y-0.5"
                  >
                    <IconGitHub className="w-4 h-4 text-white" />
                    <span>Explore GitHub Repository</span>
                    <div className="w-8 h-8 rounded-full bg-white/15 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-2xs">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </a>
                ) : (
                  <>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white text-sm font-bold pl-6 pr-2.5 py-3 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all duration-200 group select-none hover:-translate-y-0.5"
                    >
                      <span>View Live Demo</span>
                      <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-2xs">
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </a>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-slate-200 hover:border-primary/40 bg-white hover:bg-blue-50/50 text-slate-700 hover:text-primary font-semibold text-sm transition-all shadow-2xs select-none"
                      >
                        <IconGitHub className="w-4 h-4 text-slate-700" />
                        <span>GitHub Repository</span>
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-600 font-semibold text-xs select-none">
                        <span className="w-2 h-2 rounded-full bg-[#0A66C2]" />
                        <span>Made for Client • Protected Repository</span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Project-Specific Metrics Summary */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {project.metrics.map((m, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/70 border border-blue-100 text-slate-700 shadow-2xs"
                  >
                    <span className="font-extrabold text-primary">{m.value}</span>
                    <span className="text-slate-600 font-medium">{m.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* ─── Right Column: Project Architecture & Performance Cards ─── */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 lg:pt-0">

              {/* Card 1 (Tilted slightly left -1.5deg) */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -1.5 }}
                animate={{ opacity: 1, y: 0, rotate: -1.5 }}
                whileHover={{ rotate: 0, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md p-6 rounded-2xl bg-white border border-blue-100 hover:border-primary/50 shadow-xl shadow-blue-900/5 relative z-10 select-none cursor-default transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold text-primary bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {projectHighlights[0].tag}
                  </span>
                  <span className="text-[11px] font-mono text-primary/80 font-medium bg-blue-50/60 px-2.5 py-0.5 rounded border border-blue-100/60">
                    {projectHighlights[0].badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-dark mb-2 tracking-tight">
                  {projectHighlights[0].title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {projectHighlights[0].description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono">
                  <span className="font-semibold text-slate-700">{projectHighlights[0].author}</span>
                  <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    Production Live
                  </span>
                </div>
              </motion.div>

              {/* Card 2 (Tilted slightly right +1.5deg, overlapping below) */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 1.5 }}
                animate={{ opacity: 1, y: 0, rotate: 1.5 }}
                whileHover={{ rotate: 0, scale: 1.01 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="w-full max-w-md p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-primary/50 shadow-xl shadow-slate-200/60 -mt-6 sm:-mt-8 ml-4 sm:ml-8 relative z-20 select-none cursor-default transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-200/80 px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {projectHighlights[1].tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {projectHighlights[1].badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-dark mb-2 tracking-tight">
                  {projectHighlights[1].title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {projectHighlights[1].description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono">
                  <span className="font-semibold text-slate-700">{projectHighlights[1].author}</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified Architecture
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. BIG PROJECT PICTURE / SCREENSHOT MOCKUP FRAME
          ══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="rounded-3xl border border-slate-300/80 shadow-2xl overflow-hidden bg-white">
          
          {/* Mockup Window Header Bar (Traffic Light dots + SSL URL bar) */}
          <div className="px-5 py-3.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between select-none">
            {/* Traffic Light Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] border border-red-600/40" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] border border-amber-600/40" />
              <span className="w-3 h-3 rounded-full bg-[#10B981] border border-emerald-600/40" />
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 font-mono max-w-sm sm:max-w-md w-full justify-center">
              <Lock className="w-3 h-3 text-emerald-500" />
              <span className="truncate">{project.liveUrl.replace("https://", "")}</span>
            </div>

            {/* Status Pill */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px]">{isRepoOnly ? "Open Source Repo" : "Live Cluster"}</span>
            </div>
          </div>

          {/* Project Screenshot / Visual Showcase */}
          <div className="relative w-full min-h-[380px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-slate-50">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                priority
              />
            ) : (
              /* Custom High-Fidelity Architectural Visual matching portfolio aesthetic */
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[620px] flex items-center justify-center p-8 select-none">
                {/* Background Ambient Glows */}
                <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
                <div className="absolute w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[90px] pointer-events-none" />

                {index === 0 && (
                  /* Visual 1: 3D Floating Geometric Cubes & Glowing Amber Orbs (AI Agents) */
                  <svg
                    className="w-full max-w-xl h-80 sm:h-96 md:h-[460px] drop-shadow-2xl"
                    viewBox="0 0 400 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2A3447" />
                        <stop offset="100%" stopColor="#1E2638" />
                      </linearGradient>
                      <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#182030" />
                        <stop offset="100%" stopColor="#0B0F19" />
                      </linearGradient>
                      <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D97706" stopOpacity="0.9" />
                        <stop offset="60%" stopColor="#78350F" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <radialGradient id="glowOrb" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#FEF08A" />
                        <stop offset="40%" stopColor="#FACC15" />
                        <stop offset="80%" stopColor="#EAB308" />
                        <stop offset="100%" stopColor="#CA8A04" />
                      </radialGradient>
                      <filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Blueprint grid lines */}
                    <path
                      d="M 50 180 L 350 180 M 200 50 L 200 310"
                      stroke="#334155"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                      opacity="0.4"
                    />

                    {/* Primary Center 3D Cube */}
                    <g transform="translate(100, 70)">
                      <polygon
                        points="100,20 170,55 100,90 30,55"
                        fill="url(#cubeTop)"
                        stroke="#38BDF8"
                        strokeWidth="0.75"
                        strokeOpacity="0.5"
                      />
                      <polygon points="30,55 100,90 100,180 30,145" fill="url(#cubeLeft)" />
                      <polygon points="100,90 170,55 170,145 100,180" fill="url(#cubeRight)" />
                      <line
                        x1="100"
                        y1="90"
                        x2="100"
                        y2="180"
                        stroke="#F59E0B"
                        strokeWidth="1.5"
                        strokeOpacity="0.8"
                      />
                    </g>

                    {/* Lower Angled Block */}
                    <g transform="translate(130, 210)">
                      <polygon points="50,10 90,30 50,50 10,30" fill="#1E293B" />
                      <polygon points="10,30 50,50 50,110 10,90" fill="#0F172A" />
                      <polygon points="50,50 90,30 90,90 50,110" fill="#182030" />
                    </g>

                    {/* Glowing Amber Spheres */}
                    <circle cx="280" cy="95" r="16" fill="url(#glowOrb)" filter="url(#blurFilter)" />
                    <circle cx="280" cy="95" r="16" fill="url(#glowOrb)" />
                    <circle cx="105" cy="235" r="12" fill="url(#glowOrb)" filter="url(#blurFilter)" />
                    <circle cx="105" cy="235" r="12" fill="url(#glowOrb)" />
                  </svg>
                )}

                {index === 1 && (
                  /* Visual 2: Ethereal 3D Sculptural Discs & Curves (SaaS Analytics) */
                  <svg
                    className="w-full max-w-xl h-80 sm:h-96 md:h-[460px] drop-shadow-2xl"
                    viewBox="0 0 400 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="discGrad1" x1="20%" y1="0%" x2="80%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="60%" stopColor="#E2E8F0" />
                        <stop offset="100%" stopColor="#94A3B8" />
                      </linearGradient>
                      <linearGradient id="discGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F8FAFC" />
                        <stop offset="50%" stopColor="#CBD5E1" />
                        <stop offset="100%" stopColor="#64748B" />
                      </linearGradient>
                    </defs>

                    <ellipse cx="200" cy="260" rx="75" ry="34" fill="url(#discGrad2)" opacity="0.8" />
                    <ellipse cx="200" cy="205" rx="100" ry="46" fill="url(#discGrad1)" stroke="#CBD5E1" strokeWidth="1" />
                    <g transform="rotate(-15 200 130)">
                      <ellipse cx="200" cy="130" rx="120" ry="62" fill="url(#discGrad1)" stroke="#FFFFFF" strokeWidth="1.5" />
                      <ellipse cx="200" cy="130" rx="75" ry="38" fill="url(#discGrad2)" />
                    </g>
                    <circle cx="140" cy="170" r="8" fill="#E2E8F0" stroke="#CBD5E1" />
                    <circle cx="280" cy="210" r="10" fill="#60A5FA" opacity="0.7" />
                  </svg>
                )}

                {index === 2 && (
                  /* Visual 3: Geodesic Network Lattice (Cloud DevOps) */
                  <svg
                    className="w-full max-w-xl h-80 sm:h-96 md:h-[460px] drop-shadow-2xl"
                    viewBox="0 0 400 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient id="coreSphere" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="60%" stopColor="#0F172A" />
                        <stop offset="100%" stopColor="#020617" />
                      </radialGradient>
                      <radialGradient id="copper" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FED7AA" />
                        <stop offset="40%" stopColor="#FB923C" />
                        <stop offset="100%" stopColor="#7C2D12" />
                      </radialGradient>
                    </defs>

                    <circle cx="200" cy="180" r="95" fill="url(#coreSphere)" stroke="#334155" strokeWidth="1" />
                    <ellipse cx="200" cy="180" rx="95" ry="34" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
                    <ellipse cx="200" cy="180" rx="34" ry="95" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
                    <circle cx="200" cy="180" r="122" stroke="#38BDF8" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="4 4" />
                    <circle cx="130" cy="140" r="8" fill="url(#copper)" />
                    <circle cx="270" cy="140" r="9" fill="url(#copper)" />
                    <circle cx="215" cy="250" r="10" fill="url(#copper)" />
                    <circle cx="115" cy="180" r="9" fill="url(#copper)" />
                  </svg>
                )}

                {/* Floating Quick Action Badge */}
                <div className="absolute bottom-6 right-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-dark hover:bg-primary text-white text-xs font-semibold transition-all shadow-lg select-none"
                  >
                    <span>{isEduGuide ? "Browse Learning Modules" : isRepoOnly ? "Explore on GitHub" : "Open Live Demo"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. DETAILS ABOUT PROJECT ("details about project with good design")
          ══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 sm:pb-28">
        
        {/* ─── 5.1 Project Overview & At-a-Glance Metadata ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          
          {/* Narrative Overview */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Project Brief &amp; Strategic Vision</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {project.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* At-a-Glance Metadata Card */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-4">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              Project Specification
            </h3>

            <div className="space-y-3 divide-y divide-slate-200/80 text-xs sm:text-sm">
              <div className="flex items-center justify-between pt-2">
                <span className="text-slate-500">Client / Org</span>
                <span className="font-semibold text-slate-900">{project.client}</span>
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-slate-500">Role</span>
                <span className="font-semibold text-slate-900">{project.role}</span>
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-slate-500">Timeline / Year</span>
                <span className="font-semibold text-slate-900">{project.year}</span>
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-slate-500">Category</span>
                <span className="font-mono font-semibold text-primary">{project.category}</span>
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-slate-500">Status</span>
                <span className={`inline-flex items-center gap-1.5 font-semibold ${isRepoOnly ? "text-primary" : "text-emerald-600"}`}>
                  <span className={`w-2 h-2 rounded-full ${isRepoOnly ? "bg-primary" : "bg-emerald-500"}`} />
                  {isEduGuide ? "Open Source Masterclass" : isRepoOnly ? "Open Source CLI Tool" : "Live in Production"}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-2xs"
              >
                <span>{isRepoOnly ? "Explore Repository on GitHub" : "Launch Project Demo"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* ─── 5.2 The Challenge vs. The Solution (Clean Editorial Design) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 items-stretch">
          
          {/* The Engineering Challenge */}
          <div className="h-full p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] font-bold text-slate-800 bg-slate-100 border border-slate-200/80 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  [01] / THE CHALLENGE
                </span>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  Problem &amp; Constraints
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                {project.challengeTitle || "The Problem"}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-700 pt-5 mt-6 border-t border-slate-100">
              <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
              </span>
              <span className="font-medium text-slate-800">{project.challengeFooter || "Core challenges identified & resolved"}</span>
            </div>
          </div>

          {/* The Architectural Solution */}
          <div className="h-full p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] font-bold text-primary bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  [02] / THE SOLUTION
                </span>
                <span className="text-xs font-mono text-primary font-medium">
                  Architecture &amp; System
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                {project.solutionTitle || "The Solution"}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-700 pt-5 mt-6 border-t border-slate-100">
              <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </span>
              <span className="font-medium text-slate-800">{project.solutionFooter || "Tested & verified in production"}</span>
            </div>
          </div>

        </div>



        {/* ─── 5.5 Technologies & Tools Used ─── */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Tech Stack
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Technologies Deployed in this Build
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <div
                key={tech}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs sm:text-sm font-semibold text-slate-800 hover:border-slate-300 transition-colors"
              >
                {getTechIcon(tech)}
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 5.6 Project Navigation Bar (Prev / Next Case Studies) ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 sm:pt-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-sm transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Previous Project</span>
            </div>
            <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-sm transition-all group flex flex-col justify-between sm:items-end text-left sm:text-right"
          >
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
              <span>Next Project</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
              {nextProject.title}
            </span>
          </Link>
        </div>


        {/* ─── 5.7 Pre-Footer Conversion Section (Matching Reference Screenshot) ─── */}
        <div className="pt-6 sm:pt-10">
          <PreFooterConversion
            categoryNumber="04"
            categoryLabel="START YOUR BUILD"
            categorySublabel="LET'S MAP YOUR ARCHITECTURE"
          />
        </div>

      </section>
    </div>
  );
}
