"use client";

import { useState } from "react";
import Image from "next/image";
import { websiteContent } from "@/content/websiteContent";

export default function AboutHero() {
  const { about } = websiteContent;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-white w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-12 sm:pb-16">
      {/* ─── Header Block ─── */}
      <div className="mb-10">
        {/* Technical Engineering Index (Style 2) */}
        <div className="flex items-center gap-2 text-xs font-mono mb-5 select-none">
          <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/90 px-2 py-0.5 rounded text-[11px]">
            [01]
          </span>
          <span className="text-slate-400 font-normal">/</span>
          <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
            About Huzaifa Sys • Biography
          </span>
        </div>

        {/* Crisp High-Contrast Editorial Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-slate-dark leading-[1.15] tracking-tight mb-6 max-w-5xl">
          {about.headingPrefix} {about.headingMain}
          <br className="hidden lg:inline" /> {about.headingSub}{" "}
          <span className="whitespace-nowrap italic font-normal text-primary font-sans">
            {about.headingHighlight}
          </span>
        </h1>

        {/* ─── Subtext + Live Availability Badge Row ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-1">
          <p className="text-slate-mid text-base sm:text-lg leading-relaxed max-w-2xl">
            {about.subtext}
          </p>

          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-border shadow-2xs text-xs font-mono font-bold tracking-wider select-none shrink-0 self-start md:self-end">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-dark">AVAILABLE FOR WORK</span>
            <span className="text-slate-300 font-light">|</span>
            <span className="text-slate-mid">WORLDWIDE</span>
            <span className="text-slate-300 font-light">|</span>
            <span className="text-primary font-bold">2026</span>
          </div>
        </div>
      </div>

      {/* ─── Video Showcase (Interactive Thumbnail & Inline Player) ─── */}
      <div className="relative w-full rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] border border-slate-800/80 shadow-xl bg-[#090d16] group select-none">
        {isPlaying ? (
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            {((about.video as unknown as { videoUrl?: string }).videoUrl || about.video.embedUrl)?.endsWith(".mp4") ||
            ((about.video as unknown as { videoUrl?: string }).videoUrl || about.video.embedUrl)?.startsWith("/video/") ? (
              <video
                src={(about.video as unknown as { videoUrl?: string }).videoUrl || about.video.embedUrl}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={`${about.video.embedUrl}?autoplay=1&rel=0`}
                title={about.video.subtitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
            {/* Close Video overlay button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs font-mono font-semibold border border-white/20 backdrop-blur-md transition-all shadow-md hover:scale-105 cursor-pointer"
              aria-label="Close video"
            >
              <span>✕ Close Video</span>
            </button>
          </div>
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="relative w-full h-full cursor-pointer group"
          >
            {about.video.customThumbnail ? (
              <div className="relative w-full h-full">
                <Image
                  src={about.video.customThumbnail}
                  alt={about.video.caption || "Huzaifa's Story"}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />

                {/* Center: Cinematic Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-500/30 animate-ping opacity-70" />
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 fill-slate-950 translate-x-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom-Right Duration Badge */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold shadow-lg">
                    <span className="text-blue-400">▶</span>
                    <span>{about.video.duration}</span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-10">
                {/* 1. Atmospheric Ambient Glows */}
                <div className="absolute -left-20 top-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-600/25 blur-3xl pointer-events-none" />
                <div className="absolute -right-10 top-1/4 w-72 sm:w-88 h-72 sm:h-88 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/25 via-transparent to-black/60 pointer-events-none" />

                {/* 2. Right Side: Authentic Portrait with Seamless Gradient Blend */}
                <div className="absolute right-0 top-0 bottom-0 w-[52%] sm:w-[48%] md:w-[44%] pointer-events-none overflow-hidden">
                  <Image
                    src={about.image}
                    alt="Huzaifa Sys - Video Introduction"
                    fill
                    priority
                    className="object-cover object-[center_12%] opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1280px) 50vw, 600px"
                  />
                  {/* Fade masks to seamlessly blend portrait into dark studio canvas */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#090d16] via-[#090d16]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/70 via-transparent to-transparent" />
                </div>

                {/* 3. Top-Left Corner: Logo / Brand Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-white text-xs font-mono font-bold tracking-wider shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span>{about.video.tag}</span>
                  </div>
                </div>

                {/* 4. Center-Left: Big Typography ("Huzaifa's [Story] Who I Am...") */}
                <div className="relative z-10 my-auto flex flex-col gap-2 max-w-sm sm:max-w-md pt-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans drop-shadow-md">
                    {about.video.titleLine1}
                  </span>

                  {/* Styled Accent Box */}
                  <div className="inline-flex items-center self-start px-4 sm:px-5 py-1.5 sm:py-2 rounded-2xl bg-black/85 border border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.4)] backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.02]">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans italic text-blue-400 font-semibold tracking-wide">
                      {about.video.titleBadge}
                    </span>
                  </div>

                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white/95 tracking-tight font-sans drop-shadow-md">
                    {about.video.titleLine2}
                  </span>
                </div>

                {/* 5. Center: Cinematic Play Button with Subtle Pulse */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-blue-500/25 animate-ping opacity-60" />
                    <div className="w-13 h-13 sm:w-15 sm:h-15 md:w-16 md:h-16 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 fill-slate-950 translate-x-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 6. Bottom-Left: Subtitle & Duration Label */}
                <div className="relative z-10 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-300/90">
                  <span>{about.video.subtitle}</span>
                  <span className="text-white/30">•</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold shadow-xs">
                    <span>▶</span>
                    <span>{about.video.duration}</span>
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ─── Image / Video Caption (Prompt 8 & Reference Screenshot) ─── */}
      <div className="mt-3.5 flex items-center justify-between text-xs font-mono text-slate-mid/70 select-none px-1">
        <span>{about.video.caption}</span>
        <span className="hidden sm:inline text-slate-400">{about.video.location}</span>
      </div>

      {/* ─── 4-Metric Stats Row (Clean Editorial Typography) ─── */}
      {about.stats && (
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {about.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col group">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-dark tracking-tight leading-tight mb-2 font-sans group-hover:text-primary transition-colors">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-mid font-medium leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
