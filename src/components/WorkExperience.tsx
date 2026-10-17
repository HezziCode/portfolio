"use client";

import { websiteContent } from "@/content/websiteContent";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WorkExperience() {
  const { experience } = websiteContent.aboutPage;

  return (
    <section className="relative w-full py-12 sm:py-16 mb-16 sm:mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* ─── Left Column (Sticky Sidebar tracks through all jobs) ─── */}
        <div className="lg:col-span-4 h-full">
          <div className="sticky top-24 sm:top-28 space-y-6">
            
            {/* Technical Index Pill */}
            <div className="flex items-center gap-2 text-xs font-mono select-none">
              <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/90 px-2 py-0.5 rounded text-[11px]">
                [CAREER]
              </span>
              <span className="text-slate-400 font-normal">/</span>
              <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
                Work History &amp; Roles
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Working<br className="hidden lg:block" />{" "}
              <span className="text-primary">Experience</span>.
            </h2>

            {/* Narrative Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm">
              {experience.description}
            </p>

            {/* Availability / Quick Contact Card */}
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for New Projects</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Need help building a web app, adding AI features, or hiring an engineer? I&apos;m open to freelance work and full-time roles.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors group"
              >
                <span>Let&apos;s talk about your project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>
        </div>

        {/* ─── Right Column (Structured Experience Cards) ─── */}
        <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-5">
          {experience.jobs.map((job, index) => {
            const isCurrent = job.period.toLowerCase().includes("present");

            return (
              <div
                key={index}
                className={`p-6 sm:p-7 rounded-2xl bg-white border transition-all duration-200 group ${
                  isCurrent
                    ? "border-blue-200/90 shadow-xs hover:border-primary/50 hover:shadow-md"
                    : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                {/* Header: Title, Company & Period Badge */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                      <span>{job.company}</span>
                      {"location" in job && job.location && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-400 font-normal">{job.location}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="shrink-0 self-start sm:self-auto">
                    {isCurrent ? (
                      <span
                        className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-primary transition-all duration-200 hover:bg-blue-100/80 hover:border-primary/40 cursor-default select-none"
                        title={"periodHover" in job && job.periodHover ? (job.periodHover as string) : job.period}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                        {"periodHover" in job && job.periodHover ? (
                          <>
                            <span className="group-hover:hidden transition-all duration-200">
                              {job.period}
                            </span>
                            <span className="hidden group-hover:inline-block transition-all duration-200">
                              {job.periodHover as string}
                            </span>
                          </>
                        ) : (
                          <span>{job.period}</span>
                        )}
                      </span>
                    ) : (
                      <span
                        className="relative inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-mono font-medium text-slate-600 transition-all duration-200 hover:bg-slate-200/80 cursor-default select-none"
                        title={"periodHover" in job && job.periodHover ? (job.periodHover as string) : job.period}
                      >
                        {"periodHover" in job && job.periodHover ? (
                          <>
                            <span className="group-hover:hidden transition-all duration-200">
                              {job.period}
                            </span>
                            <span className="hidden group-hover:inline-block transition-all duration-200">
                              {job.periodHover as string}
                            </span>
                          </>
                        ) : (
                          <span>{job.period}</span>
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* Job Description */}
                {"description" in job && job.description && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {job.description}
                  </p>
                )}

                {/* Technologies Deployed Pills */}
                {"technologies" in job && Array.isArray(job.technologies) && job.technologies.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mr-1 select-none">
                      {"skillsLabel" in job && job.skillsLabel ? (job.skillsLabel as string) : "Stack:"}
                    </span>
                    {job.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


