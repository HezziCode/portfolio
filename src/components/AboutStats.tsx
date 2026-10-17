"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Code2, Bot, Workflow, Layout, Cloud, Server, Terminal, Layers, Sparkles } from "lucide-react";
import { websiteContent } from "@/content/websiteContent";

function getSkillIcon(iconKey?: string) {
  switch (iconKey?.toLowerCase()) {
    case "code":
    case "fullstack":
      return <Code2 className="w-3.5 h-3.5 text-slate-dark" />;
    case "ai":
    case "ai agents":
    case "bot":
      return <Bot className="w-3.5 h-3.5 text-slate-dark" />;
    case "devops":
    case "workflow":
      return <Workflow className="w-3.5 h-3.5 text-slate-dark" />;
    case "design":
    case "uiux":
      return <Layout className="w-3.5 h-3.5 text-slate-dark" />;
    case "cloud":
    case "api":
    case "apis":
      return <Cloud className="w-3.5 h-3.5 text-slate-dark" />;
    case "server":
      return <Server className="w-3.5 h-3.5 text-slate-dark" />;
    case "terminal":
      return <Terminal className="w-3.5 h-3.5 text-slate-dark" />;
    case "layers":
      return <Layers className="w-3.5 h-3.5 text-slate-dark" />;
    default:
      return <Sparkles className="w-3.5 h-3.5 text-slate-dark" />;
  }
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative inline-block mr-[0.28em] mb-[0.14em]">
      {/* Ghost faded layer behind for crisp appearance before scroll */}
      <span className="text-slate-dark/15 select-none" aria-hidden="true">
        {word}
      </span>
      {/* Illuminated layer on top linked to scroll progress */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-slate-dark select-none font-semibold"
      >
        {word}
      </motion.span>
    </span>
  );
}

function ScrollWordReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      aria-label={text}
      className="flex flex-wrap justify-start text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-semibold leading-[1.38] tracking-tight text-left"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(1, start + 1 / words.length);
        return (
          <Word
            key={i}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}

export default function AboutStats() {
  const { aboutStats } = websiteContent;
  const fullManifesto = `${aboutStats.manifesto.normal} ${aboutStats.manifesto.bold}`;
  const skills = aboutStats.skills || [
    { name: "Full Stack", icon: "code" },
    { name: "AI Agents", icon: "ai" },
    { name: "DevOps", icon: "devops" },
  ];
  const subLinks = aboutStats.subLinks || ["GITHUB", "LINKEDIN", "INSTAGRAM"];
  const subLinksMap: Record<string, string> = {
    GITHUB: "https://github.com/HezziCode",
    LINKEDIN: "https://linkedin.com/in/huzaifasys",
    INSTAGRAM: "https://instagram.com/huzaifasys",
  };

  return (
    <section id="about-section" className="relative w-full bg-white overflow-hidden py-10 md:py-16 scroll-mt-20">
      {/* ─── Editorial Service / Skills Bar (Exact match to reference SS) ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top border line */}
        <div className="w-full h-px bg-border" />

        {/* Main interactive row */}
        <div className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Skills with circular badge + superscript plus */}
          <div className="flex flex-wrap items-center gap-y-3">
            {skills.map((skill, index) => (
              <div key={skill.name} className="inline-flex items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light tracking-wide text-slate-dark uppercase font-sans">
                  {skill.name}
                </span>

                {/* Circular badge with React SVG icon + superscript plus */}
                <div className="relative inline-flex items-center mx-2.5 sm:mx-3.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-light border border-border flex items-center justify-center shadow-xs select-none">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-white border border-border text-[9px] font-bold text-slate-dark flex items-center justify-center leading-none select-none shadow-xs">
                    +
                  </span>
                </div>

                {/* Separator slash */}
                {index < skills.length - 1 && (
                  <span className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-dark/30 mx-2 sm:mx-4 select-none">
                    /
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Black Pill "Hire Me" button with white arrow circle */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-slate-dark text-white rounded-full pl-5 pr-1.5 py-1.5 text-sm font-semibold tracking-tight hover:bg-slate-900 transition-colors shadow-sm select-none group"
            >
              <span>Hire Me</span>
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-slate-dark transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  className="w-3.5 h-3.5 text-slate-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom border line */}
        <div className="w-full h-px bg-border" />

        {/* Sub Links Row (GITHUB • LINKEDIN • INSTAGRAM) */}
        <div className="pt-3 pb-10 flex items-center justify-end gap-3 text-xs tracking-widest font-semibold text-slate-dark/60 uppercase select-none">
          {subLinks.map((link, idx) => (
            <span key={link} className="flex items-center gap-3">
              <a
                href={subLinksMap[link] || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-dark transition-colors cursor-pointer"
              >
                {link}
              </a>
              {idx < subLinks.length - 1 && <span>•</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Manifesto Section with Side Tag & Sentence Case Text ─── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 mt-12 md:mt-16 mb-6">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 lg:gap-16">
          {/* Left Index Tag (Style 2) */}
          <div className="shrink-0 pt-2 select-none">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/90 px-2 py-0.5 rounded text-[11px]">
                [CORE]
              </span>
              <span className="text-slate-400 font-normal">/</span>
              <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
                {aboutStats.tag || "PHILOSOPHY"}
              </span>
            </div>
          </div>

          {/* Right Scroll Word Reveal Text */}
          <div className="flex-1">
            <ScrollWordReveal text={fullManifesto} />
          </div>
        </div>
      </div>
    </section>
  );
}
