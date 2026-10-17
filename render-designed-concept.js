const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const doctorImgBase64 = fs.existsSync('public/doctor-fatima.jpg')
  ? fs.readFileSync('public/doctor-fatima.jpg').toString('base64')
  : '';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
  body {
    width: 1280px;
    height: 960px;
    background: #F8FAFC;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif;
    color: #0F172A;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* ── Master Card Frame with Soft Glow ── */
  .canvas-card {
    width: 1200px;
    height: 890px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 36px;
    box-shadow: 0 25px 60px -15px rgba(37, 99, 235, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 38px 48px;
  }

  /* ── Background Subtle Tech Accents ── */
  .ambient-glow-top {
    position: absolute;
    top: -150px;
    left: 50%;
    transform: translateX(-50%);
    width: 900px;
    height: 450px;
    background: radial-gradient(ellipse at center, rgba(56, 189, 248, 0.16) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 75%);
    pointer-events: none;
    z-index: 0;
  }

  .ambient-glow-bottom {
    position: absolute;
    bottom: -150px;
    right: -100px;
    width: 600px;
    height: 400px;
    background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .dot-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(59, 130, 246, 0.15) 1.5px, transparent 1.5px);
    background-size: 24px 24px;
    opacity: 0.65;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Header Section ── */
  .tag-badge {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #EFF6FF;
    border: 1px solid #DBEAFE;
    color: #2563EB;
    padding: 5px 16px;
    border-radius: 20px;
    font-size: 11.5px;
    font-weight: 800;
    letter-spacing: 0.1em;
    font-family: 'SF Mono', Monaco, Menlo, monospace;
    text-transform: uppercase;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
  }

  .tag-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #2563EB;
  }

  .main-headline {
    position: relative;
    z-index: 2;
    font-size: 38px;
    font-weight: 900;
    color: #0F172A;
    letter-spacing: -0.03em;
    line-height: 1.15;
    text-align: center;
    margin-top: 14px;
    max-width: 900px;
  }

  .main-headline span {
    color: #2563EB;
  }

  .sub-hook {
    position: relative;
    z-index: 2;
    font-size: 15px;
    color: #64748B;
    text-align: center;
    max-width: 760px;
    line-height: 1.5;
    margin-top: 10px;
    font-weight: 500;
  }

  /* ── Central Interactive AI Voice Visualizer Card (The Design Core!) ── */
  .interactive-centerpiece {
    position: relative;
    z-index: 2;
    margin-top: 24px;
    width: 100%;
    max-width: 1040px;
    background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    padding: 16px 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 12px 36px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02);
  }

  .doctor-profile-entity {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .avatar-ring {
    position: relative;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 2.5px solid #2563EB;
    overflow: hidden;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
    flex-shrink: 0;
  }

  .avatar-ring img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .doctor-title-block h4 {
    font-size: 15px;
    font-weight: 800;
    color: #0F172A;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .doctor-badge-pill {
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    color: #1D4ED8;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 10px;
  }

  .doctor-title-block p {
    font-size: 11.5px;
    color: #64748B;
    margin-top: 2px;
    font-weight: 500;
  }

  /* Live Voice Waveform Visualizer */
  .voice-waveform-cluster {
    display: flex;
    align-items: center;
    gap: 18px;
    background: #F1F5F9;
    border: 1px solid #E2E8F0;
    padding: 8px 18px;
    border-radius: 16px;
  }

  .pulse-status {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 800;
    font-family: 'SF Mono', Monaco, Menlo, monospace;
    color: #059669;
  }

  .pulse-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #10B981;
    box-shadow: 0 0 8px #10B981;
  }

  .soundwave-bars {
    display: flex;
    align-items: center;
    gap: 3.5px;
    height: 28px;
  }

  .sound-bar {
    width: 3.5px;
    background: #2563EB;
    border-radius: 3px;
  }

  /* Callout Quote Pill */
  .simulated-callout {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #EFF6FF;
    border: 1px solid #DBEAFE;
    padding: 8px 14px;
    border-radius: 14px;
    font-size: 11.5px;
    font-weight: 600;
    color: #1E40AF;
  }

  /* ── Two Split Cards: WHAT IT DOES vs PROBLEM IT SOLVES ── */
  .features-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
    max-width: 1040px;
    margin-top: 20px;
  }

  .feature-box {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 22px 24px;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .feature-box-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .feature-icon-badge {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: #EFF6FF;
    border: 1px solid #DBEAFE;
    color: #2563EB;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .feature-box-title {
    font-size: 13.5px;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: #0F172A;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .feature-items-list {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    color: #334155;
    line-height: 1.42;
    font-weight: 500;
  }

  .feature-bullet-icon {
    margin-top: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #EFF6FF;
    color: #2563EB;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .check-green {
    background: #ECFDF5;
    color: #059669;
  }

  /* ── Bottom Metrics Chips ── */
  .bottom-metrics-row {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-top: 22px;
    width: 100%;
  }

  .metric-pill {
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    color: #1E3A8A;
    padding: 7px 20px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 700;
    font-family: 'SF Mono', Monaco, Menlo, monospace;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.06);
  }

  .metric-pill-strong {
    color: #2563EB;
    font-weight: 800;
  }
