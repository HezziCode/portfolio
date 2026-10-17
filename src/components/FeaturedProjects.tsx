"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { websiteContent } from "@/content/websiteContent";

export default function FeaturedProjects() {
  const { projects } = websiteContent;
  // Get the featured projects (up to 4)
  const featured = projects.slice(0, 4);

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ─── 1. Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div>
            {/* Technical Engineering Index */}
            <div className="flex items-center gap-2 text-xs font-mono mb-4 select-none">
              <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/90 px-2 py-0.5 rounded text-[11px]">
                [03]
              </span>
              <span className="text-slate-400 font-normal">/</span>
              <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
                Selected Works &amp; Architecture
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-dark tracking-tight leading-[1.1]">
              Featured Projects{" "}
              <span className="italic font-normal text-primary font-sans">in action</span>?
            </h2>

            <p className="text-sm sm:text-base text-slate-mid mt-3 max-w-xl leading-relaxed">
              If you want to know how full-stack SaaS applications and AI agent workflows perform in practice, here is a transparent look at the architecture behind my production builds.
            </p>
          </div>

          {/* Top Pill Button */}
          <Link
            href="/projects"
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-white text-xs sm:text-sm font-semibold text-slate-dark hover:border-primary hover:text-primary transition-all duration-200 shadow-2xs group self-start md:self-end"
          >
            <span>See the full breakdown</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* ─── 2. Stack of Alternating 50/50 Split Cards (Unified with /projects) ─── */}
        <div className="space-y-12 sm:space-y-16">
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border border-slate-300/80 bg-white overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-300 rounded-2xl sm:rounded-3xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                  {/* ─── 1. VISUAL CONTAINER (50% Split, Edge-to-Edge) ─── */}
                  <div
                    className={`relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden flex items-center justify-center ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {project.image ? (
                      <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] bg-[#E8ECEF] overflow-hidden flex items-center justify-center select-none group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    ) : (project.slug === "ai-agent-orchestrator" || index % 3 === 0) ? (
                      /* Visual 1: 3D Floating Geometric Cubes & Glowing Amber Orbs */
                      <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] flex items-center justify-center bg-gradient-to-b from-[#0E131F] via-[#0A0D16] to-[#06080F] select-none p-6">
                        <div className="absolute w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none -top-10 -right-10" />
                        <div className="absolute w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none -bottom-10 -left-10" />

                        <svg
                          className="w-full max-w-sm h-72 sm:h-80 drop-shadow-2xl"
                          viewBox="0 0 400 360"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient id="hpCubeTop1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#2A3447" />
                              <stop offset="100%" stopColor="#1E2638" />
                            </linearGradient>
                            <linearGradient id="hpCubeLeft1" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#182030" />
                              <stop offset="100%" stopColor="#0B0F19" />
                            </linearGradient>
                            <linearGradient id="hpCubeRight1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#D97706" stopOpacity="0.85" />
                              <stop offset="60%" stopColor="#78350F" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#0F172A" />
                            </linearGradient>
                            <linearGradient id="hpCubeTop2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#334155" />
                              <stop offset="100%" stopColor="#1E293B" />
                            </linearGradient>
                            <linearGradient id="hpCubeLeft2" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#1E293B" />
                              <stop offset="100%" stopColor="#0F172A" />
                            </linearGradient>
                            <linearGradient id="hpCubeRight2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#B45309" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#020617" />
                            </linearGradient>
                            <radialGradient id="hpGlowOrb1" cx="35%" cy="35%" r="65%">
                              <stop offset="0%" stopColor="#FEF08A" />
                              <stop offset="40%" stopColor="#FACC15" />
                              <stop offset="80%" stopColor="#EAB308" />
                              <stop offset="100%" stopColor="#CA8A04" />
                            </radialGradient>
                            <filter id="hpBlurOrb" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur stdDeviation="8" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>

                          {/* Background Cube */}
                          <g transform="translate(40, 40)">
                            <polygon points="90,30 140,55 90,80 40,55" fill="url(#hpCubeTop2)" />
                            <polygon points="40,55 90,80 90,140 40,115" fill="url(#hpCubeLeft2)" />
                            <polygon points="90,80 140,55 140,115 90,140" fill="url(#hpCubeRight2)" />
                          </g>

                          {/* Primary Center 3D Cube */}
                          <g transform="translate(100, 70)">
                            <polygon points="100,20 170,55 100,90 30,55" fill="url(#hpCubeTop1)" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4" />
                            <polygon points="30,55 100,90 100,180 30,145" fill="url(#hpCubeLeft1)" />
                            <polygon points="100,90 170,55 170,145 100,180" fill="url(#hpCubeRight1)" />
                            <line x1="100" y1="90" x2="100" y2="180" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.6" />
                          </g>

                          {/* Lower Angled Geometric Block */}
                          <g transform="translate(130, 210)">
                            <polygon points="50,10 90,30 50,50 10,30" fill="#1E293B" />
                            <polygon points="10,30 50,50 50,110 10,90" fill="#0F172A" />
                            <polygon points="50,50 90,30 90,90 50,110" fill="#182030" />
                          </g>

                          {/* Glowing Amber Sphere Upper Right */}
                          <circle cx="280" cy="95" r="14" fill="url(#hpGlowOrb1)" filter="url(#hpBlurOrb)" />
                          <circle cx="280" cy="95" r="14" fill="url(#hpGlowOrb1)" />

                          {/* Glowing Yellow Small Sphere Bottom Left */}
                          <circle cx="105" cy="235" r="11" fill="url(#hpGlowOrb1)" filter="url(#hpBlurOrb)" />
                          <circle cx="105" cy="235" r="11" fill="url(#hpGlowOrb1)" />
                        </svg>
                      </div>
                    ) : (project.slug === "saas-analytics-platform" || index % 3 === 1) ? (
                      /* Visual 2: Ethereal 3D Sculptural Discs & Curves */
                      <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] flex items-center justify-center bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#F1F5F9] select-none p-6 overflow-hidden">
                        <div className="absolute w-80 h-80 rounded-full bg-sky-200/50 blur-3xl pointer-events-none -bottom-10 -left-10" />
                        <div className="absolute w-80 h-80 rounded-full bg-blue-200/40 blur-3xl pointer-events-none -top-10 -right-10" />

                        <svg
                          className="w-full max-w-sm h-72 sm:h-80 drop-shadow-xl"
                          viewBox="0 0 400 360"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient id="hpDiscGrad1" x1="20%" y1="0%" x2="80%" y2="100%">
                              <stop offset="0%" stopColor="#FFFFFF" />
                              <stop offset="60%" stopColor="#E2E8F0" />
                              <stop offset="100%" stopColor="#94A3B8" />
                            </linearGradient>
                            <linearGradient id="hpDiscGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#F8FAFC" />
                              <stop offset="50%" stopColor="#CBD5E1" />
                              <stop offset="100%" stopColor="#64748B" />
                            </linearGradient>
                          </defs>

                          {/* Bottom Layer Disc */}
                          <ellipse cx="200" cy="260" rx="65" ry="30" fill="url(#hpDiscGrad2)" opacity="0.8" />

                          {/* Middle Spiral Layer */}
                          <ellipse cx="200" cy="205" rx="90" ry="42" fill="url(#hpDiscGrad1)" stroke="#CBD5E1" strokeWidth="1" />
                          <ellipse cx="200" cy="205" rx="55" ry="24" fill="#64748B" opacity="0.2" />

                          {/* Top Dominant Floating Disc */}
                          <g transform="rotate(-15 200 130)">
                            <ellipse cx="200" cy="130" rx="110" ry="58" fill="url(#hpDiscGrad1)" stroke="#FFFFFF" strokeWidth="1.5" />
                            <ellipse cx="200" cy="130" rx="70" ry="36" fill="url(#hpDiscGrad2)" />
                            <ellipse cx="200" cy="130" rx="40" ry="20" fill="#94A3B8" opacity="0.3" />
                          </g>

                          {/* Floating Spheres */}
                          <circle cx="140" cy="170" r="7" fill="#E2E8F0" stroke="#CBD5E1" />
                          <circle cx="280" cy="210" r="8" fill="#60A5FA" opacity="0.6" />
                        </svg>
                      </div>
                    ) : (
                      /* Visual 3: 3D Dark Geodesic Sphere & Metallic Copper Particles */
                      <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] flex items-center justify-center bg-gradient-to-b from-[#0F141C] via-[#090C12] to-[#04060A] select-none p-6 overflow-hidden">
                        <div className="absolute w-72 h-72 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

                        <svg
                          className="w-full max-w-sm h-72 sm:h-80 drop-shadow-2xl"
                          viewBox="0 0 400 360"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <radialGradient id="hpDarkSphere" cx="35%" cy="35%" r="65%">
                              <stop offset="0%" stopColor="#1E293B" />
                              <stop offset="60%" stopColor="#0F172A" />
                              <stop offset="100%" stopColor="#020617" />
                            </radialGradient>
                            <radialGradient id="hpCopperNode" cx="30%" cy="30%" r="70%">
                              <stop offset="0%" stopColor="#FED7AA" />
                              <stop offset="40%" stopColor="#FB923C" />
                              <stop offset="80%" stopColor="#C2410C" />
                              <stop offset="100%" stopColor="#7C2D12" />
                            </radialGradient>
                            <radialGradient id="hpChromeNode" cx="30%" cy="30%" r="70%">
                              <stop offset="0%" stopColor="#FFFFFF" />
                              <stop offset="50%" stopColor="#94A3B8" />
                              <stop offset="100%" stopColor="#334155" />
                            </radialGradient>
                          </defs>

                          {/* Central Matte Black Core Sphere */}
                          <circle cx="200" cy="180" r="92" fill="url(#hpDarkSphere)" stroke="#334155" strokeWidth="1" />

                          {/* Geodesic Wireframe Lattice Arcs */}
                          <ellipse cx="200" cy="180" rx="92" ry="32" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                          <ellipse cx="200" cy="180" rx="32" ry="92" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                          <circle cx="200" cy="180" r="118" stroke="#38BDF8" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="4 4" />

                          {/* Triangulation Structural Lines */}
                          <path d="M130 140 L200 110 L270 140 L250 210 L150 210 Z" stroke="#F97316" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
                          <line x1="200" y1="110" x2="200" y2="250" stroke="#F97316" strokeWidth="0.5" strokeOpacity="0.3" />

                          {/* Clustered Floating Metallic Copper Particles */}
                          <circle cx="130" cy="140" r="7" fill="url(#hpCopperNode)" />
                          <circle cx="155" cy="115" r="5.5" fill="url(#hpCopperNode)" />
                          <circle cx="180" cy="95" r="6" fill="url(#hpCopperNode)" />
                          <circle cx="215" cy="90" r="8" fill="url(#hpCopperNode)" />
                          <circle cx="245" cy="105" r="5" fill="url(#hpCopperNode)" />
                          <circle cx="270" cy="140" r="7.5" fill="url(#hpCopperNode)" />

                          <circle cx="115" cy="180" r="9" fill="url(#hpCopperNode)" />
                          <circle cx="145" cy="220" r="8" fill="url(#hpCopperNode)" />
                          <circle cx="175" cy="245" r="6.5" fill="url(#hpCopperNode)" />
                          <circle cx="215" cy="250" r="9" fill="url(#hpCopperNode)" />
                          <circle cx="255" cy="235" r="7" fill="url(#hpCopperNode)" />
                          <circle cx="285" cy="195" r="8.5" fill="url(#hpCopperNode)" />

                          {/* Outer Orbiting Micro Nodes */}
                          <circle cx="95" cy="150" r="4" fill="url(#hpChromeNode)" />
                          <circle cx="305" cy="165" r="4.5" fill="url(#hpChromeNode)" />
                          <circle cx="160" cy="275" r="3.5" fill="url(#hpChromeNode)" />
                          <circle cx="240" cy="75" r="4" fill="url(#hpChromeNode)" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* ─── 2. TEXT CONTENT CONTAINER (50% Split, Centered Vertically) ─── */}
                  <div
                    className={`p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-[#FAFAF9] ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Subtitle */}
                    <div className="text-xs sm:text-sm font-medium text-slate-500 mb-2">
                      {project.client} – {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mb-5">
                      {project.overview}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono font-medium text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* KNOW MORE Action Link with circle arrow */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 hover:text-primary transition-colors group select-none w-fit"
                    >
                      <span>KNOW MORE</span>
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-primary">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── 3. Bottom Centered "View All Projects" Button ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-18 flex justify-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-blue-600 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 select-none"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
