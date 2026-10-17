"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Search,
  Code2,
  Rocket,
  Sparkles,
  Layers,
} from "lucide-react";
import { websiteContent } from "@/content/websiteContent";

function getStepIcon(iconKey?: string) {
  const iconProps = { className: "w-6 h-6 text-primary stroke-[1.75]" };
  switch (iconKey?.toLowerCase()) {
    case "ear":
    case "listen":
    case "listening":
    case "discovery":
      return <Compass {...iconProps} />;
    case "search":
    case "research":
      return <Search {...iconProps} />;
    case "code":
    case "development":
    case "fullstack":
      return <Code2 {...iconProps} />;
    case "rocket":
    case "scale":
    case "deploy":
      return <Rocket {...iconProps} />;
    case "layers":
      return <Layers {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}

export default function WorkProcess() {
  const { workProcess } = websiteContent;
  // Initialize with the first step active matching the screenshot
  const [activeStep, setActiveStep] = useState<number>(0);

  if (!workProcess) return null;

  return (
    <section id="process" className="relative w-full bg-white py-10 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ─── Large Rounded Card Container (Matches Theme Palette) ─── */}
        <div className="relative w-full rounded-[28px] sm:rounded-[36px] md:rounded-[44px] bg-slate-light border border-border p-8 sm:p-12 md:p-16 lg:p-20 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
            
            {/* ─── Left Side: Headline & Live Counter ─── */}
            <div className="w-full lg:w-5/12 shrink-0 flex flex-col justify-between self-stretch py-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono mb-4 select-none">
                  <span className="font-bold text-slate-900 bg-white border border-border px-2 py-0.5 rounded text-[11px] shadow-2xs">
                    [03]
                  </span>
                  <span className="text-slate-400 font-normal">/</span>
                  <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
                    {workProcess.tag || "METHODOLOGY"}
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-bold tracking-tight text-slate-dark leading-[1.02] font-sans select-none">
                  WORK<br />PROCESS
                </h2>

                {workProcess.description && (
                  <p className="text-xs sm:text-sm md:text-base text-slate-mid mt-4 sm:mt-5 max-w-sm leading-relaxed">
                    {workProcess.description}
                  </p>
                )}
              </div>

              {/* Dynamic Step Counter */}
              <div className="mt-8 lg:mt-12 flex items-center gap-3 select-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border shadow-xs text-xs font-mono font-bold text-slate-dark">
                  <span className="text-primary font-bold">0{activeStep + 1}</span>
                  <span className="text-slate-dark/30">/</span>
                  <span className="text-slate-dark/50">0{workProcess.steps.length}</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeStep}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs font-semibold tracking-wider uppercase text-slate-dark/70 font-sans"
                  >
                    {workProcess.steps[activeStep].title}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* ─── Right Side: Minimalist Elevated Card Stack ─── */}
            <div className="w-full lg:w-7/12 flex flex-col gap-3 sm:gap-3.5">
              {workProcess.steps.map((step, index) => {
                const isActive = activeStep === index;

                if (isActive) {
                  return (
                    <motion.div
                      key={step.id || step.title}
                      layout
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full bg-white rounded-2xl sm:rounded-[24px] p-7 sm:p-9 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.08)] border border-border text-left select-none ring-1 ring-black/[0.02]"
                    >
                      {/* Iconic Badge Squircle */}
                      <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.22, delay: 0.04 }}
                        className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-light border border-primary/15 text-primary shadow-xs"
                      >
                        {getStepIcon(step.icon)}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-dark uppercase tracking-tight mb-2.5 font-sans">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-mid leading-relaxed max-w-md font-normal font-sans">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                }

                return (
                  <motion.button
                    key={step.id || step.title}
                    layout
                    whileHover={{ scale: 1.012 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setActiveStep(index)}
                    aria-expanded={isActive}
                    className="w-full bg-white rounded-xl sm:rounded-[18px] py-4 sm:py-5 px-6 shadow-xs border border-border hover:border-primary/30 hover:shadow-sm flex items-center justify-center text-center cursor-pointer transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-dark/75 tracking-wide uppercase group-hover:text-primary font-sans transition-colors">
                      {step.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