</style>
</head>
<body>

  <div class="canvas-card">
    <!-- Ambient Background Lighting -->
    <div class="ambient-glow-top"></div>
    <div class="ambient-glow-bottom"></div>
    <div class="dot-grid"></div>

    <!-- ── 1. Top Category Badge ── -->
    <div class="tag-badge">
      <span class="tag-dot"></span>
      <span>PROJECT 01 // HEALTHCARE AI AGENT</span>
    </div>

    <!-- ── 2. Punchy Main Headline ── -->
    <h1 class="main-headline">
      24/7 Autonomous Medical <span>Receptionist & Voice Agent</span>
    </h1>

    <p class="sub-hook">
      Never miss a patient call — instant voice triage, real-time doctor calendar sync, and automated appointment confirmations.
    </p>

    <!-- ── 3. Central AI Voice Visualizer Widget (The Core Design Piece) ── -->
    <div class="interactive-centerpiece">
      <!-- Left: Doctor Profile & Clinic Credential -->
      <div class="doctor-profile-entity">
        <div class="avatar-ring">
          <img src="data:image/jpeg;base64,${doctorImgBase64}" alt="Dr. Fatima" />
        </div>
        <div class="doctor-title-block">
          <h4>Dr. Fatima, MBBS <span class="doctor-badge-pill">PMDC Verified</span></h4>
          <p>General Physician • North Karachi Clinic</p>
        </div>
      </div>

      <!-- Center: Active Voice Audio Visualizer -->
      <div class="voice-waveform-cluster">
        <div class="pulse-status">
          <span class="pulse-dot"></span>
          <span>VOICE AGENT LIVE</span>
        </div>

        <div class="soundwave-bars">
          <div class="sound-bar" style="height: 10px;"></div>
          <div class="sound-bar" style="height: 20px;"></div>
          <div class="sound-bar" style="height: 26px;"></div>
          <div class="sound-bar" style="height: 14px;"></div>
          <div class="sound-bar" style="height: 22px;"></div>
          <div class="sound-bar" style="height: 28px;"></div>
          <div class="sound-bar" style="height: 16px;"></div>
          <div class="sound-bar" style="height: 24px;"></div>
          <div class="sound-bar" style="height: 12px;"></div>
        </div>
      </div>

      <!-- Right: Real-time Patient Callout -->
      <div class="simulated-callout">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Slot Reserved: 2:00 PM Today</span>
      </div>
    </div>

    <!-- ── 4. Two Split Cards: WHAT IT DOES vs PROBLEM IT SOLVES ── -->
    <div class="features-grid">

      <!-- Left Card: What It Does -->
      <div class="feature-box">
        <div class="feature-box-header">
          <div class="feature-icon-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </div>
          <span class="feature-box-title">What It Does</span>
        </div>

        <div class="feature-items-list">
          <div class="feature-item">
            <span class="feature-bullet-icon">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span><strong>Conversational Voice & Chat:</strong> Handles triage questions naturally in fluent conversational language.</span>
          </div>

          <div class="feature-item">
            <span class="feature-bullet-icon">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span><strong>Real-Time Schedule Sync:</strong> Directly checks & locks available slots in Dr. Fatima's live calendar.</span>
          </div>

          <div class="feature-item">
            <span class="feature-bullet-icon">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span><strong>Instant Dispatch:</strong> Generates booking receipts via SMS & Email confirmation in under 60 seconds.</span>
          </div>
        </div>
      </div>

      <!-- Right Card: Problem It Solves -->
      <div class="feature-box">
        <div class="feature-box-header">
          <div class="feature-icon-badge" style="background:#ECFDF5; border-color:#A7F3D0; color:#059669;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <span class="feature-box-title">Problem It Solves</span>
        </div>

        <div class="feature-items-list">
          <div class="feature-item">
            <span class="feature-bullet-icon check-green">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span><strong>Zero Missed Patient Bookings:</strong> Captures appointments 24/7 without busy signals or dropped calls.</span>
          </div>

          <div class="feature-item">
            <span class="feature-bullet-icon check-green">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span><strong>No Double-Booking:</strong> PostgreSQL transactional locking stops overlapping appointments completely.</span>
          </div>

          <div class="feature-item">
            <span class="feature-bullet-icon check-green">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span><strong>Front-Desk Relief:</strong> Replaces 15+ hours weekly of repetitive manual intake and appointment calls.</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ── 5. Bottom Verified Impact Badges ── -->
    <div class="bottom-metrics-row">
      <div class="metric-pill">
        <span class="metric-pill-strong">350+</span> Patients Treated
      </div>
      <div class="metric-pill">
        <span class="metric-pill-strong">&lt; 60s</span> Booking Time
      </div>
      <div class="metric-pill">
        <span class="metric-pill-strong">4.9 ★</span> Patient Rating
      </div>
    </div>

  </div>

</body>
</html>`;

fs.writeFileSync('public/projects/designed-concept.html', html);
console.log('Written public/projects/designed-concept.html');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlPath = path.resolve('public/projects/designed-concept.html');
const outPath = path.resolve('public/projects/project-designed-concept.png');

execSync(`"${edgePath}" --headless --disable-gpu --window-size=1280,960 --screenshot="${outPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`);
console.log('Rendered designed concept to:', outPath);
