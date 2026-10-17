"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-slate-dark via-slate-900 to-slate-950 p-8 sm:p-12 md:p-16 lg:p-20 text-white overflow-hidden shadow-xl">
          {/* Subtle glow background */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 uppercase mb-6 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              AVAILABLE FOR NEW PROJECTS
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Have an AI or Full Stack Project in Mind?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
              Let's discuss your architecture, requirements, and timeline. Book a direct 15-minute discovery call on Cal.com or get in touch via message.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact#schedule"
                className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all select-none group"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Call (Cal.com)</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold px-6 py-3.5 rounded-full backdrop-blur-md transition-all select-none"
              >
                <span>About & Video Intro</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
