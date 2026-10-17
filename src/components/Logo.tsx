import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  theme?: "slate" | "frameless" | "royal" | "light";
}

export default function Logo({
  className = "w-7 h-7",
  size,
  theme = "slate",
}: LogoProps) {
  // Theme palettes: strictly Dark Slate (#0F172A), Royal Blue (#0A66C2), White (#FFFFFF)
  if (theme === "frameless") {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Huzaifa Sys Logo"
      >
        {/* Left Vertical System Pillar (Dark Slate) */}
        <rect x="20" y="16" width="16" height="68" rx="5" fill="#0F172A" />

        {/* Right Vertical System Pillar (Dark Slate) */}
        <rect x="64" y="16" width="16" height="68" rx="5" fill="#0F172A" />

        {/* Central Systems Bridge */}
        <rect x="34" y="42" width="32" height="16" rx="3" fill="#0F172A" />

        {/* Central Royal Blue Processing Node */}
        <circle cx="50" cy="50" r="9.5" fill="#0A66C2" />
        <circle cx="50" cy="50" r="4.5" fill="#FFFFFF" />
        <circle cx="50" cy="50" r="2" fill="#0F172A" />

        {/* Subtle Architectural Accent Notches */}
        <rect x="25" y="24" width="6" height="12" rx="2" fill="#0A66C2" />
        <rect x="69" y="64" width="6" height="12" rx="2" fill="#0A66C2" />
      </svg>
    );
  }

  if (theme === "light") {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Huzaifa Sys Logo"
      >
        {/* Soft Light Container */}
        <rect width="100" height="100" rx="24" fill="#F8FAFC" />
        <rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="23"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="2"
        />

        {/* Pillars in Dark Slate */}
        <rect x="24" y="23" width="13" height="54" rx="4.5" fill="#0F172A" />
        <rect x="63" y="23" width="13" height="54" rx="4.5" fill="#0F172A" />
        <rect x="36" y="43" width="28" height="14" rx="2" fill="#0F172A" />

        {/* Core in Royal Blue */}
        <circle cx="50" cy="50" r="8.5" fill="#0A66C2" />
        <circle cx="50" cy="50" r="4" fill="#FFFFFF" />
        <circle cx="50" cy="50" r="1.8" fill="#0F172A" />
      </svg>
    );
  }

  // "slate" (Default - Dark Slate #0F172A container, matches website headings & dark theme)
  const isRoyal = theme === "royal";
  const bgColor = isRoyal ? "#0A66C2" : "#0F172A";
  const pillarColor = "#FFFFFF";
  const coreColor = isRoyal ? "#0F172A" : "#0A66C2";
  const coreAccent = isRoyal ? "#0A66C2" : "#FFFFFF";

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Huzaifa Sys Logo"
    >
      <defs>
        <linearGradient id="hzDarkBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        <linearGradient id="hzBorderSubtle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* ─── Squircle Base ─── */}
      <rect
        width="100"
        height="100"
        rx="24"
        fill={isRoyal ? bgColor : "url(#hzDarkBase)"}
      />

      {/* 1px Clean Inner Border */}
      <rect
        x="1"
        y="1"
        width="98"
        height="98"
        rx="23"
        fill="none"
        stroke="url(#hzBorderSubtle)"
        strokeWidth="1.5"
      />

      {/* ─── Architectural "H" Monogram ─── */}
      <g>
        {/* Left Pillar */}
        <rect
          x="23"
          y="23"
          width="13"
          height="54"
          rx="4.5"
          fill={pillarColor}
        />

        {/* Right Pillar */}
        <rect
          x="64"
          y="23"
          width="13"
          height="54"
          rx="4.5"
          fill={pillarColor}
        />

        {/* Crossbar */}
        <rect
          x="36"
          y="43"
          width="28"
          height="14"
          rx="2"
          fill={pillarColor}
        />

        {/* Core Processing Node */}
        <circle cx="50" cy="50" r="8.5" fill={coreColor} />
        <circle cx="50" cy="50" r="4.5" fill={coreAccent} />
        <circle cx="50" cy="50" r="1.8" fill={isRoyal ? "#FFFFFF" : "#0F172A"} />
      </g>
    </svg>
  );
}
