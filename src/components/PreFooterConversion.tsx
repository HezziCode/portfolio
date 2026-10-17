"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, Check } from "lucide-react";

interface PreFooterConversionProps {
  categoryNumber?: string;
  categoryLabel?: string;
  categorySublabel?: string;
}

export default function PreFooterConversion({
  categoryNumber = "04",
  categoryLabel = "START YOUR BUILD",
  categorySublabel = "LET'S MAP YOUR ARCHITECTURE",
}: PreFooterConversionProps) {
  return (
    <section className="relative w-full py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Heading, Subtext & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-mono mb-6 select-none">
            <span className="font-bold text-primary">{categoryNumber}</span>
            <span className="text-slate-400">/</span>
            <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
              {categoryLabel}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500 text-[11px]">{categorySublabel}</span>
          </div>

          {/* Big Punchy Headline with Italic Accent Word */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-5 font-sans">
            Ready to see how <br className="hidden sm:inline" />
            yours would <span className="text-primary italic">run?</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
            Book a 30-minute discovery call to map your system architecture, discuss technical requirements, and walk through how your application will run in production with zero downtime.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 mb-4">
            <Link
              href="/contact#schedule"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 select-none group"
            >
              <span>Book a discovery call</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors select-none group"
            >
              <span>See what is included and how pricing works</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 transition-colors" />
            </Link>
          </div>

          {/* Average Response Time Pill */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Average response time: within 24 hours</span>
          </div>
        </div>

        {/* Right Column: Framed Card with Decorative Blueprint Corner Brackets */}
        <div className="lg:col-span-5 relative">
          {/* Decorative Blueprint Corner Brackets */}
          <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-sm pointer-events-none" />
          <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr-sm pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 border-primary/40 rounded-bl-sm pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br-sm pointer-events-none" />

          {/* Card Container */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-100/70 relative select-none">
            {/* Profile Header */}
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <img
                  src="/about-real.jpg"
                  alt="Huzaifa Sys"
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 shadow-2xs"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    Huzaifa Sys
                  </h4>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">
                    Full Stack AI Engineer
                  </p>
                </div>
              </div>

              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-mono font-bold tracking-wider">
                OPEN
              </span>
            </div>

            {/* Scoping Quote */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              &ldquo;Prefer a direct conversation? Book a 30-minute scoping call. We will review your architecture, assess feasibility, and map out the exact technical roadmap to build your production system.&rdquo;
            </p>

            {/* Checklist with Blue Checkmarks */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-[13px] text-slate-700 mb-6">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 stroke-[2.5]" />
                <span>System architecture, tech stack &amp; scalability review</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 stroke-[2.5]" />
                <span>Database schema, API pipelines &amp; infrastructure needs</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 stroke-[2.5]" />
                <span>Live walkthrough of timeline, scope &amp; deliverables</span>
              </div>
            </div>

            {/* Black Schedule Button */}
            <Link
              href="/contact#schedule"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md group select-none cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-primary transition-transform group-hover:scale-110" />
              <span>Schedule 30-min discovery call</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
