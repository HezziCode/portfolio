"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Clock,
  Mail,
  Check,
  Calendar,
  Globe,
} from "lucide-react";
import { websiteContent } from "@/content/websiteContent";

const COOLDOWN_MS = 15000; // 15 seconds cooldown after closing

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const isOpenRef = useRef(false);
  const pageLoadedAtRef = useRef(Date.now());
  const router = useRouter();

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Remove legacy permanent session block if present
    sessionStorage.removeItem("has_seen_exit_modal");

    const handleMouseLeave = (e: MouseEvent) => {
      // Don't trigger if already open
      if (isOpenRef.current) return;

      // Prevent firing immediately on initial hydration within first 1 second
      if (Date.now() - pageLoadedAtRef.current < 1000) return;

      // Trigger when cursor leaves through the top (into tabs/URL bar)
      if (e.clientY <= 0) {
        const dismissedAt = Number(
          sessionStorage.getItem("exit_modal_dismissed_at") || "0"
        );
        const elapsed = Date.now() - dismissedAt;

        // Check if 15-second cooldown has passed
        if (elapsed >= COOLDOWN_MS) {
          setIsOpen(true);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("exit_modal_dismissed_at", Date.now().toString());
    }
  };

  const handleScheduleClick = () => {
    handleDismiss();
    router.push("/schedule");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(websiteContent.contactPage.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 select-none">
          {/* Backdrop with rich blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-md"
          />

          {/* Modal Container: Executive Engineering Discovery Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[820px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              type="button"
              aria-label="Close modal"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer z-20"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col md:flex-row items-stretch">
              {/* ──────────────────────────────────────────────────────────
                  LEFT COLUMN: Authentic Real Studio Portrait with Gentle Organic Silhouette
                  (100% Real Camera Optics — Zero AI Cutout / Synthetic Look)
                  ────────────────────────────────────────────────────────── */}
              <div className="relative w-full md:w-[44%] min-h-[300px] md:min-h-[500px] shrink-0 overflow-hidden bg-slate-900">
                <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
                  {/* Real Camera Portrait */}
                  <Image
                    src="/about-real.jpg"
                    alt="Huzaifa Sys"
                    fill
                    className="object-cover object-[32%_top]"
                    priority
                  />

                  {/* Natural Photographic Light Falloff & Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20 pointer-events-none z-10" />

                  {/* Desktop Organic Wave Mask (Zero-artifact seamless edge) */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="hidden md:block absolute inset-0 w-full h-full fill-white pointer-events-none z-20"
                  >
                    <path d="M 101,-1 L 52,-1 C 70,5 88,20 88,36 C 88,46 82,52 82,60 C 82,68 96,74 96,82 C 96,90 78,96 58,101 L 101,101 Z" />
                  </svg>

                  {/* Mobile Bottom Wave */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="md:hidden absolute -bottom-0.5 left-0 right-0 w-full h-12 fill-white pointer-events-none z-20"
                  >
                    <path d="M 0,100 L 0,40 Q 50,90 100,30 L 100,100 Z" />
                  </svg>

                  {/* Floating Live Status Pill */}
                  <div className="absolute bottom-3.5 left-3.5 max-w-[210px] p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white select-none z-30">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase text-emerald-400">
                        Available For Builds
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono pt-1 border-t border-white/10">
                      <div className="flex items-center gap-1">
                        <Globe className="w-3 h-3 text-slate-400" />
                        <span>GMT+5 (PKT)</span>
                      </div>
                      <span className="text-slate-400">US/EU Overlap</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ──────────────────────────────────────────────────────────
                  RIGHT COLUMN: Value Proposition & High-Impact Direct Actions
                  ────────────────────────────────────────────────────────── */}
              <div className="w-full md:w-[56%] p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  {/* Category Indicator */}
                  <div className="flex items-center gap-2 text-xs font-mono mb-3">
                    <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/90 px-2 py-0.5 rounded text-[11px]">
                      [05]
                    </span>
                    <span className="text-slate-400">/</span>
                    <span className="text-primary uppercase tracking-widest text-[11px] font-bold">
                      FAST-TRACK DISCOVERY
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-dark tracking-tight leading-snug mb-2.5">
                    Before you go — let&apos;s talk engineering.
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-slate-mid leading-relaxed mb-6">
                    Planning an autonomous AI workflow, scaling a Next.js SaaS MVP, or need architecture review? Let&apos;s have a quick, high-impact conversation.
                  </p>

                  {/* 3 Executive Value Highlights */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-dark">
                          15-Min Feasibility Call
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          Fast technical roadmap exploration with zero sales fluff.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-dark">
                          Direct 1-on-1 with Me
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          You work directly with me — no middlemen, sales reps, or account managers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-dark">
                          24-Hour Response Guarantee
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          Rapid feedback on scopes, architectures, and timelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div>
                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                    {/* Primary Button: Book Discovery */}
                    <button
                      type="button"
                      onClick={handleScheduleClick}
                      className="flex-1 py-3 px-5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book 15-Min Discovery</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    {/* Secondary Button: Copy / Send Email */}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200/90 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied Email!</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 text-slate-600" />
                          <span>Copy Direct Email</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center mt-3 font-mono">
                    Direct line:{" "}
                    <span className="text-slate-600 font-semibold">
                      {websiteContent.contactPage.email}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
