"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import profilePic from "../../public/my-pic.webp";
import { websiteContent } from "@/content/websiteContent";
import IntroVideoModal from "@/components/IntroVideoModal";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToAbout = () => {
    const section = document.getElementById("about-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-white lg:min-h-[auto] lg:py-6 overflow-hidden">
      {/* ─── 1. Subtle diagonal / skewed background treatment ─── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute -inset-[25%] -rotate-[8deg] opacity-[0.06] flex flex-col justify-around">
          <div className="w-[140%] -ml-[20%] h-40 border-y-2 border-slate-dark" />
          <div className="w-[120%] -ml-[10%] h-64 border-2 border-slate-dark rounded-3xl" />
          <div className="w-[130%] -ml-[15%] h-52 border-y-2 border-slate-dark" />
          <div className="w-[110%] -ml-[5%] h-80 border-2 border-slate-dark rounded-3xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-10 pb-10 md:pt-16 md:pb-12 lg:py-0 xl:pt-12 2xl:pt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-14 lg:gap-8 relative">
          
          {/* ─── Left Content ─── */}
          <div className="flex-1 max-w-xl lg:max-w-lg xl:max-w-xl pt-4 z-10">
            {/* Greeting Tag with corner brackets — smooth slide-down entrance */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline-block px-4 py-2 mb-10 lg:mb-3 select-none"
            >
              {/* Top-left corner */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
              {/* Top-right corner */}
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
              {/* Bottom-left corner */}
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
              {/* Bottom-right corner */}
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />
              <span className="text-sm text-slate-dark font-medium">
                {websiteContent.hero.greeting}
              </span>
            </motion.div>

            {/* Main Heading — smooth slide-up reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-4xl lg:text-3xl xl:text-6xl 2xl:text-7xl font-extrabold leading-[1.05] lg:leading-tight tracking-tight text-slate-dark mb-7 lg:mb-3 whitespace-pre-line"
            >
              {websiteContent.hero.title}
            </motion.h1>

            {/* Description — smooth fade-in */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-mid text-[15px] md:text-base leading-relaxed mb-6 lg:mb-3 max-w-[390px]"
            >
              {websiteContent.hero.description}
            </motion.p>

            {/* Inline stats row (shows only below 2xl) */}
            <div className="flex items-center gap-6 mt-3 mb-2 lg:mt-2 lg:mb-2 hidden md:flex lg:hidden">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-dark leading-none">
                  {websiteContent.hero.stats.value}
                </span>
                <span className="text-[11px] text-slate-dark/50 tracking-wide mt-1">
                  {websiteContent.hero.stats.label}
                </span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-dark leading-none">0 → 1</span>
                <span className="text-[11px] text-slate-dark/50 tracking-wide mt-1">Full-Stack Delivery</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-dark leading-none">AI Agents</span>
                <span className="text-[11px] text-slate-dark/50 tracking-wide mt-1">OpenAI & Webhooks</span>
              </div>
            </div>

            {/* CTA Buttons — tactile interactive motion */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 lg:mb-6 lg:mt-1"
            >
              {/* "Get In Touch" with solid offset accent card */}
              <div className="relative inline-block group select-none">
                {/* Offset solid accent card with dark border */}
                <div
                  className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary border border-slate-dark -z-10 transition-transform duration-200 group-hover:translate-x-2 group-hover:translate-y-2"
                  style={{ backgroundColor: "var(--primary)" }}
                />
                <motion.a
                  href="/contact"
                  whileHover={{ x: -1.5, y: -1.5 }}
                  whileTap={{ x: 1.5, y: 1.5 }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  className="relative inline-flex items-center gap-4 bg-slate-dark text-white px-6 py-3 text-sm sm:text-base font-semibold tracking-tight border border-slate-dark hover:bg-slate-900 transition-colors"
                >
                  <span>{websiteContent.hero.buttons.contact}</span>
                  <svg
                    className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    style={{ color: "var(--primary)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* "Watch Intro" Video Modal Trigger */}
              <motion.button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-dark text-sm sm:text-base font-semibold border-2 border-slate-dark transition-all shadow-xs cursor-pointer select-none group"
              >
                <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[9px] pl-0.5 group-hover:scale-110 transition-transform shadow-xs">
                  ▶
                </div>
                <span>Watch Intro</span>
              </motion.button>

              {/* "Download CV" link with hover nudge */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Huzaifa-Fullstack.pdf"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="inline-flex items-center gap-2 text-slate-dark text-sm font-bold hover:text-primary transition-colors duration-200"
              >
                {websiteContent.hero.buttons.cv}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.a>
            </motion.div>

            {/* Social Links — micro-bounce animations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 lg:mt-3"
            >
              <span className="text-xs text-slate-mid font-medium tracking-wide">
                Find me on:
              </span>
              {/* GitHub */}
              <motion.a
                href={websiteContent.hero.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary-light transition-colors duration-200 group"
                aria-label="GitHub"
              >
                <svg
                  className="w-[18px] h-[18px] text-slate-dark group-hover:text-primary transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              {/* Instagram */}
              <motion.a
                href={websiteContent.hero.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary-light transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <svg
                  className="w-[18px] h-[18px] text-slate-dark group-hover:text-primary transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                href={websiteContent.hero.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-[18px] h-[18px] text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* ─── 4. Rotating "explore" badge (floating freely in gap between columns) ─── */}
          <motion.button
            type="button"
            onClick={scrollToAbout}
            aria-label="Scroll down to explore about me section"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.94 }}
            className="hidden lg:block absolute left-[52%] xl:left-[53%] top-[58%] -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-md hover:shadow-lg select-none cursor-pointer focus:outline-hidden transition-shadow"
          >
            <div className="relative w-full h-full">
              {/* Rotating text around circle */}
              <svg
                className="w-full h-full animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text
                  fontSize="9.5"
                  fontWeight="600"
                  fill="#0F172A"
                  letterSpacing="3"
                >
                  <textPath href="#circlePath">
                    explore about me • explore •
                  </textPath>
                </text>
              </svg>
              {/* Center down arrow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-slate-dark transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </motion.button>

          {/* ─── 2. Photo Frame & Chunky Blobs (Right Side) ─── */}
          <div className="flex-1 flex justify-center lg:justify-end relative mt-6 lg:mt-0 w-full">
            <div className="relative w-[280px] xs:w-[290px] h-[360px] xs:h-[370px] sm:w-[330px] sm:h-[420px] md:w-[370px] md:h-[460px] lg:w-[390px] lg:h-[480px]">

              {/* Chunky Primary Blue Blobs / Brush Strokes with breathing animations */}
              {/* Blob 1: Peeking out from bottom-left corner */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-8 sm:-left-16 w-44 sm:w-56 h-18 sm:h-24 bg-primary rounded-full -rotate-[14deg] z-0"
                style={{ backgroundColor: "var(--primary)" }}
              />

              {/* Blob 2: Peeking out boldly from bottom-right corner */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 sm:-bottom-10 -right-8 sm:-right-20 w-52 sm:w-72 h-20 sm:h-28 bg-primary rounded-full -rotate-[32deg] z-0"
                style={{ backgroundColor: "var(--primary)" }}
              />

              {/* Blob 3: Additional upper-right chunky stroke for balance */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-12 -right-4 sm:-right-10 w-24 sm:w-32 h-14 sm:h-20 bg-primary rounded-full -rotate-[22deg] z-0"
                style={{ backgroundColor: "var(--primary)" }}
              />

              {/* 3. Zigzag squiggle — gentle floating animation */}
              <motion.svg
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[8%] -left-5 sm:-left-8 w-14 sm:w-16 h-14 sm:h-16 text-slate-dark z-20"
                viewBox="0 0 64 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 32 L18 8 L32 24 L46 8 L60 32"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Photo Frame: Staggered entrance with subtle interactive hover lift */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 2.5 }}
                whileHover={{ rotate: 1.5, scale: 1.02 }}
                onClick={() => setIsVideoModalOpen(true)}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative z-10 w-full h-full border-[5px] border-slate-dark bg-[#ebe7df] shadow-[14px_16px_0px_0px_#0F172A] overflow-hidden cursor-pointer select-none"
              >
                <Image
                  src={profilePic}
                  alt="Huzaifa Sys — Lead Full Stack AI Engineer"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 330px, (max-width: 1024px) 370px, 390px"
                />

                {/* Floating "Watch Intro" Pill over photo */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto z-20 inline-flex items-center justify-between sm:justify-start gap-2.5 px-3 py-1.5 rounded-full bg-slate-950/90 text-white text-[11px] font-mono font-semibold backdrop-blur-md border border-white/20 shadow-xl group-hover:bg-primary transition-all">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>WATCH INTRO VIDEO</span>
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[8px] pl-0.5 text-white">
                    ▶
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 7. Stats Sidebar (2xl+ screens only, hidden on laptops) ─── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        className="hidden 2xl:flex flex-col items-start justify-center absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-white border border-border shadow-md rounded-xl px-4 py-3 min-w-[120px]"
      >
        <p className="text-2xl font-black text-slate-dark leading-none">{websiteContent.hero.stats.value}</p>
        <p className="text-[11px] text-slate-mid font-semibold leading-tight whitespace-pre-line mt-1">
          {websiteContent.hero.stats.label}
        </p>
      </motion.div>

      {/* ─── Intro Video Modal ─── */}
      <IntroVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}
