const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let doctorImgBase64 = '';
try {
  doctorImgBase64 = fs.readFileSync('public/doctor-fatima.jpg').toString('base64');
} catch (e) {}

const html = `<!DOCTYPE html>
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

  /* Radar / Availability Map Container */
  .center-radar-container {
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

  /* Radar Circles */
  .radar-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid #CBD5E1;
    pointer-events: none;
  }

  .radar-ring-1 { width: 85px; height: 85px; border-color: #B8DBFF; }
  .radar-ring-2 { width: 160px; height: 160px; border-style: dashed; }
  .radar-ring-3 { width: 235px; height: 235px; }
  .radar-ring-4 { width: 310px; height: 310px; border-style: dashed; opacity: 0.5; }

  /* Radar Light Sweep */
  .radar-sweep {
    position: absolute;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: conic-gradient(from 180deg at 50% 50%, rgba(10, 102, 194, 0.22) 0deg, rgba(0, 160, 220, 0.08) 60deg, transparent 90deg);
    pointer-events: none;
  }

  /* Doctor Center Badge */
  .doctor-radar-center {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 12px;
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    padding: 8px 16px;
    border-radius: 40px;
    box-shadow: 0 6px 20px rgba(15, 23, 42, 0.1);
  }

  .doctor-avatar-wrap {
    position: relative;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid #0A66C2;
    overflow: hidden;
    flex-shrink: 0;
  }

  .doctor-avatar-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .doctor-radar-meta h4 {
    font-size: 13px;
    font-weight: 800;
    color: #0F172A;
  }

  .doctor-radar-meta p {
    font-size: 10.5px;
    color: #64748B;
    font-weight: 600;
  }

  /* Radar Floating Pins */
  .radar-pin {
    position: absolute;
    z-index: 6;
    display: flex;
    align-items: center;
    gap: 5px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 10px;
    font-weight: 700;
    color: #1E293B;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
  }

  .pin-top-left { top: 10px; left: 14px; color: #0A66C2; }
  .pin-top-right { top: 10px; right: 14px; color: #059669; }
  .pin-bottom-right { bottom: 10px; right: 16px; }
  .pin-bottom-left { bottom: 10px; left: 16px; color: #D97706; }

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

  <!-- ── 3D Liquid Metallic Light Sweep on Left Side (LinkedIn Blue & Cyan Glow) ── -->
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

      <!-- Pure LinkedIn Blue to Deep Blue Gradient (No Purple) -->
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
        <span>INSIDE AL-RAFAI CLINIC</span>
      </div>
      <p class="project-desc">
        How we establish 24/7 AI voice and chat triage for medical appointments with zero double-booking.
      </p>
    </div>

    <div class="header-right">
      <div class="counter-badge">// 01 - 04</div>
    </div>
  </div>

  <!-- ── 2. Interactive Architecture Diagram Area ── -->
  <div class="diagram-area">

    <!-- Connecting Circuit Wires -->
    <svg class="circuit-wires" viewBox="0 0 1280 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Left Wire 1: Node 1 to Center Box -->
      <path d="M 288 124 L 350 124 Q 365 124 365 142 L 365 142 Q 365 160 380 160 L 390 160" stroke="#94A3B8" stroke-width="1.75" />
      <circle cx="390" cy="160" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />

      <!-- Left Wire 2: Node 2 through Stage 01 pill to Center Box -->
      <path d="M 288 274 L 390 274" stroke="#94A3B8" stroke-width="1.75" />
      <circle cx="390" cy="274" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />

      <!-- Left Wire 3: Node 3 to Center Box -->
      <path d="M 288 424 L 350 424 Q 365 424 365 406 L 365 378 Q 365 360 380 360 L 390 360" stroke="#94A3B8" stroke-width="1.75" />
      <circle cx="390" cy="360" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />

      <!-- Right Wire 1: Center Box to Node 1 -->
      <circle cx="890" cy="160" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />
      <path d="M 890 160 L 900 160 Q 915 160 915 142 L 915 142 Q 915 124 930 124 L 992 124" stroke="#94A3B8" stroke-width="1.75" />

      <!-- Right Wire 2: Center Box to Node 2 -->
      <circle cx="890" cy="274" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />
      <path d="M 890 274 L 992 274" stroke="#94A3B8" stroke-width="1.75" />

      <!-- Right Wire 3: Center Box to Node 3 -->
      <circle cx="890" cy="360" r="3.5" fill="#0A66C2" stroke="#FFFFFF" stroke-width="1.5" />
      <path d="M 890 360 L 900 360 Q 915 360 915 378 L 915 406 Q 915 424 930 424 L 992 424" stroke="#94A3B8" stroke-width="1.75" />
    </svg>

    <!-- Floating Frosted Glass Stage Pill on Left Center Wire -->
    <div class="floating-wire-pill">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
      <span>Stage 01</span>
    </div>

    <!-- ── Left Nodes (3 stacked cards) ── -->
    <!-- Node 1 -->
    <div class="node-card node-left-1">
      <div class="node-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
      </div>
      <div class="node-text">
        <span class="node-label">VOICE &amp; CHAT</span>
        <span class="node-subtext">TRIAGE AGENT</span>
      </div>
      <span class="pin-dot-right"></span>
    </div>

    <!-- Node 2 -->
    <div class="node-card node-left-2">
      <div class="node-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>
      </div>
      <div class="node-text">
        <span class="node-label">REAL-TIME</span>
        <span class="node-subtext">DOCTOR SLOTS</span>
      </div>
      <span class="pin-dot-right"></span>
    </div>

    <!-- Node 3 -->
    <div class="node-card node-left-3">
      <div class="node-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      </div>
      <div class="node-text">
        <span class="node-label">PATIENT RECORD</span>
        <span class="node-subtext">INTAKE &amp; SYNC</span>
      </div>
      <span class="pin-dot-right"></span>
    </div>

    <!-- ── Center Stage Box (Architecture Card) ── -->
    <div class="center-stage-card">
      <span class="stage-badge">STAGE 01</span>
      <h3 class="stage-title">BUILDING 24/7 PATIENT<br>TRIAGE &amp; BOOKING MAP</h3>
      <div class="stage-accent-bar"></div>

      <!-- Radar / Signal Map Container -->
      <div class="center-radar-container">
        <div class="radar-ring radar-ring-1"></div>
        <div class="radar-ring radar-ring-2"></div>
        <div class="radar-ring radar-ring-3"></div>
        <div class="radar-ring radar-ring-4"></div>

        <div class="radar-sweep"></div>

        <!-- Center Doctor Entity -->
        <div class="doctor-radar-center">
          <div class="doctor-avatar-wrap">
            <img src="data:image/jpeg;base64,${doctorImgBase64}" alt="Dr. Fatima" />
          </div>
          <div class="doctor-radar-meta">
            <h4>Dr. Fatima, MBBS</h4>
            <p>General Physician &amp; Consultant</p>
          </div>
        </div>

        <!-- Floating Radar Pins -->
        <div class="radar-pin pin-top-left">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          <span>Voice NLP Triage</span>
        </div>

        <div class="radar-pin pin-top-right">
          <span style="width:6px; height:6px; border-radius:50%; background:#10B981; display:inline-block;"></span>
          <span>Next: 2:00 PM Today</span>
        </div>

        <div class="radar-pin pin-bottom-left">
          <span>★ 4.9/5 Rating</span>
        </div>

        <div class="radar-pin pin-bottom-right">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>North Karachi Clinic</span>
        </div>
      </div>
    </div>

    <!-- ── Right Nodes (3 stacked cards) ── -->
    <!-- Node 1 -->
    <div class="node-card node-right-1">
      <span class="pin-dot-left"></span>
      <div class="node-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
      </div>
      <div class="node-text">
        <span class="node-label">SLOT CONFLICT</span>
        <span class="node-subtext">LOCKING SYSTEM</span>
      </div>
    </div>

    <!-- Node 2 -->
    <div class="node-card node-right-2">
      <span class="pin-dot-left"></span>
      <div class="node-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
      </div>
      <div class="node-text">
        <span class="node-label">INSTANT DISPATCH</span>
        <span class="node-subtext">SMS &amp; EMAIL CONFIRM</span>
      </div>
    </div>

    <!-- Node 3 -->
    <div class="node-card node-right-3">
      <span class="pin-dot-left"></span>
      <div class="node-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      </div>
      <div class="node-text">
        <span class="node-label">CLINIC ADMIN</span>
        <span class="node-subtext">LIVE DASHBOARD</span>
      </div>
    </div>

  </div>

  <!-- ── 3. Clean Light-Mode Footer (NO Black Bar) ── -->
  <div class="clean-footer">
    <div class="footer-left">
      <div class="footer-headline">Building 24/7 AI Voice &amp; Chat Booking for Clinic Care</div>
      <div class="tag-pills">
        <span class="tag-pill">24/7 Voice AI Agent</span>
        <span class="tag-pill">Real-Time Doctor Calendar</span>
        <span class="tag-pill">Patient Triage NLP</span>
        <span class="tag-pill">Next.js 15 &amp; PostgreSQL</span>
      </div>
    </div>

    <div class="footer-right">
      <div class="meta-col">
        <span class="meta-label">CLIENT</span>
        <span class="meta-value">Al-Rafai Clinic</span>
      </div>
      <div class="meta-col">
        <span class="meta-label">SYSTEM</span>
        <span class="meta-value meta-value-blue">&lt; 60s Booking</span>
      </div>
    </div>
  </div>

</div>

</body>
</html>`;

fs.writeFileSync('temp-mockup.html', html);

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlFileUrl = 'file:///' + path.resolve('temp-mockup.html').replace(/\\/g, '/');
const outFile = path.resolve('public/projects/project-al-rafai.png');

console.log('Rendering pattern mockup with LinkedIn Blue (#0A66C2)...');
const cmd = `"${edgePath}" --headless --disable-gpu --window-size=1280,960 --screenshot="${outFile}" "${htmlFileUrl}"`;
execSync(cmd);
console.log('Rendered successfully to:', outFile);
fs.copyFileSync(outFile, 'public/al-rafai-clinic-mockup.png');
