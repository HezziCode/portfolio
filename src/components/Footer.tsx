"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { websiteContent } from "@/content/websiteContent";

function renderSocialIcon(platform: string) {
  switch (platform) {
    case "github":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "telegram":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 7.78l-2.02 9.53c-.15.68-.55.84-1.12.52l-3.08-2.27-1.49 1.43c-.16.16-.3.3-.61.3l.22-3.13 5.7-5.15c.25-.22-.05-.34-.39-.12l-7.04 4.43-3.04-.95c-.66-.2-.67-.66.14-.98l11.88-4.58c.55-.2 1.03.13.85.9z" />
        </svg>
      );
    case "google":
    default:
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
  }
}

export default function Footer() {
  const { footer } = websiteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const projects = [
    { label: "Crypto Agent (Financial AI)", href: "/projects/crypto-agent" },
    { label: "Al-Rafai Clinic (Voice & Chat AI)", href: "/projects/al-rafai-clinic" },
    { label: "CogniClose (Outbound Platform)", href: "/projects/cogniclose" },
    { label: "ChatTask (To-Do AI Agent)", href: "/projects/spec-driven-todoz" },
  ];

  const specialties = [
    { label: "Full Stack Web Apps", href: "/projects" },
    { label: "AI Voice & Chat Agents", href: "/projects" },
    { label: "Python & FastAPI Backends", href: "/projects" },
    { label: "Cloud & DevOps Deployment", href: "/projects" },
  ];

  return (
    <footer className="w-full bg-white pb-2.5 sm:pb-3.5 lg:pb-4 pt-1 select-none overflow-hidden">
      <div className="w-full px-1.5 sm:px-2.5 lg:px-3.5">
        
        {/* ══════════════════════════════════════════════════════════════════
            DARK FLOATING BOX CONTAINER (Full width with subtle edge margin)
            ══════════════════════════════════════════════════════════════════ */}
        <div className="w-full rounded-[20px] sm:rounded-[26px] lg:rounded-[32px] bg-[#0A0E17] text-white p-6 sm:p-9 lg:p-12 xl:p-14 border border-white/[0.08] shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradient Glow */}
          <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-blue-600/[0.04] blur-[120px] pointer-events-none" />

          {/* ─── TOP ROW: Brand Wordmark + Weather / Time ─── */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 sm:pb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              {footer.name}
            </h2>

            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-slate-400">
              <span className="inline-block w-2.5 h-2.5 rounded-full border border-slate-400" />
              <span>20 — 26° • PKT</span>
            </div>
          </div>


          {/* ─── MIDDLE ROW: 5-Column Directory Grid ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* Column 1: Brand Hook + Direct Email (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs mb-4">
                Cloud architecture, autonomous AI systems &amp; modern web platforms — engineered for real enterprise scale.
              </p>

              <a
                href={`mailto:${footer.email}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors underline underline-offset-4 decoration-slate-600 hover:decoration-blue-400"
              >
                {footer.email}
              </a>
            </div>

            {/* Column 2: Navigation (2 cols) */}
            <div className="lg:col-span-2 flex flex-col items-start">
              <span className="block font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
                NAVIGATION
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Projects (2.5 cols) */}
            <div className="lg:col-span-2 flex flex-col items-start">
              <span className="block font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
                PROJECTS
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {projects.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Specialties (2 cols) */}
            <div className="lg:col-span-2 flex flex-col items-start">
              <span className="block font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
                SPECIALTIES
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {specialties.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Social Media (1.5 cols) */}
            <div className="lg:col-span-2 flex flex-col items-start lg:items-end">
              <span className="block font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
                SOCIAL MEDIA
              </span>
              <div className="flex items-center gap-2.5">
                {footer.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all flex items-center justify-center shadow-xs"
                  >
                    {renderSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ─── META INFO ROW: Phone, Studio, Hours + Back to Top (Matching Screenshot) ─── */}
          <div className="mt-12 sm:mt-16 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            
            {/* Phone Number (Aligned with Column 1) */}
            <div className="md:col-span-4">
              <span className="block font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1.5">
                PHONE NUMBER
              </span>
              <a
                href="tel:+923462037714"
                className="font-mono text-xs sm:text-sm text-slate-200 hover:text-white transition-colors"
              >
                +92 346 2037714
              </a>
            </div>

            {/* Studio (Aligned with Column 3 / Center) */}
            <div className="md:col-span-4">
              <span className="block font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1.5">
                STUDIO
              </span>
              <div className="font-mono text-xs text-slate-300 space-y-0.5">
                <p>Karachi, Pakistan</p>
                <p className="text-slate-400">Remote Worldwide • PKT (UTC+5)</p>
              </div>
            </div>

            {/* Hours + Circular Back to Top Button (Aligned with Column 5 / Right) */}
            <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-5">
              <div className="text-left md:text-right">
                <span className="block font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">
                  MONDAY — FRIDAY
                </span>
                <span className="font-mono text-xs text-slate-300">
                  09:00 AM — 18:00 PM
                </span>
              </div>

              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 cursor-pointer shrink-0"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* ─── BOTTOM ROW: Copyright, Legal & Attribution (Exact Match to SS) ─── */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <p>© {new Date().getFullYear()} {footer.name}. All rights reserved.</p>

            <p className="text-slate-400">
              Owned &amp; Developed by Huzaifa Sys
            </p>

            <div className="flex items-center gap-5">
              <Link href="/contact" className="hover:text-slate-300 transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/contact" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

