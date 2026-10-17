"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { websiteContent } from "@/content/websiteContent";

export default function FAQ() {
  const { faq } = websiteContent.aboutPage;

  // Categories list (fallback to single category if not present)
  const categories = faq.categories || [
    {
      id: "general",
      name: "General Information",
      items: faq.items,
    },
  ];

  const [activeCatIndex, setActiveCatIndex] = useState<number>(0);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);

  const currentCategory = categories[activeCatIndex] || categories[0];

  const handleCategorySelect = (idx: number) => {
    setActiveCatIndex(idx);
    setOpenItemIndex(0); // Open first item in selected category matching reference
  };

  const toggleItem = (idx: number) => {
    setOpenItemIndex(openItemIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-8 sm:py-12 mb-24">
      {/* ─── Top Left Sketch Doodle: Speech Bubbles ─── */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 select-none pointer-events-none hidden md:block opacity-60">
        <svg
          className="w-14 h-14 text-slate-700 stroke-current fill-none stroke-[1.5]"
          viewBox="0 0 64 64"
        >
          {/* Main Bubble */}
          <path
            d="M16 22c0-7 6-12 14-12s14 5 14 12c0 4.5-2.5 8.5-6.5 10.5L38 42l-7-3.5c-1-.3-2-.5-3-.5-8 0-14-5-14-12z"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Secondary smaller bubble */}
          <path
            d="M38 34c3 0 7 2.5 7 6 0 2-1 3.5-3 4.5L43 49l-4-2c-.5-.2-1-.3-1.5-.3-4 0-7-3-7-6.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Typing dots */}
          <circle cx="24" cy="22" r="1.5" fill="currentColor" />
          <circle cx="30" cy="22" r="1.5" fill="currentColor" />
          <circle cx="36" cy="22" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* ─── Top Right Sketch Doodle: Info / Question Shield ─── */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 select-none pointer-events-none hidden md:block opacity-60">
        <svg
          className="w-16 h-16 text-slate-700 stroke-current fill-none stroke-[1.5]"
          viewBox="0 0 64 64"
        >
          {/* Organic badge shield */}
          <path
            d="M44 14c-5-4-12-4-17 0-4 4-4 11 0 16l8.5 8.5 8.5-8.5c4-5 4-12 0-16z"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Circular question bubble */}
          <path
            d="M20 32a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"
            strokeLinejoin="round"
          />
          {/* Question mark & info text */}
          <text
            x="17"
            y="43"
            fontSize="12"
            fill="currentColor"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            ?
          </text>
          <text
            x="41.5"
            y="28"
            fontSize="13"
            fill="currentColor"
            fontFamily="sans-serif"
            fontWeight="bold"
            fontStyle="italic"
          >
            i
          </text>
        </svg>
      </div>

      {/* ─── Centered Header matching Reference with Entrance Animation ─── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl mx-auto"
      >
        {/* Technical Engineering Index (Style 2) */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono mb-4 select-none">
          <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/90 px-2 py-0.5 rounded text-[11px]">
            [FAQ]
          </span>
          <span className="text-slate-400 font-normal">/</span>
          <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
            {faq.tag || "Common Questions & Inquiries"}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-dark tracking-tight leading-tight mb-3">
          {faq.title}
        </h2>

        <p className="text-xs sm:text-sm text-slate-mid leading-relaxed">
          {faq.description}
        </p>
      </motion.div>

      {/* ─── Main Two-Column Layout (Categories Left, Accordion Right) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 sm:mt-12 items-start">
        {/* LEFT COLUMN: Categories */}
        <div className="lg:col-span-4 xl:col-span-4">
          <div className="sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 select-none">
              Categories
            </h3>

            {/* Mobile Categories (Horizontal Scrollable Tabs) */}
            <div className="flex lg:hidden overflow-x-auto pb-3 gap-2 no-scrollbar">
              {categories.map((cat, idx) => {
                const isActive = activeCatIndex === idx;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategorySelect(idx)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all select-none cursor-pointer ${
                      isActive
                        ? "bg-primary text-white shadow-2xs"
                        : "bg-slate-light text-slate-mid hover:text-slate-dark"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Desktop Categories (Vertical List with Smooth Sliding Blue Indicator) */}
            <div className="hidden lg:flex flex-col space-y-3">
              {categories.map((cat, idx) => {
                const isActive = activeCatIndex === idx;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategorySelect(idx)}
                    className={`text-left text-sm transition-colors select-none cursor-pointer relative py-1 ${
                      isActive
                        ? "font-semibold text-slate-dark pl-3.5"
                        : "font-normal text-slate-mid hover:text-slate-dark pl-3.5"
                    }`}
                  >
                    {/* Smooth layoutId indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeFaqCategoryIndicator"
                        className="absolute left-0 top-1 bottom-1 w-[3px] bg-primary rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Accordion Questions & Bottom Help Box */}
        <div className="lg:col-span-8 xl:col-span-8 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="space-y-3"
            >
              {currentCategory.items.map((item, index) => {
                const isOpen = openItemIndex === index;

                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-200 ${
                      isOpen
                        ? "border-2 border-primary bg-white shadow-xs"
                        : "bg-slate-light/70 hover:bg-slate-light/90 border border-transparent"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="w-full p-5 sm:p-6 flex items-start justify-between gap-4 text-left cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-sm sm:text-base leading-snug transition-colors ${
                          isOpen
                            ? "font-bold text-slate-dark"
                            : "font-medium text-slate-mid hover:text-slate-dark"
                        }`}
                      >
                        {item.question}
                      </span>

                      {/* Toggle Icon: Thin clean Minus (-) or Plus (+) */}
                      <span
                        className="shrink-0 w-6 h-6 flex items-center justify-center text-slate-dark select-none"
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <span className="text-xl font-light leading-none">−</span>
                        ) : (
                          <span className="text-xl font-light leading-none">+</span>
                        )}
                      </span>
                    </button>

                    {/* Smooth Collapsible Answer with Framer Motion height animation */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.28,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                            <p className="text-xs sm:text-sm text-slate-mid leading-relaxed pr-6 sm:pr-8">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* ─── Bottom Box matching Reference: "Still have a question?" ─── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 rounded-2xl bg-slate-light/70 border border-border/50 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            {/* Left: Info icon + Copy */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-slate-dark text-white flex items-center justify-center shrink-0">
                <span className="font-sans italic font-bold text-[11px] leading-none select-none">
                  i
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-dark leading-snug">
                  Still have a question?
                </h4>
                <p className="text-xs text-slate-mid mt-0.5">
                  If you didn&apos;t find your answer, feel free to reach out.
                </p>
              </div>
            </div>

            {/* Right: Notebook Sketch + Contact Us Button */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              {/* Sketch notebook doodle */}
              <div className="opacity-70 hidden sm:block select-none">
                <svg
                  className="w-7 h-7 text-slate-700 stroke-current fill-none stroke-[1.75]"
                  viewBox="0 0 32 32"
                >
                  <rect
                    x="7"
                    y="4"
                    width="16"
                    height="23"
                    rx="3"
                    strokeLinejoin="round"
                  />
                  <line x1="11" y1="10" x2="19" y2="10" strokeLinecap="round" />
                  <line x1="11" y1="15" x2="17" y2="15" strokeLinecap="round" />
                  <line x1="4" y1="23" x2="5.5" y2="18" strokeLinecap="round" />
                </svg>
              </div>

              <Link
                href="/contact"
                className="px-4 py-2 rounded-full border border-border bg-white hover:bg-slate-dark hover:text-white text-xs font-semibold text-slate-dark transition-all duration-200 shadow-2xs"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
