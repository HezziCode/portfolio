"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Database,
  Bot,
  Cloud,
  Zap,
  Mic,
  Network,
  Layers,
  Globe2,
} from "lucide-react";
import {
  IconNextjs,
  IconReact,
  IconTypeScript,
  IconTailwind,
  IconFramer,
  IconPython,
  IconFastAPI,
  IconNodejs,
  IconPostgreSQL,
  IconRedis,
  IconSupabase,
  IconGemini,
  IconOpenAI,
  IconDocker,
  IconAWS,
  IconVercel,
  IconRender,
  IconGitHub,
} from "@/components/TechIcons";

interface TechItem {
  name: string;
  role: string;
  level: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconBg: string;
}

interface TechCategory {
  id: string;
  title: string;
  icon: typeof Code2;
  description: string;
  items: TechItem[];
}

export default function TechStackSection() {
  const categories: TechCategory[] = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: Code2,
      description: "Modern, type-safe, responsive web interfaces engineered for sub-second page loads and fluid motion.",
      items: [
        {
          name: "Next.js 15 (App Router)",
          role: "Full-Stack React Framework",
          level: "Primary Driver",
          badge: "Core",
          icon: IconNextjs,
          iconColor: "text-slate-950",
          iconBg: "bg-slate-100",
        },
        {
          name: "React 19",
          role: "Component Architecture & Hooks",
          level: "Production Mastered",
          badge: "Core",
          icon: IconReact,
          iconColor: "text-[#087ea4]",
          iconBg: "bg-sky-50",
        },
        {
          name: "TypeScript",
          role: "End-to-End Type Safety",
          level: "Strict Mode",
          badge: "Standard",
          icon: IconTypeScript,
          iconColor: "text-[#3178c6]",
          iconBg: "bg-blue-50",
        },
        {
          name: "Tailwind CSS v4",
          role: "High-Speed Utility Styling",
          level: "Responsive & Modern",
          badge: "Core",
          icon: IconTailwind,
          iconColor: "text-[#06b6d4]",
          iconBg: "bg-cyan-50",
        },
        {
          name: "Framer Motion",
          role: "Hardware-Accelerated Fluid Motion",
          level: "Smooth 60fps",
          badge: "UI/UX",
          icon: IconFramer,
          iconColor: "text-slate-900",
          iconBg: "bg-purple-50",
        },
        {
          name: "Performance & SEO",
          role: "Sub-Second Loads & Search Visibility",
          level: "100/100 Lighthouse",
          badge: "Speed",
          icon: Zap,
          iconColor: "text-amber-500",
          iconBg: "bg-amber-50",
        },
      ],
    },
    {
      id: "backend",
      title: "Backend & Databases",
      icon: Database,
      description: "Robust, resilient server logic, relational schemas, and asynchronous streaming APIs.",
      items: [
        {
          name: "Python",
          role: "Backend Services & ML Logic",
          level: "Production Mastered",
          badge: "Core",
          icon: IconPython,
          iconColor: "text-[#3776ab]",
          iconBg: "bg-blue-50",
        },
        {
          name: "FastAPI",
          role: "Asynchronous High-Throughput APIs",
          level: "Sub-10ms Latency",
          badge: "API",
          icon: IconFastAPI,
          iconColor: "text-[#009688]",
          iconBg: "bg-emerald-50",
        },
        {
          name: "Node.js",
          role: "Server Runtimes & Microservices",
          level: "Enterprise Standard",
          badge: "Core",
          icon: IconNodejs,
          iconColor: "text-[#5fa04e]",
          iconBg: "bg-green-50",
        },
        {
          name: "PostgreSQL",
          role: "Relational Data Storage & SQL",
          level: "Indexed & Scaled",
          badge: "Database",
          icon: IconPostgreSQL,
          iconColor: "text-[#4169e1]",
          iconBg: "bg-indigo-50",
        },
        {
          name: "Redis",
          role: "In-Memory Caching & Task Queues",
          level: "Ultra-Fast Memory",
          badge: "Cache",
          icon: IconRedis,
          iconColor: "text-[#dc382d]",
          iconBg: "bg-red-50",
        },
        {
          name: "Supabase",
          role: "Postgres Backend-as-a-Service",
          level: "Auth & Row Security",
          badge: "BaaS",
          icon: IconSupabase,
          iconColor: "text-[#3ecf8e]",
          iconBg: "bg-emerald-50",
        },
      ],
    },
    {
      id: "ai",
      title: "AI & Agent Systems",
      icon: Bot,
      description: "Intelligent AI agents, real-time voice agents, vector knowledge retrieval, and custom RAG systems.",
      items: [
        {
          name: "OpenAI Agent SDK",
          role: "AI Agent Workflows & Tool Calling",
          level: "Production Standard",
          badge: "Agentic",
          icon: IconOpenAI,
          iconColor: "text-slate-900",
          iconBg: "bg-slate-100",
        },
        {
          name: "Google Gemini 2.0 API",
          role: "Multimodal Reasoning & Generation",
          level: "Interactions API",
          badge: "LLM",
          icon: IconGemini,
          iconColor: "text-[#1a73e8]",
          iconBg: "bg-blue-50",
        },
        {
          name: "Vapi (Voice AI)",
          role: "Interactive Real-Time Voice Agents",
          level: "Low-Latency Audio",
          badge: "Voice AI",
          icon: Mic,
          iconColor: "text-violet-600",
          iconBg: "bg-violet-50",
        },
        {
          name: "RAG Systems",
          role: "Ground Truth Knowledge Pipelines",
          level: "Zero Hallucination",
          badge: "Architecture",
          icon: Network,
          iconColor: "text-blue-600",
          iconBg: "bg-blue-50",
        },
        {
          name: "Pinecone",
          role: "High-Dimensional Vector Database",
          level: "Sub-50ms Search",
          badge: "Vector",
          icon: Layers,
          iconColor: "text-emerald-600",
          iconBg: "bg-emerald-50",
        },
        {
          name: "OpenAI GPT-4o",
          role: "Structured Tool Calling & Reasoning",
          level: "JSON Schema",
          badge: "LLM",
          icon: IconOpenAI,
          iconColor: "text-slate-900",
          iconBg: "bg-slate-100",
        },
      ],
    },
    {
      id: "devops",
      title: "Cloud & Deployment",
      icon: Cloud,
      description: "Live cloud deployment, automated pipelines, database hosting, and custom domain setup.",
      items: [
        {
          name: "Render",
          role: "Full-Stack Web & Backend Hosting",
          level: "Production Deployed",
          badge: "Cloud",
          icon: IconRender,
          iconColor: "text-slate-900",
          iconBg: "bg-slate-100",
        },
        {
          name: "Vercel",
          role: "Edge Network & Next.js Hosting",
          level: "Zero-Config Edge",
          badge: "Deployment",
          icon: IconVercel,
          iconColor: "text-slate-950",
          iconBg: "bg-slate-100",
        },
        {
          name: "GitHub & Git",
          role: "Version Control & Repositories",
          level: "Clean Git Flow",
          badge: "Core",
          icon: IconGitHub,
          iconColor: "text-slate-900",
          iconBg: "bg-slate-100",
        },
        {
          name: "Docker",
          role: "Containerized Applications",
          level: "Reproducible Builds",
          badge: "DevOps",
          icon: IconDocker,
          iconColor: "text-[#2496ed]",
          iconBg: "bg-sky-50",
        },
        {
          name: "AWS",
          role: "Cloud Storage & Virtual Servers",
          level: "Production Configured",
          badge: "Cloud",
          icon: IconAWS,
          iconColor: "text-[#ff9900]",
          iconBg: "bg-amber-50",
        },
        {
          name: "Custom Domains & SSL",
          role: "DNS, HTTPS & Cloudflare Setup",
          level: "Secure & Live",
          badge: "Hosting",
          icon: Globe2,
          iconColor: "text-blue-600",
          iconBg: "bg-blue-50",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("frontend");
  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="tech-stack" className="relative w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 sm:mb-12"
        >
          {/* Technical Engineering Index */}
          <div className="flex items-center gap-2 text-xs font-mono mb-4 select-none">
            <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/90 px-2 py-0.5 rounded text-[11px]">
              [02.1]
            </span>
            <span className="text-slate-400 font-normal">/</span>
            <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
              Technical Arsenal &amp; Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-dark tracking-tight leading-[1.1]">
            Modern Tech Stack,{" "}
            <span className="italic font-normal text-primary font-sans">Battle-Tested</span>.
          </h2>

          <p className="text-sm sm:text-base text-slate-mid mt-3 leading-relaxed">
            I don&apos;t chase every fleeting trend. I engineer software with proven, scalable technologies that deliver top-tier performance, security, and developer ergonomics.
          </p>
        </motion.div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 w-fit shadow-2xs">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "bg-white text-slate-dark shadow-xs border border-slate-200/90"
                    : "text-slate-600 hover:text-slate-dark hover:bg-white/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-slate-400"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              {currentCategory.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              {currentCategory.description}
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-full shrink-0 self-start sm:self-auto font-medium">
            {currentCategory.items.length} Tools &amp; Frameworks
          </span>
        </div>

        {/* Animated Tech Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {currentCategory.items.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Top Row: Brand Icon Tile + Category Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl ${tech.iconBg} border border-slate-200/60 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0 shadow-2xs`}
                    >
                      <Icon className={`w-5 h-5 ${tech.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200/80">
                      {tech.badge}
                    </span>
                  </div>

                  {/* Tech Name & Role */}
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-primary transition-colors tracking-tight">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {tech.role}
                  </p>
                </div>

                {/* Bottom Row: Subtle Emerald Status Dot + Level */}
                <div className="flex items-center gap-2 text-[11px] font-mono pt-3.5 mt-4 border-t border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-medium text-slate-600">{tech.level}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
