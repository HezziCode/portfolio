"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Bot,
  Cloud,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      id: "01",
      title: "Full-Stack SaaS Platforms",
      tagline: "End-to-end digital products engineered for sub-second speed and scale.",
      description:
        "Production-ready web applications engineered for speed, clean architecture, and business scale.",
      deliverables: [
        "Next.js 15 & React 19 responsive frontend",
        "FastAPI backend & scalable REST APIs",
        "Stripe subscription billing & webhooks",
        "PostgreSQL database & Supabase setup",
      ],
      tech: ["Next.js 15", "FastAPI (Python)", "TypeScript", "PostgreSQL", "Stripe API"],
      icon: Code2,
    },
    {
      id: "02",
      title: "AI Agents & RAG Systems",
      tagline: "Intelligent AI and voice agents connected to your business knowledge base.",
      description:
        "Autonomous AI and voice agents connected directly to your business data — zero hallucinations, real-time actions.",
      deliverables: [
        "Custom embedded web/app AI agent",
        "RAG knowledge base integration",
        "OpenAI Agent SDK & Gemini 2.0",
        "Real-time Voice AI calling (Vapi)",
      ],
      tech: ["OpenAI Agent SDK", "Gemini 2.0 API", "Vapi (Voice AI)", "RAG Systems", "Pinecone", "Python"],
      icon: Bot,
    },
    {
      id: "03",
      title: "Cloud Deployment & Hosting Setup",
      tagline: "Taking your project live to the web on Render, Vercel, or cloud servers.",
      description:
        "End-to-end production deployment — zero-downtime hosting, custom domains, and secure environments.",
      deliverables: [
        "Live deployment (Render / Vercel / Railway)",
        "Clean GitHub setup & version control",
        "Custom domain with automated SSL",
        "Secure production database & env config",
      ],
      tech: ["Render", "Vercel", "GitHub", "Custom Domain", "SSL & Hosting"],
      icon: Cloud,
    },
  ];

  return (
    <section id="services" className="relative w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono mb-4 select-none">
              <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/90 px-2 py-0.5 rounded text-[11px]">
                [02]
              </span>
              <span className="text-slate-400 font-normal">/</span>
              <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
                Services &amp; Capabilities
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-dark tracking-tight leading-[1.1]">
              What I Build{" "}
              <span className="italic font-normal text-primary font-sans">&amp; Deliver</span>.
            </h2>

            <p className="text-sm sm:text-base text-slate-mid mt-3 max-w-xl leading-relaxed">
              Full-stack web applications and AI engineering — building modern platforms, backends, and autonomous appointment booking agents.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:border-primary text-xs sm:text-sm font-semibold text-slate-dark hover:text-primary transition-all duration-200 shadow-2xs group self-start md:self-end"
          >
            <span>Discuss your project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Minimalist Interactive Service Accordion Rows */}
        <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
          {services.map((service, index) => {
            const isOpen = activeService === index;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`transition-colors duration-200 ${
                  isOpen ? "bg-slate-50/70" : "bg-white hover:bg-slate-50/40"
                }`}
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  onClick={() => setActiveService(isOpen ? -1 : index)}
                  className="w-full py-7 sm:py-8 px-4 sm:px-8 flex items-center justify-between text-left cursor-pointer transition-all gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-8 min-w-0">
                    <span className="text-sm sm:text-base font-mono font-bold text-slate-400 shrink-0">
                      {service.id}
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 truncate hidden sm:block">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden md:inline-flex text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                      {service.tech[0]} • {service.tech[1]}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                        isOpen
                          ? "bg-slate-900 border-slate-900 text-white"
                          : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-8 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start border-t border-slate-100">
                        {/* Description & CTA */}
                        <div className="lg:col-span-6 space-y-4">
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {service.tech.map((t) => (
                              <span
                                key={t}
                                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="pt-3">
                            <Link
                              href="/contact#schedule"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-primary text-xs font-semibold transition-all shadow-2xs group select-none"
                            >
                              <span>Book a 1:1 Call for this</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                          </div>
                        </div>

                        {/* Deliverables Checklist */}
                        <div className="lg:col-span-6 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            What You Receive (Deliverables)
                          </span>
                          {service.deliverables.map((d) => (
                            <div key={d} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="leading-snug">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
