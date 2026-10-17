"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-3 sm:top-4 z-50 w-full px-4 sm:px-6 md:px-12 lg:px-20 pointer-events-none select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* ─── 1. Left Island: Logo & Name Pill ─── */}
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-border/80 shadow-xs hover:shadow-sm pl-2 pr-4 py-1.5 rounded-full transition-all duration-200 group"
        >
          <div className="w-7 h-7 flex items-center justify-center shrink-0 rounded-lg overflow-hidden transition-transform duration-200 group-hover:scale-105">
            <Logo theme="slate" className="w-full h-full" />
          </div>
          <span className="text-slate-dark font-bold text-sm tracking-tight leading-none">
            Huzaifa Sys
          </span>
        </Link>

        {/* ─── 2. Center Island: Navigation Pill ─── */}
        <nav className="hidden md:flex pointer-events-auto items-center bg-white/95 backdrop-blur-md border border-border/80 shadow-xs rounded-full p-1.5 gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-sm transition-all duration-200 rounded-full px-3.5 py-1.5 select-none ${
                  isActive
                    ? "bg-white text-slate-dark font-semibold shadow-xs border border-border/70"
                    : "text-slate-600 hover:text-slate-dark font-medium"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* ─── 3. Right Island: "Book a call" CTA Pill (Desktop) ─── */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact#schedule"
            className="pointer-events-auto flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-border/80 shadow-xs hover:shadow-sm pl-4 pr-1.5 py-1.5 rounded-full transition-all duration-200 group"
          >
            <span className="text-xs sm:text-sm font-semibold text-slate-dark group-hover:text-primary transition-colors">
              Book a call
            </span>
            <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center transition-transform group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </div>
          </Link>
        </div>

        {/* ─── Mobile Right Controls: Compact Call Button + Hamburger ─── */}
        <div className="md:hidden flex items-center gap-2 pointer-events-auto">
          <Link
            href="/contact#schedule"
            className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-border/80 shadow-xs pl-3 pr-1.5 py-1.5 rounded-full text-xs font-semibold text-slate-dark"
          >
            <span className="hidden xs:inline">Book a call</span>
            <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </div>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 bg-white/95 backdrop-blur-md border border-border/80 shadow-xs rounded-full w-9 h-9 flex flex-col items-center justify-center gap-1 hover:bg-slate-light transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-4 h-0.5 bg-slate-dark transition-all duration-200 ${
                mobileOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-slate-dark transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-slate-dark transition-all duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ─── Mobile Dropdown Menu Card ─── */}
      {mobileOpen && (
        <div className="pointer-events-auto max-w-xs sm:max-w-sm mx-auto mt-2 bg-white/95 backdrop-blur-md border border-border/80 shadow-xl rounded-2xl p-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm py-2 px-3 rounded-xl font-medium flex items-center justify-between ${
                  isActive
                    ? "bg-slate-light text-primary font-semibold"
                    : "text-slate-600 hover:text-slate-dark hover:bg-slate-light/50"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
