const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const doctorImgBase64 = fs.existsSync('public/doctor-fatima.jpg')
  ? fs.readFileSync('public/doctor-fatima.jpg').toString('base64')
  : '';

function generateHTML(config) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
  
  html, body {
    width: 1280px;
    height: 960px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #F1F5F9;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
    color: #0F172A;
  }

  .canvas-wrapper {
    position: relative;
    width: 1280px;
    height: 960px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    background: #F1F5F9;
  }

  /* ── Technical Dot Grid Texture Across Entire Canvas ── */
  .grid-bg {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(148, 163, 184, 0.45) 1.5px, transparent 1.5px);
    background-size: 26px 26px;
    z-index: 1;
  }

  /* ── 3D Liquid Metallic Light Sweep on Left Edge (LinkedIn Blue & Cyan Glow) ── */
  .side-glow-container {
    position: absolute;
    left: -80px;
    top: 0;
    width: 620px;
    height: 960px;
    pointer-events: none;
    z-index: 2;
  }

  /* Right Ambient LinkedIn Blue Sheen */
  .right-ambient {
    position: absolute;
    right: -100px;
    top: 100px;
    width: 500px;
    height: 750px;
    background: radial-gradient(ellipse at center, rgba(10, 102, 194, 0.16) 0%, rgba(0, 65, 130, 0.06) 45%, transparent 70%);
    pointer-events: none;
    z-index: 2;
  }

  /* ── 1. Clean Light-Mode Header (NO Black Bar) ── */
  .clean-header {
    position: relative;
    z-index: 10;
    height: 100px;
    padding: 36px 56px 0 56px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .header-left {
    max-width: 720px;
  }

  .project-tag {
    font-family: 'SF Mono', Monaco, Menlo, 'Courier New', monospace;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.16em;
    color: #475569;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .project-tag::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0A66C2;
  }

  .project-desc {
    font-size: 14.5px;
    color: #64748B;
    font-weight: 600;
    margin-top: 6px;
    line-height: 1.4;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .counter-badge {
    font-family: 'SF Mono', Monaco, Menlo, 'Courier New', monospace;
    font-size: 14px;
    font-weight: 800;
    color: #64748B;
    letter-spacing: 0.12em;
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    padding: 6px 14px;
    border-radius: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.03);
  }

  /* ── 2. Interactive Architecture Diagram Area (Middle) ── */
  .diagram-area {
    position: relative;
    z-index: 5;
    flex: 1;
    width: 1280px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* SVG Connecting Circuit Wire Layer */
  .circuit-wires {
    position: absolute;
    inset: 0;
    width: 1280px;
    height: 100%;
    pointer-events: none;
    z-index: 3;
  }

  /* ── Side Node Cards (Minimal Text & Punchy Labels) ── */
  .node-card {
    position: absolute;
    width: 232px;
    height: 78px;
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    border-radius: 18px;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06), 0 2px 4px rgba(0, 0, 0, 0.02);
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 14px;
    z-index: 5;
  }

  .node-icon-box {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: #E8F3FF;
    border: 1px solid #CCE4FF;
    color: #0A66C2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .node-text {
    display: flex;
    flex-direction: column;
  }

  .node-label {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #0F172A;
    text-transform: uppercase;
  }

  .node-subtext {
    font-size: 10px;
    font-weight: 700;
    color: #64748B;
    margin-top: 2px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  /* Left Nodes */
  .node-left-1 { left: 56px; top: 85px; }
  .node-left-2 { left: 56px; top: 235px; }
  .node-left-3 { left: 56px; top: 385px; }

  /* Right Nodes */
  .node-right-1 { right: 56px; top: 85px; }
  .node-right-2 { right: 56px; top: 235px; }
  .node-right-3 { right: 56px; top: 385px; }

  /* Pin Dots */
  .pin-dot-right {
    position: absolute;
    right: -4px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0A66C2;
    border: 2px solid #FFFFFF;
    box-shadow: 0 0 8px rgba(10, 102, 194, 0.6);
  }

  .pin-dot-left {
    position: absolute;
    left: -4px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0A66C2;
    border: 2px solid #FFFFFF;
    box-shadow: 0 0 8px rgba(10, 102, 194, 0.6);
  }

  /* Floating Frosted Glass Stage Pill */
  .floating-wire-pill {
    position: absolute;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid #CBD5E1;
    color: #0F172A;
    padding: 6px 14px;
    border-radius: 14px;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    gap: 6px;
    z-index: 7;
    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
    left: 316px;
    top: 256px;
  }

  .floating-wire-pill svg {
    color: #0A66C2;
  }

  /* ── Center Stage Box (Core Architecture Card) ── */
  .center-stage-card {
    width: 500px;
    height: 420px;
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    border-radius: 24px;
    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(0, 0, 0, 0.03);
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 28px;
    position: relative;
  }

  .stage-badge {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    background: #E8F3FF;
    color: #0A66C2;
    border: 1px solid #CCE4FF;
    padding: 4px 18px;
    border-radius: 20px;
    text-transform: uppercase;
  }

  .stage-title {
    font-size: 21px;
    font-weight: 900;
    letter-spacing: -0.01em;
    color: #0F172A;
    text-align: center;
    margin-top: 10px;
    line-height: 1.22;
    text-transform: uppercase;
  }

  .stage-accent-bar {
    width: 52px;
    height: 3.5px;
    background: #0A66C2;
    border-radius: 3px;
    margin-top: 8px;
  }

  /* Center Visual Tech Container */
  .center-tech-container {
    margin-top: 14px;
    width: 100%;
    flex: 1;
    background: #F8FAFC;
    border: 1px dashed #CBD5E1;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── 3. Clean Light-Mode Bottom Footer (NO Black Bar) ── */
  .clean-footer {
    position: relative;
    z-index: 10;
    height: 110px;
    padding: 0 56px 36px 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .footer-headline {
    font-size: 17px;
    font-weight: 800;
    color: #0F172A;
    letter-spacing: -0.01em;
  }

  .tag-pills {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .tag-pill {
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    color: #334155;
    padding: 5px 14px;
    border-radius: 12px;
    font-size: 11.5px;
    font-weight: 700;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
  }

  .footer-right {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-shrink: 0;
  }

  .meta-col {
    display: flex;
    flex-direction: column;
  }

  .meta-label {
    font-family: 'SF Mono', Monaco, Menlo, monospace;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #64748B;
    text-transform: uppercase;
  }

  .meta-value {
    font-size: 13.5px;
    font-weight: 800;
    color: #0F172A;
    margin-top: 3px;
  }

  .meta-value-blue {
    color: #0A66C2;
  }
</style>
</head>
<body>

<div class="canvas-wrapper">

  <!-- Dot Grid Texture across entire canvas -->
  <div class="grid-bg"></div>

  <!-- ── 3D Liquid Metallic Light Sweep on Left Side (High Gloss & Neon Glow) ── -->
  <svg class="side-glow-container" viewBox="0 0 620 960" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="neonBlur" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="28" result="blur1" />
        <feGaussianBlur stdDeviation="12" result="blur2" />
        <feMerge>
          <feMergeNode in="blur1" />
          <feMergeNode in="blur2" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="18" />
      </filter>

      <!-- LinkedIn Blue Neon Sweep -->
      <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="85%">
        <stop offset="0%" stop-color="#00A0DC" stop-opacity="0.95" />
        <stop offset="35%" stop-color="#0A66C2" stop-opacity="0.85" />
        <stop offset="70%" stop-color="#004182" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#002D5C" stop-opacity="0.0" />
      </linearGradient>

      <!-- Chrome Highlight Gradient -->
      <linearGradient id="chromeHighlight" x1="15%" y1="0%" x2="85%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95" />
        <stop offset="40%" stop-color="#E8F3FF" stop-opacity="0.85" />
        <stop offset="75%" stop-color="#00A0DC" stop-opacity="0.45" />
        <stop offset="100%" stop-color="#0A66C2" stop-opacity="0.0" />
      </linearGradient>

      <!-- Radial Ambient LinkedIn Blue Wash -->
      <radialGradient id="ambientWash" cx="15%" cy="50%" r="65%">
        <stop offset="0%" stop-color="#00A0DC" stop-opacity="0.55" />
        <stop offset="45%" stop-color="#0A66C2" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#004182" stop-opacity="0.0" />
      </radialGradient>
    </defs>

    <path d="M -80 0 C 240 160, 360 420, 260 700 C 180 880, 50 960, -80 960 Z" fill="url(#ambientWash)" filter="url(#neonBlur)" />
    <path d="M -40 20 C 180 200, 320 420, 240 680 C 180 840, 50 920, -40 960 Z" fill="url(#neonGradient)" filter="url(#softGlow)" />
    <path d="M -60 70 C 150 240, 250 430, 190 670 C 140 810, 50 890, -20 940 C 30 880, 120 790, 160 660 C 210 440, 110 230, -30 110 Z" fill="url(#chromeHighlight)" />
    <path d="M -30 110 C 140 260, 210 440, 165 660 C 130 780, 60 860, -10 900" stroke="#FFFFFF" stroke-width="4.5" stroke-opacity="0.9" fill="none" filter="url(#softGlow)" />
  </svg>

  <!-- Right Ambient LinkedIn Blue Sheen -->
  <div class="right-ambient"></div>

  <!-- ── 1. Clean Top Header (Light Mode, Seamless) ── -->
  <div class="clean-header">
    <div class="header-left">
      <div class="project-tag">
        <span>${config.insideTag}</span>
      </div>
      <p class="project-desc">
        ${config.headerDesc}
      </p>
    </div>

    <div class="header-right">
      <div class="counter-badge">${config.counter}</div>
    </div>
  </div>

  <!-- ── 2. Interactive Architecture Diagram Area ── -->
  <div class="diagram-area">

    <!-- Connecting Circuit Wires -->
    <svg class="circuit-wires" viewBox="0 0 1280 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Left Wire 1 -->
      <path d="M 288 124 L 350 124 Q 365 124 365 142 L 365 142 Q 365 160 380 160 L 390 160" stroke="#94A3B8" stroke-width="1.75" />
      <circle cx="390" cy="160" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />

      <!-- Left Wire 2 -->
      <path d="M 288 274 L 390 274" stroke="#94A3B8" stroke-width="1.75" />
      <circle cx="390" cy="274" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />

      <!-- Left Wire 3 -->
      <path d="M 288 424 L 350 424 Q 365 424 365 406 L 365 378 Q 365 360 380 360 L 390 360" stroke="#94A3B8" stroke-width="1.75" />
      <circle cx="390" cy="360" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />

      <!-- Right Wire 1 -->
      <circle cx="890" cy="160" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />
      <path d="M 890 160 L 900 160 Q 915 160 915 142 L 915 142 Q 915 124 930 124 L 992 124" stroke="#94A3B8" stroke-width="1.75" />

      <!-- Right Wire 2 -->
      <circle cx="890" cy="274" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />
      <path d="M 890 274 L 992 274" stroke="#94A3B8" stroke-width="1.75" />

      <!-- Right Wire 3 -->
      <circle cx="890" cy="360" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />
      <path d="M 890 360 L 900 360 Q 915 360 915 378 L 915 406 Q 915 424 930 424 L 992 424" stroke="#94A3B8" stroke-width="1.75" />
    </svg>

    <!-- Floating Frosted Glass Stage Pill on Left Center Wire -->
    <div class="floating-wire-pill">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
      <span>${config.stagePill}</span>
    </div>

    <!-- ── Left Nodes (3 stacked cards) ── -->
    <div class="node-card node-left-1">
      <div class="node-icon-box">${config.leftNodes[0].icon}</div>
      <div class="node-text">
        <span class="node-label">${config.leftNodes[0].label}</span>
        <span class="node-subtext">${config.leftNodes[0].subtext}</span>
      </div>
      <span class="pin-dot-right"></span>
    </div>

    <div class="node-card node-left-2">
      <div class="node-icon-box">${config.leftNodes[1].icon}</div>
      <div class="node-text">
        <span class="node-label">${config.leftNodes[1].label}</span>
        <span class="node-subtext">${config.leftNodes[1].subtext}</span>
      </div>
      <span class="pin-dot-right"></span>
    </div>

    <div class="node-card node-left-3">
      <div class="node-icon-box">${config.leftNodes[2].icon}</div>
      <div class="node-text">
        <span class="node-label">${config.leftNodes[2].label}</span>
        <span class="node-subtext">${config.leftNodes[2].subtext}</span>
      </div>
      <span class="pin-dot-right"></span>
    </div>

    <!-- ── Center Stage Box ── -->
    <div class="center-stage-card">
      <span class="stage-badge">${config.stageBadge}</span>
      <h3 class="stage-title">${config.centerTitle}</h3>
      <div class="stage-accent-bar"></div>
      <div class="center-tech-container">
        ${config.centerVisualHTML}
      </div>
    </div>

    <!-- ── Right Nodes (3 stacked cards) ── -->
    <div class="node-card node-right-1">
      <span class="pin-dot-left"></span>
      <div class="node-icon-box">${config.rightNodes[0].icon}</div>
      <div class="node-text">
        <span class="node-label">${config.rightNodes[0].label}</span>
        <span class="node-subtext">${config.rightNodes[0].subtext}</span>
      </div>
    </div>

    <div class="node-card node-right-2">
      <span class="pin-dot-left"></span>
      <div class="node-icon-box">${config.rightNodes[1].icon}</div>
      <div class="node-text">
        <span class="node-label">${config.rightNodes[1].label}</span>
        <span class="node-subtext">${config.rightNodes[1].subtext}</span>
      </div>
    </div>

    <div class="node-card node-right-3">
      <span class="pin-dot-left"></span>
      <div class="node-icon-box">${config.rightNodes[2].icon}</div>
      <div class="node-text">
        <span class="node-label">${config.rightNodes[2].label}</span>
        <span class="node-subtext">${config.rightNodes[2].subtext}</span>
      </div>
    </div>
  </div>

  <!-- ── 3. Clean Light-Mode Bottom Footer (NO Black Bar) ── -->
  <div class="clean-footer">
    <div class="footer-left">
      <div class="footer-headline">${config.bottomTitle}</div>
      <div class="tag-pills">
        ${config.tagPills.map(p => `<span class="tag-pill">${p}</span>`).join('')}
      </div>
    </div>
    <div class="footer-right">
      <div class="meta-col">
        <span class="meta-label">CLIENT</span>
        <span class="meta-value">${config.client}</span>
      </div>
      <div class="meta-col">
        <span class="meta-label">SYSTEM</span>
        <span class="meta-value meta-value-blue">${config.systemMetric}</span>
      </div>
    </div>
  </div>

</div>

</body>
</html>`;
}

// ── PROJECT DEFINITIONS ──
const projects = [
  // 1. Al-Rafai Clinic
  {
    fileName: 'public/projects/project-al-rafai.png',
    htmlName: 'public/projects/temp-al-rafai.html',
    insideTag: 'INSIDE AL-RAFAI CLINIC',
    headerDesc: 'How we establish 24/7 AI voice and chat triage for medical appointments with zero double-booking.',
    counter: '// 01 - 04',
    stagePill: 'Stage 01',
    stageBadge: 'STAGE 01',
    centerTitle: 'BUILDING 24/7 PATIENT<br>TRIAGE & BOOKING MAP',
    leftNodes: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',
        label: 'VOICE & CHAT',
        subtext: 'TRIAGE AGENT'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>',
        label: 'REAL-TIME',
        subtext: 'DOCTOR SLOTS'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
        label: 'PATIENT RECORD',
        subtext: 'INTAKE & SYNC'
      }
    ],
    rightNodes: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
        label: 'SLOT CONFLICT',
        subtext: 'LOCKING SYSTEM'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
        label: 'INSTANT DISPATCH',
        subtext: 'SMS & EMAIL CONFIRM'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
        label: 'CLINIC ADMIN',
        subtext: 'LIVE DASHBOARD'
      }
    ],
    centerVisualHTML: `
      <div style="position:absolute; width:85px; height:85px; border-radius:50%; border:1px solid #CCE4FF;"></div>
      <div style="position:absolute; width:160px; height:160px; border-radius:50%; border:1px dashed #CBD5E1;"></div>
      <div style="position:absolute; width:235px; height:235px; border-radius:50%; border:1px solid #CBD5E1;"></div>
      <div style="position:absolute; width:310px; height:310px; border-radius:50%; border:1px dashed #CBD5E1; opacity:0.5;"></div>
      <div style="position:absolute; width:240px; height:240px; border-radius:50%; background:conic-gradient(from 180deg at 50% 50%, rgba(10,102,194,0.22) 0deg, rgba(0,160,220,0.08) 60deg, transparent 90deg);"></div>
      <div style="position:relative; z-index:5; display:flex; align-items:center; gap:12px; background:#FFFFFF; border:1px solid #CBD5E1; padding:8px 16px; border-radius:40px; box-shadow:0 6px 20px rgba(15,23,42,0.1);">
        <div style="width:42px; height:42px; border-radius:50%; border:2px solid #0A66C2; overflow:hidden; flex-shrink:0;">
          <img src="data:image/jpeg;base64,${doctorImgBase64}" alt="Dr. Fatima" style="width:100%; height:100%; object-fit:cover;" />
        </div>
        <div>
          <h4 style="font-size:13px; font-weight:800; color:#0F172A; margin:0;">Dr. Fatima, MBBS</h4>
          <p style="font-size:10.5px; color:#64748B; font-weight:600; margin:0;">General Physician & Consultant</p>
        </div>
      </div>
      <div style="position:absolute; top:10px; left:14px; z-index:6; display:flex; align-items:center; gap:5px; background:#FFFFFF; border:1px solid #CCE4FF; padding:4px 10px; border-radius:12px; font-size:10px; font-weight:700; color:#0A66C2; box-shadow:0 3px 8px rgba(0,0,0,0.06);">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
        <span>Voice NLP Triage</span>
      </div>
      <div style="position:absolute; top:10px; right:14px; z-index:6; display:flex; align-items:center; gap:5px; background:#FFFFFF; border:1px solid #E2E8F0; padding:4px 10px; border-radius:12px; font-size:10px; font-weight:700; color:#059669; box-shadow:0 3px 8px rgba(0,0,0,0.06);">
        <span style="width:6px; height:6px; border-radius:50%; background:#10B981; display:inline-block;"></span>
        <span>Next: 2:00 PM Today</span>
      </div>
      <div style="position:absolute; bottom:10px; left:16px; z-index:6; display:flex; align-items:center; gap:5px; background:#FFFFFF; border:1px solid #E2E8F0; padding:4px 10px; border-radius:12px; font-size:10px; font-weight:700; color:#D97706; box-shadow:0 3px 8px rgba(0,0,0,0.06);">
        <span>★ 4.9/5 Rating</span>
      </div>
      <div style="position:absolute; bottom:10px; right:16px; z-index:6; display:flex; align-items:center; gap:5px; background:#FFFFFF; border:1px solid #E2E8F0; padding:4px 10px; border-radius:12px; font-size:10px; font-weight:700; color:#1E293B; box-shadow:0 3px 8px rgba(0,0,0,0.06);">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>North Karachi Clinic</span>
      </div>
    `,
    bottomTitle: 'Building 24/7 AI Voice & Chat Booking for Clinic Care',
    tagPills: ['24/7 Voice AI Agent', 'Real-Time Doctor Calendar', 'Patient Triage NLP', 'Next.js 15 & PostgreSQL'],
    client: 'Al-Rafai Clinic',
    systemMetric: '< 60s Booking'
  },

  // 2. Autonomous AI Agent Orchestrator
  {
    fileName: 'public/projects/project-orchestrator.png',
    htmlName: 'public/projects/temp-orchestrator.html',
    insideTag: 'INSIDE AI AGENT ORCHESTRATOR',
    headerDesc: 'How we coordinate distributed autonomous agent swarms to execute research, code generation, and complex workflows.',
    counter: '// 02 - 04',
    stagePill: 'Stage 02',
    stageBadge: 'STAGE 02',
    centerTitle: 'DISTRIBUTED MULTI-AGENT<br>ROUTING & REASONING GRAPH',
    leftNodes: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
        label: 'RESEARCH AGENT',
        subtext: 'DEEP DATA RETRIEVAL'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M10.5 10.5 6.5 17.5M13.5 13.5l5-7"/></svg>',
        label: 'REASONING GRAPH',
        subtext: 'LANGGRAPH RUNTIME'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
        label: 'CODE GENERATOR',
        subtext: 'SYNTAX VERIFICATION'
      }
    ],
    rightNodes: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
        label: 'VECTOR MEMORY',
        subtext: 'PINECONE & PGVECTOR'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
        label: 'SSE TOKEN STREAM',
        subtext: 'REAL-TIME FRONTEND'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
        label: 'EVALUATION LOOP',
        subtext: 'HALLUCINATION GUARD'
      }
    ],
    centerVisualHTML: `
      <svg width="340" height="220" viewBox="0 0 340 220" fill="none" style="position:relative; z-index:2;">
        <line x1="170" y1="110" x2="60" y2="50" stroke="#00A0DC" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.8" />
        <line x1="170" y1="110" x2="280" y2="50" stroke="#00A0DC" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.8" />
        <line x1="170" y1="110" x2="60" y2="170" stroke="#0A66C2" stroke-width="1.5" opacity="0.7" />
        <line x1="170" y1="110" x2="280" y2="170" stroke="#0A66C2" stroke-width="1.5" opacity="0.7" />
        <line x1="60" y1="50" x2="280" y2="50" stroke="#CBD5E1" stroke-width="1" />

        <g transform="translate(60, 50)">
          <circle cx="0" cy="0" r="18" fill="#E8F3FF" stroke="#00A0DC" stroke-width="2" />
          <circle cx="0" cy="0" r="6" fill="#0A66C2" />
          <text x="0" y="28" font-size="9" font-family="-apple-system, sans-serif" font-weight="700" text-anchor="middle" fill="#1E293B">PLANNER</text>
        </g>
        <g transform="translate(280, 50)">
          <circle cx="0" cy="0" r="18" fill="#E8F3FF" stroke="#00A0DC" stroke-width="2" />
          <circle cx="0" cy="0" r="6" fill="#00A0DC" />
          <text x="0" y="28" font-size="9" font-family="-apple-system, sans-serif" font-weight="700" text-anchor="middle" fill="#1E293B">CODER</text>
        </g>
        <g transform="translate(60, 170)">
          <circle cx="0" cy="0" r="18" fill="#F0FDF4" stroke="#10B981" stroke-width="2" />
          <circle cx="0" cy="0" r="6" fill="#059669" />
          <text x="0" y="-24" font-size="9" font-family="-apple-system, sans-serif" font-weight="700" text-anchor="middle" fill="#1E293B">RETRIEVER</text>
        </g>
        <g transform="translate(280, 170)">
          <circle cx="0" cy="0" r="18" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" />
          <circle cx="0" cy="0" r="6" fill="#D97706" />
          <text x="0" y="-24" font-size="9" font-family="-apple-system, sans-serif" font-weight="700" text-anchor="middle" fill="#1E293B">CRITIC</text>
        </g>

        <g transform="translate(170, 110)">
          <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#0A66C2" stroke-width="2.5" />
          <circle cx="0" cy="0" r="24" fill="#E8F3FF" />
          <circle cx="0" cy="0" r="8" fill="#0A66C2" />
          <circle cx="0" cy="0" r="38" stroke="#00A0DC" stroke-width="1" stroke-dasharray="4 4" opacity="0.6" />
        </g>
      </svg>
      <div style="position:absolute; top:8px; left:14px; z-index:6; display:flex; align-items:center; gap:5px; background:#FFFFFF; border:1px solid #CCE4FF; padding:4px 10px; border-radius:12px; font-size:10px; font-weight:700; color:#0A66C2; box-shadow:0 3px 8px rgba(0,0,0,0.06);">
        <span>● Multi-Agent Swarm</span>
      </div>
      <div style="position:absolute; bottom:8px; right:14px; z-index:6; display:flex; align-items:center; gap:5px; background:#FFFFFF; border:1px solid #E2E8F0; padding:4px 10px; border-radius:12px; font-size:10px; font-weight:700; color:#059669; box-shadow:0 3px 8px rgba(0,0,0,0.06);">
        <span>4.2x Speedup • Live</span>
      </div>
    `,
    bottomTitle: 'Autonomous Multi-Agent Orchestration & Execution Graphs',
    tagPills: ['LangGraph Runtime', 'Distributed Agent Swarm', 'Pinecone Vector RAG', 'FastAPI & Next.js 15'],
    client: 'SaaS Enterprise',
    systemMetric: '4.2x Speedup'
  },

  // 3. Enterprise SaaS Analytics Platform
  {
    fileName: 'public/projects/project-analytics.png',
    htmlName: 'public/projects/temp-analytics.html',
    insideTag: 'INSIDE ENTERPRISE SAAS',
    headerDesc: 'How we process 10M+ monthly events with PostgreSQL partition indexing and automated multi-tenant Stripe billing.',
    counter: '// 03 - 04',
    stagePill: 'Stage 03',
    stageBadge: 'STAGE 03',
    centerTitle: 'AGGREGATING HIGH-THROUGHPUT<br>USAGE METRICS & BILLING',
    leftNodes: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>',
        label: 'EVENT INGESTION',
        subtext: '10M+ MONTHLY EVENTS'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        label: 'REDIS STREAMS',
        subtext: 'REAL-TIME AGGREGATION'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M7 15h10M7 11h6M7 7h10"/></svg>',
        label: 'POSTGRES RLS',
        subtext: 'MULTI-TENANT ISOLATION'
      }
    ],
    rightNodes: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
        label: 'PARTITION ENGINE',
        subtext: 'SUB-45MS QUERY LATENCY'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
        label: 'STRIPE ENGINE',
        subtext: 'IDEMPOTENT WEBHOOKS'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
        label: '60FPS CANVAS',
        subtext: 'REVENUE DASHBOARDS'
      }
    ],
    centerVisualHTML: `
      <svg width="340" height="220" viewBox="0 0 340 220" fill="none" style="position:relative; z-index:2;">
        <rect x="30" y="140" width="22" height="50" rx="4" fill="#00A0DC" opacity="0.6" />
        <rect x="65" y="110" width="22" height="80" rx="4" fill="#00A0DC" opacity="0.8" />
        <rect x="100" y="80" width="22" height="110" rx="4" fill="#0A66C2" />
        <rect x="135" y="50" width="22" height="140" rx="4" fill="#004182" />

        <path d="M 40 130 C 80 100, 110 70, 150 40 C 190 60, 230 30, 290 20" stroke="#00A0DC" stroke-width="3" stroke-linecap="round" fill="none" />
        <circle cx="290" cy="20" r="5" fill="#00A0DC" stroke="#FFFFFF" stroke-width="2" />

        <g transform="translate(170, 80)">
          <rect x="0" y="0" width="140" height="60" rx="12" fill="#FFFFFF" stroke="#CBD5E1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
          <text x="14" y="24" font-size="11" font-family="-apple-system, sans-serif" font-weight="700" fill="#64748B">LATENCY</text>
          <text x="14" y="46" font-size="18" font-family="-apple-system, sans-serif" font-weight="800" fill="#0A66C2">&lt; 45ms</text>
        </g>
        <g transform="translate(170, 150)">
          <rect x="0" y="0" width="140" height="46" rx="10" fill="#FFFFFF" stroke="#CBD5E1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
          <text x="14" y="28" font-size="12" font-family="-apple-system, sans-serif" font-weight="800" fill="#059669">99.99% Uptime</text>
        </g>
      </svg>
      <div style="position:absolute; top:8px; left:14px; z-index:6; display:flex; align-items:center; gap:5px; background:#FFFFFF; border:1px solid #CCE4FF; padding:4px 10px; border-radius:12px; font-size:10px; font-weight:700; color="#0A66C2"; box-shadow:0 3px 8px rgba(0,0,0,0.06);">
        <span>● 10M+ Events/mo</span>
      </div>
    `,
    bottomTitle: 'High-Throughput Analytics & Stripe Subscription Engine',
    tagPills: ['PostgreSQL Partitions', 'Multi-Tenant RLS', 'Stripe Billing Engine', 'Redis Streams'],
    client: 'B2B Analytics Startup',
    systemMetric: 'Sub-45ms Query'
  },

  // 4. Zero-Downtime Cloud Deployment Pipeline
  {
    fileName: 'public/projects/project-devops.png',
    htmlName: 'public/projects/temp-devops.html',
    insideTag: 'INSIDE CLOUD & DEVOPS',
    headerDesc: 'How we automate ephemeral PR preview environments, blue-green Kubernetes deployments, and Terraform cloud infra.',
    counter: '// 04 - 04',
    stagePill: 'Stage 04',
    stageBadge: 'STAGE 04',
    centerTitle: 'ZERO-DOWNTIME CI/CD<br>CONTAINER ORCHESTRATION',
    leftNodes: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        label: 'GITOPS PIPELINE',
        subtext: 'GITHUB ACTIONS CI/CD'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
        label: 'DOCKER BUILDS',
        subtext: 'MULTI-STAGE PACKAGING'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
        label: 'TERRAFORM IAC',
        subtext: 'AWS EKS INFRASTRUCTURE'
      }
    ],
    rightNodes: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
        label: 'BLUE-GREEN ROLL',
        subtext: '0 SEC PRODUCTION DOWNTIME'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>',
        label: 'PREVIEW CLUSTERS',
        subtext: 'EPHEMERAL PR TESTING'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>',
        label: 'GRAFANA TELEMETRY',
        subtext: 'REAL-TIME ALERTING'
      }
    ],
    centerVisualHTML: `
      <svg width="340" height="220" viewBox="0 0 340 220" fill="none" style="position:relative; z-index:2;">
        <g transform="translate(90, 70)">
          <polygon points="30 2, 58 17, 58 48, 30 63, 2 48, 2 17" fill="#E8F3FF" stroke="#00A0DC" stroke-width="2" />
          <text x="30" y="36" font-size="11" font-family="-apple-system, sans-serif" font-weight="800" text-anchor="middle" fill="#004182">POD-A</text>
        </g>
        <g transform="translate(190, 70)">
          <polygon points="30 2, 58 17, 58 48, 30 63, 2 48, 2 17" fill="#F0FDF4" stroke="#10B981" stroke-width="2" />
          <text x="30" y="36" font-size="11" font-family="-apple-system, sans-serif" font-weight="800" text-anchor="middle" fill="#047857">POD-B</text>
        </g>

        <path d="M 60 170 L 120 170 L 120 135" stroke="#0A66C2" stroke-width="2" />
        <path d="M 280 170 L 220 170 L 220 135" stroke="#10B981" stroke-width="2" stroke-dasharray="3 3" />
        <line x1="120" y1="170" x2="220" y2="170" stroke="#CBD5E1" stroke-width="1.5" />

        <g transform="translate(170, 170)">
          <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#0A66C2" stroke-width="2" />
          <text x="0" y="4" font-size="9" font-family="-apple-system, sans-serif" font-weight="800" text-anchor="middle" fill="#0F172A">INGRESS</text>
        </g>
      </svg>
      <div style="position:absolute; top:8px; left:14px; z-index:6; display:flex; align-items:center; gap:5px; background:#FFFFFF; border:1px solid #E2E8F0; padding:4px 10px; border-radius:12px; font-size:10px; font-weight:700; color:#059669; box-shadow:0 3px 8px rgba(0,0,0,0.06);">
        <span>● Zero-Downtime EKS</span>
      </div>
      <div style="position:absolute; bottom:8px; right:14px; z-index:6; display:flex; align-items:center; gap:5px; background:#FFFFFF; border:1px solid #CCE4FF; padding:4px 10px; border-radius:12px; font-size:10px; font-weight:700; color:#0A66C2; box-shadow:0 3px 8px rgba(0,0,0,0.06);">
        <span>72% Faster Deploys</span>
      </div>
    `,
    bottomTitle: 'Zero-Downtime Cloud Deployment & GitOps Pipeline',
    tagPills: ['Kubernetes EKS', 'Terraform IaC', 'GitHub Actions CI/CD', 'Docker Multi-Stage'],
    client: 'Cloud Agency',
    systemMetric: '72% Faster'
  }
];

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

for (const p of projects) {
  const html = generateHTML(p);
  fs.writeFileSync(p.htmlName, html);

  const htmlAbs = path.resolve(p.htmlName);
  const outAbs = path.resolve(p.fileName);

  execSync(`"${edgePath}" --headless --disable-gpu --window-size=1280,960 --screenshot="${outAbs}" "file:///${htmlAbs.replace(/\\/g, '/')}"`);
  console.log('Rendered:', p.fileName);

  if (p.fileName.includes('al-rafai')) {
    fs.copyFileSync(outAbs, path.resolve('public/al-rafai-clinic-mockup.png'));
  }
}

console.log('All 4 clean light-mode project showcase graphics rendered successfully!');
