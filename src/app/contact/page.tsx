"use client";

import { useState, useEffect, useRef } from "react";
import { z } from "zod";
import {
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  Calendar,
  Globe,
  ChevronDown,
} from "lucide-react";
import { websiteContent } from "@/content/websiteContent";
import Footer from "@/components/Footer";
import CalBookingSection from "@/components/CalBookingSection";

const EXPLORATION_OPTIONS = [
  "Autonomous AI Agents & Appointment Booking",
  "OpenAI Agent SDK & Voice AI Bots (Vapi)",
  "Full-Stack Web Applications (Next.js & FastAPI)",
  "AI Workflow Automation & Tool Calling",
  "Custom Project / Other",
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters)"),
  email: z.string().trim().email("Please enter a valid work email address"),
  company: z.string().optional(),
  exploration: z.string().optional(),
  message: z.string().optional(),
});

export default function ContactPage() {
  const { contactPage } = websiteContent;
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    exploration: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleHashScroll = () => {
      if (typeof window !== "undefined" && window.location.hash === "#schedule") {
        const timer = setTimeout(() => {
          const el = document.getElementById("schedule");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 80);
        return () => clearTimeout(timer);
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactPage.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <main className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          {/* ══════════════════════════════════════════════
              2-COLUMN BALANCED 50/50 HERO SECTION
              ══════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

            {/* ──────────────────────────────────────────
                LEFT COLUMN: Architectural Directory & Direct Channels (No Boxes, No Emojis)
                ────────────────────────────────────────── */}
            <div className="flex flex-col justify-start py-2 sm:py-3 pr-0 lg:pr-6">
              {/* Technical Engineering Index */}
              <div className="flex items-center gap-2 text-xs font-mono mb-5 select-none">
                <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/90 px-2 py-0.5 rounded text-[11px]">
                  [04]
                </span>
                <span className="text-slate-400 font-normal">/</span>
                <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
                  GET IN TOUCH
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold text-slate-dark tracking-tight leading-[1.08] mb-4">
                Let&apos;s build <br />
                <span className="italic font-normal text-primary font-sans">something real</span>.
              </h1>

              {/* Subtext */}
              <p className="text-slate-mid text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                Need an autonomous AI agent, appointment booking voice bot, or full-stack software built? Book a quick call or send me a message below.
              </p>

              {/* Technical Contact Directory (Structured, Clean, No Cheap Boxes) */}
              <div className="border-t border-b border-slate-200 divide-y divide-slate-100 select-none">
                {/* Row 1: Direct Email */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block leading-tight">
                        DIRECT INBOX
                      </span>
                      <a
                        href={`mailto:${contactPage.email}`}
                        className="text-sm sm:text-base font-bold text-slate-900 hover:text-primary transition-colors"
                      >
                        {contactPage.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    aria-label="Copy email address"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                    title="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Row 2: Discovery Call */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block leading-tight">
                        1:1 DISCOVERY CALL
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 block">
                        15-Min Strategy Session
                      </span>
                    </div>
                  </div>
                  <a
                    href="#schedule"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-primary text-slate-700 hover:text-white text-xs font-semibold transition-all group"
                  >
                    <span>Book</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Row 3: Timezone & Location */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block leading-tight">
                        BASE &amp; OVERLAP
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 block">
                        {contactPage.location} (PKT • UTC+5)
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        4–6 hrs daily overlap with US, UK &amp; EU
                      </span>
                    </div>
                  </div>
                </div>

                {/* Row 4: Response Guarantee */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block leading-tight">
                        TURNAROUND
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 block">
                        &lt; 12 Hours Guaranteed Response
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    DIRECT 1:1
                  </span>
                </div>

                {/* Row 5: Live Availability Status */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block leading-tight">
                        CURRENT STATUS
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          Open for Q3/Q4 Client Engagements
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ──────────────────────────────────────────
                RIGHT COLUMN: Project Inquiry Form
                ────────────────────────────────────────── */}
            <div className="h-full">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between h-full relative overflow-hidden">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-dark tracking-tight mb-2">
                    Tell me a bit about your project.
                  </h2>
                  <p className="text-sm text-slate-mid mb-6">
                    Prefer writing? Share a few details below and I&apos;ll review your requirements and reply within 12 hours.
                  </p>

                  {submitted ? (
                    <div className="py-16 px-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-center flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-blue-100 text-primary flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-dark mb-2">
                        Message Received!
                      </h3>
                      <p className="text-sm text-slate-mid max-w-md mb-6 leading-relaxed">
                        Thank you for reaching out, {formData.name || "there"}. I&apos;ve received your inquiry and will analyze your requirements and get back to you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            exploration: "",
                            message: "",
                          });
                          setErrors({});
                          setIsDropdownOpen(false);
                        }}
                        className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-all cursor-pointer shadow-sm"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                      {/* Name (Required) */}
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                          Name <span className="text-primary font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Jane Smith"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) {
                              setErrors((prev) => {
                                const next = { ...prev };
                                delete next.name;
                                return next;
                              });
                            }
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-dark text-sm placeholder:text-slate-400 focus:outline-none transition-all ${
                            errors.name
                              ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                              : "border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-500 mt-1.5 font-medium">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Work Email (Required) */}
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                          Work Email <span className="text-primary font-bold">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="jane@framer.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) {
                              setErrors((prev) => {
                                const next = { ...prev };
                                delete next.email;
                                return next;
                              });
                            }
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-dark text-sm placeholder:text-slate-400 focus:outline-none transition-all ${
                            errors.email
                              ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                              : "border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-500 mt-1.5 font-medium">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Company (Optional) */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Company
                          </label>
                          <span className="text-[11px] text-slate-400 font-mono lowercase">(optional)</span>
                        </div>
                        <input
                          type="text"
                          placeholder="websitename.com"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-dark text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>

                      {/* What are you exploring? (Custom Dropdown - Optional) */}
                      <div className="relative" ref={dropdownRef}>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            What are you exploring?
                          </label>
                          <span className="text-[11px] text-slate-400 font-mono lowercase">(optional)</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen((prev) => !prev)}
                          className={`w-full px-4 py-3 rounded-xl border text-left text-sm flex items-center justify-between transition-all cursor-pointer ${
                            isDropdownOpen
                              ? "border-primary bg-white ring-2 ring-primary/20"
                              : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-dark"
                          }`}
                          aria-haspopup="listbox"
                          aria-expanded={isDropdownOpen}
                        >
                          <span className={formData.exploration ? "text-slate-900 font-medium" : "text-slate-400 font-normal"}>
                            {formData.exploration || "Select an area of interest..."}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                              isDropdownOpen ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>

                        {isDropdownOpen && (
                          <div
                            role="listbox"
                            className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-2xl border border-slate-200 shadow-xl py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150"
                          >
                            {EXPLORATION_OPTIONS.map((option) => {
                              const isSelected = formData.exploration === option;
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  role="option"
                                  aria-selected={isSelected}
                                  onClick={() => {
                                    setFormData((prev) => ({
                                      ...prev,
                                      exploration: prev.exploration === option ? "" : option,
                                    }));
                                    setIsDropdownOpen(false);
                                  }}
                                  className={`w-full px-4 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                    isSelected
                                      ? "bg-blue-50/80 text-primary font-semibold"
                                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium"
                                  }`}
                                >
                                  <span>{option}</span>
                                  {isSelected && <Check className="w-4 h-4 text-primary shrink-0 ml-2" />}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* Tell us more (Optional) */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Tell us more
                          </label>
                          <span className="text-[11px] text-slate-400 font-mono lowercase">(optional)</span>
                        </div>
                        <textarea
                          rows={3}
                          placeholder="What's the most challenging workflow or vision on your plate right now?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-dark text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        />
                      </div>

                      {/* Error Alert if Send Fails */}
                      {submitError && (
                        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center justify-between">
                          <span>{submitError}</span>
                          <button
                            type="button"
                            onClick={() => setSubmitError(null)}
                            className="text-rose-500 hover:text-rose-800 font-bold ml-2 text-sm leading-none"
                          >
                            ×
                          </button>
                        </div>
                      )}

                      {/* Submit Button (Royal Blue Theme) */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark disabled:bg-primary/70 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group cursor-pointer disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════════════
              CAL.COM SCHEDULING SECTION (#schedule)
              ══════════════════════════════════════════════ */}
          <CalBookingSection showAnchor={true} className="mt-16 sm:mt-24 pt-4" />

        </div>
      </main>

      {/* Global Site Footer */}
      <Footer />
    </div>
  );
}
