"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Layers,
  Cloud,
  Search,
  X,
  RotateCcw,
} from "lucide-react";
import { websiteContent } from "@/content/websiteContent";
import Footer from "@/components/Footer";

function getCategoryIcon(category: string) {
  const cat = category.toLowerCase();
  if (cat.includes("ai") || cat.includes("agent")) {
    return <Bot className="w-3.5 h-3.5" />;
  }
  if (cat.includes("devops") || cat.includes("cloud")) {
    return <Cloud className="w-3.5 h-3.5" />;
  }
  return <Layers className="w-3.5 h-3.5" />;
}

export default function ProjectsArchivePage() {
  const { projects } = websiteContent;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  // Mouse tracking for cursor follower
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const categories = [
    { name: "All", filterKey: "all" },
    { name: "AI Agents", filterKey: "ai agents" },
    { name: "Full Stack", filterKey: "full stack" },
    { name: "Cloud & DevOps", filterKey: "devops" },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      activeCategory === "All" ||
      (activeCategory === "Cloud & DevOps" &&
        (p.category.toLowerCase().includes("devops") ||
          p.category.toLowerCase().includes("cloud"))) ||
      p.category.toLowerCase() === activeCategory.toLowerCase();

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      p.title.toLowerCase().includes(query) ||
      p.overview.toLowerCase().includes(query) ||
      p.techStack.some((t) => t.toLowerCase().includes(query)) ||
      p.category.toLowerCase().includes(query) ||
      p.client.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const isFiltered = activeCategory !== "All" || searchQuery.trim() !== "";

  const hoveredProject = filteredProjects.find(
    (p) => p.slug === hoveredSlug
  ) || null;

  return (
    <main className="min-h-screen bg-white">
      {/* ══════════════════════════════════════════════
          HERO SECTION (Editorial Header + Interactive Filter)
          ══════════════════════════════════════════════ */}
      <section className="relative w-full pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-24 md:pb-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* Technical Engineering Index */}
            <div className="flex items-center gap-2 text-xs font-mono mb-4 select-none">
              <span className="font-bold text-slate-dark bg-slate-light border border-border px-2 py-0.5 rounded text-[11px]">
                [02]
              </span>
              <span className="text-slate-400 font-normal">/</span>
              <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
                Project Archive • 2024–2025
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-dark tracking-tight leading-[1.08] mb-5">
              Things I&apos;ve{" "}
              <span className="italic font-normal text-primary font-sans">
                Built
              </span>
              .
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-mid leading-relaxed max-w-2xl mb-8 sm:mb-10">
              Case studies from idea to production — covering full-stack web apps, multi-agent systems, and scalable cloud infrastructure.
            </p>
          </motion.div>

          {/* Interactive Category Filter Pills + Tech Search & Live Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none pt-2"
          >
            {/* Left: Category Filter Pills Segmented Control */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-slate-light border border-border w-fit shadow-2xs">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.name;

                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.name);
                    }}
                    className="relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer flex items-center select-none"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProjectCategoryPill"
                        className="absolute inset-0 bg-primary rounded-full shadow-xs"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? "text-white font-bold"
                          : "text-slate-600 hover:text-slate-950 font-medium"
                      }`}
                    >
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Quick Tech/Keyword Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Filter by tech or keyword..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                className="pl-9 pr-8 py-2 text-xs rounded-full bg-white border border-border text-slate-dark placeholder:text-slate-dark/40 focus:outline-none focus:border-slate-400 focus:bg-white w-48 sm:w-64 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Active Filter Helper Bar (if filtered) */}
          {isFiltered && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mt-4 pt-3 text-xs font-mono text-slate-mid"
            >
              <span>
                Showing <strong className="text-slate-dark">{filteredProjects.length}</strong> of{" "}
                <strong className="text-slate-dark">{projects.length}</strong> systems
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="inline-flex items-center gap-1 text-primary hover:underline font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Reset filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CURSOR-FOLLOWING IMAGE REVEAL TABLE
          ══════════════════════════════════════════════ */}
      <section className="pt-4 pb-20 sm:pt-6 sm:pb-24 md:pt-8 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 px-6 rounded-3xl border border-dashed border-border bg-slate-light max-w-lg mx-auto mb-20">
              <p className="text-slate-dark font-semibold text-base mb-1">
                No matching systems found
              </p>
              <p className="text-slate-mid text-xs mb-5">
                No case studies match &ldquo;{searchQuery || activeCategory}&rdquo;. Try another tech keyword or reset the filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-full bg-slate-dark text-white text-xs font-semibold hover:bg-primary transition-colors cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div
              className="relative mb-12"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredSlug(null)}
            >

              {/* ── FLOATING CURSOR IMAGE CARD ── */}
              <div className="hidden md:block">
                <motion.div
                  className="fixed pointer-events-none z-50
                    w-[340px] rounded-2xl overflow-hidden
                    border border-border shadow-2xl"
                  style={{
                    left: springX,
                    top: springY,
                    opacity: hoveredSlug ? 1 : 0,
                    transform: hoveredSlug
                      ? 'translate(-50%, -110%) scale(1)'
                      : 'translate(-50%, -110%) scale(0.9)',
                    transition:
                      'opacity 0.15s ease, transform 0.15s ease',
                    pointerEvents: 'none',
                  }}
                >
                  {hoveredProject && (
                    <>
                      {/* Image */}
                      <div className="relative w-full aspect-[16/9]">
                        {hoveredProject.image ? (
                          <img
                            src={hoveredProject.image}
                            alt={hoveredProject.title}
                            className="w-full h-full
                              object-cover object-top"
                          />
                        ) : (
                          <div
                            className={`w-full h-full
                              bg-gradient-to-br
                              ${hoveredProject.coverGradient}`}
                          />
                        )}

                        {/* Category badge on image */}
                        <div className="absolute top-3 left-3">
                          <span
                            className="inline-flex
                              items-center gap-1.5 px-2.5 py-1
                              rounded-full bg-white/90
                              backdrop-blur-sm text-slate-dark
                              text-[10px] font-bold"
                          >
                            {getCategoryIcon(hoveredProject.category)}
                            {hoveredProject.category}
                          </span>
                        </div>
                      </div>

                      {/* Card info strip */}
                      <div
                        className="bg-white px-4 py-3
                          flex items-center justify-between"
                      >
                        <div>
                          <p
                            className="text-[11px] font-bold
                              text-primary font-mono uppercase
                              tracking-wider"
                          >
                            {hoveredProject.role}
                          </p>
                          <p
                            className="text-sm font-black
                              text-slate-dark leading-snug
                              mt-0.5"
                          >
                            {hoveredProject.title}
                          </p>
                        </div>

                        {/* Metrics preview */}
                        {hoveredProject.metrics?.[0] && (
                          <div className="text-right shrink-0 ml-4">
                            <p
                              className="text-lg font-black
                                text-primary font-mono leading-none"
                            >
                              {hoveredProject.metrics[0].value}
                            </p>
                            <p
                              className="text-[9px] uppercase
                                tracking-wider text-slate-dark/40
                                font-mono mt-0.5"
                            >
                              {hoveredProject.metrics[0].label}
                            </p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              </div>

              {/* ── PROJECT TABLE LIST ── */}
              <div className="flex flex-col border-t border-border">
                {filteredProjects.map((project, index) => {
                  const isHovered = hoveredSlug === project.slug;

                  return (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      onMouseEnter={() =>
                        setHoveredSlug(project.slug)
                      }
                      className="group relative flex items-center
                        gap-6 py-8 border-b border-border
                        cursor-none px-2
                        transition-colors duration-200"
                      style={{
                        backgroundColor: isHovered
                          ? "var(--slate-light)"
                          : "transparent",
                      }}
                    >
                      {/* Left blue accent bar */}
                      <div
                        className="absolute left-0 top-0
                          bottom-0 w-[3px] rounded-r-full
                          bg-primary transition-opacity
                          duration-200"
                        style={{
                          opacity: isHovered ? 1 : 0,
                        }}
                      />

                      {/* Project number */}
                      <span
                        className="text-[13px] font-mono
                          font-bold w-7 shrink-0 select-none"
                        style={{
                          color: isHovered
                            ? "var(--primary)"
                            : "var(--border)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Title — grows to fill */}
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-xl sm:text-2xl
                            md:text-3xl font-black
                            tracking-tight leading-none
                            line-clamp-1 lg:line-clamp-none transition-colors
                            duration-200"
                          style={{
                            color: isHovered
                              ? "var(--primary)"
                              : "var(--slate-dark)",
                          }}
                        >
                          {project.title}
                        </h3>
                      </div>

                      {/* Right side metadata */}
                      <div
                        className="hidden md:flex items-center
                          gap-6 shrink-0"
                      >
                        {/* Category */}
                        <span
                          className="text-[11px] font-mono
                            uppercase tracking-widest
                            text-slate-dark/40 hidden lg:block"
                        >
                          {project.category}
                        </span>

                        {/* Tech pills — only on hover */}
                        <div
                          className="flex items-center
                            gap-1.5 w-[160px] justify-end"
                        >
                          {project.techStack
                            .slice(0, 2)
                            .map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] font-mono
                                  px-2 py-0.5 rounded-md border
                                  transition-all duration-200"
                                style={{
                                  opacity: isHovered ? 1 : 0,
                                  transform: isHovered
                                    ? "translateX(0)"
                                    : "translateX(8px)",
                                  backgroundColor: isHovered
                                    ? "white"
                                    : "transparent",
                                  borderColor: isHovered
                                    ? "var(--border)"
                                    : "transparent",
                                  color: "var(--slate-dark)",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                        </div>

                        {/* Arrow circle */}
                        <div
                          className="w-9 h-9 rounded-full
                            border flex items-center
                            justify-center flex-shrink-0
                            transition-all duration-200"
                          style={{
                            backgroundColor: isHovered
                              ? "var(--primary)"
                              : "white",
                            borderColor: isHovered
                              ? "var(--primary)"
                              : "var(--border)",
                          }}
                        >
                          <ArrowUpRight
                            className="w-4 h-4 transition-all
                              duration-200"
                            style={{
                              color: isHovered
                                ? "white"
                                : "var(--slate-dark)",
                              transform: isHovered
                                ? "translate(1px,-1px)"
                                : "none",
                            }}
                          />
                        </div>
                      </div>

                      {/* Mobile: just arrow */}
                      <div className="md:hidden shrink-0">
                        <ArrowUpRight
                          className="w-5 h-5
                            text-slate-dark/30
                            group-hover:text-primary
                            transition-colors"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Project count footer */}
              <div
                className="mt-6 flex items-center
                  justify-between"
              >
                <p
                  className="text-xs font-mono
                    text-slate-dark/30 uppercase tracking-widest"
                >
                  {filteredProjects.length} project
                  {filteredProjects.length !== 1 ? "s" : ""}{" "}
                  {isFiltered ? "found" : "total"}
                </p>
                <p
                  className="text-xs font-mono
                    text-slate-dark/20 hidden md:block"
                >
                  Hover to preview · Click to explore
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
