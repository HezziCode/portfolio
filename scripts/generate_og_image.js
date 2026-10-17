const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const svgContent = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark Slate Background -->
  <rect width="1200" height="630" fill="#090D16" />

  <!-- Radial Glowing Gradients -->
  <radialGradient id="blueGlow" cx="950" cy="180" r="600" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="#2563EB" stop-opacity="0.32" />
    <stop offset="50%" stop-color="#1D4ED8" stop-opacity="0.12" />
    <stop offset="100%" stop-color="#090D16" stop-opacity="0" />
  </radialGradient>
  <rect width="1200" height="630" fill="url(#blueGlow)" />

  <radialGradient id="indigoGlow" cx="200" cy="500" r="450" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.16" />
    <stop offset="100%" stop-color="#090D16" stop-opacity="0" />
  </radialGradient>
  <rect width="1200" height="630" fill="url(#indigoGlow)" />

  <!-- Subtle Architectural Grid Pattern -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" stroke-width="0.8" stroke-opacity="0.4" />
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- Card Border Inset -->
  <rect x="24" y="24" width="1152" height="582" rx="24" fill="none" stroke="#1E293B" stroke-width="1.5" stroke-opacity="0.8" />

  <!-- Brand Monogram Badge (Top Left) -->
  <g transform="translate(80, 72)">
    <rect width="64" height="64" rx="16" fill="#0F172A" stroke="#334155" stroke-width="1.5" />
    <!-- Monogram H -->
    <path d="M 22 20 L 22 44 M 22 32 L 42 32 M 42 20 L 42 44" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="42" cy="20" r="3.5" fill="#2563EB" />
  </g>

  <!-- Technical Category Pill -->
  <g transform="translate(160, 84)">
    <rect width="250" height="38" rx="8" fill="#1E293B" stroke="#334155" stroke-width="1" fill-opacity="0.8" />
    <text x="16" y="24" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5">
      [01] / FULL STACK AI
    </text>
  </g>

  <!-- Live Status Badge (Top Right) -->
  <g transform="translate(840, 84)">
    <rect width="280" height="38" rx="19" fill="#0F172A" stroke="#1E293B" stroke-width="1" />
    <circle cx="22" cy="19" r="5" fill="#3B82F6" />
    <text x="36" y="24" fill="#E2E8F0" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600">
      Open for Client Projects
    </text>
  </g>

  <!-- Main Person Name -->
  <text x="80" y="240" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="800" letter-spacing="-1.5">
    Huzaifa Sys
  </text>

  <!-- Title / Tagline -->
  <text x="80" y="296" fill="#60A5FA" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" letter-spacing="-0.5">
    Lead Full Stack AI Engineer
  </text>

  <!-- Description paragraph -->
  <text x="80" y="360" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" width="900">
    Architecting Autonomous AI Agent Systems, Enterprise Next.js Platforms
  </text>
  <text x="80" y="394" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400">
    and Resilient Cloud DevOps Infrastructure.
  </text>

  <!-- Tech Stack Badges (Bottom Left) -->
  <g transform="translate(80, 480)">
    <!-- Badge 1 -->
    <rect x="0" y="0" width="168" height="42" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1" />
    <text x="20" y="26" fill="#E2E8F0" font-family="monospace" font-size="14" font-weight="600">Next.js 15 App</text>

    <!-- Badge 2 -->
    <rect x="180" y="0" width="168" height="42" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1" />
    <text x="200" y="26" fill="#E2E8F0" font-family="monospace" font-size="14" font-weight="600">AI Agents &amp; RAG</text>

    <!-- Badge 3 -->
    <rect x="360" y="0" width="150" height="42" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1" />
    <text x="380" y="26" fill="#E2E8F0" font-family="monospace" font-size="14" font-weight="600">LangGraph</text>

    <!-- Badge 4 -->
    <rect x="522" y="0" width="150" height="42" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1" />
    <text x="542" y="26" fill="#E2E8F0" font-family="monospace" font-size="14" font-weight="600">TypeScript</text>

    <!-- Badge 5 -->
    <rect x="684" y="0" width="170" height="42" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1" />
    <text x="704" y="26" fill="#E2E8F0" font-family="monospace" font-size="14" font-weight="600">Cloud &amp; DevOps</text>
  </g>

  <!-- URL Brand Mark (Bottom Right) -->
  <text x="1000" y="508" fill="#64748B" font-family="monospace" font-size="16" font-weight="600" text-anchor="end">
    huzaifasys.com
  </text>
</svg>
`;

async function main() {
  const publicDir = path.resolve(__dirname, "../public");
  const svgPath = path.join(publicDir, "og-image.svg");
  const pngPath = path.join(publicDir, "og-image.png");

  fs.writeFileSync(svgPath, svgContent.trim());
  console.log("Written og-image.svg");

  await sharp(Buffer.from(svgContent))
    .png({ quality: 95 })
    .toFile(pngPath);
  console.log("Successfully generated og-image.png (1200x630)!");
}

main().catch(console.error);
