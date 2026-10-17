"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Bot, LineChart, Cloud, Zap } from "lucide-react";
import { websiteContent } from "@/content/websiteContent";

function getCompanyIcon(iconKey?: string) {
  const iconProps = {
    className: "w-3.5 h-3.5 text-slate-mid shrink-0",
  };
  switch (iconKey?.toLowerCase()) {
    case "bot":
    case "ai":
      return <Bot {...iconProps} />;
    case "chart":
    case "analytics":
      return <LineChart {...iconProps} />;
    case "cloud":
      return <Cloud {...iconProps} />;
    default:
      return <Zap {...iconProps} />;
  }
}

export default function Testimonials() {
  const { testimonials } = websiteContent;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[activeIndex];

  return (
    <section className="relative w-full bg-white py-10 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Technical Engineering Index (Style 2) */}
          <div className="flex items-center gap-2 text-xs font-mono mb-8 select-none">
            <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/90 px-2 py-0.5 rounded text-[11px]">
              [TRUST]
            </span>
            <span className="text-slate-400 font-normal">/</span>
            <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
              Client Feedback & Impact
            </span>
          </div>

          {/* Brand Royal Blue Quote Mark */}
          <div className="mb-6 select-none">
            <svg
              className="w-10 h-10 text-primary fill-current opacity-90"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
          </div>

          {/* Animated Quote Content */}
          <div className="min-h-[160px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Main Large Quote */}
                <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-medium leading-[1.3] text-slate-dark tracking-tight mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author Info with Avatar */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border shrink-0 shadow-2xs bg-slate-light ring-2 ring-primary/25">
                    <Image
                      src={current.avatar}
                      alt={current.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-bold text-slate-dark leading-tight">
                      {current.author}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-mid mt-0.5">
                      {current.role} •{" "}
                      <span className="text-primary font-medium">
                        {current.company}
                      </span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── Bottom Selector Tabs (Neutral Editorial Layout Matching Reference SS) ─── */}
          <div className="mt-14 sm:mt-16 border border-border rounded-xl sm:rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border select-none relative bg-white">
            {testimonials.map((t, idx) => {
              const isActive = activeIndex === idx;

              return (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className="relative py-5 sm:py-6 px-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-200 z-10"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTestimonialTab"
                      className="absolute inset-0 bg-[#F1F3F5] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`text-sm sm:text-base tracking-tight transition-colors ${
                      isActive
                        ? "text-slate-dark font-bold"
                        : "text-slate-dark/70 font-medium hover:text-slate-dark"
                    }`}
                  >
                    {t.author}
                  </span>

                  <div className="inline-flex items-center gap-1.5 mt-1.5 text-xs text-slate-mid">
                    {getCompanyIcon(t.companyIcon)}
                    <span>{t.company}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
