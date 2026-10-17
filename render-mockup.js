const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const doctorImgBase64 = fs.readFileSync('public/doctor-fatima.jpg').toString('base64');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
  body {
    width: 1600px;
    height: 900px;
    background: #FFFFFF;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif;
    color: #0F172A;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  /* ── Top Navigation Bar ── */
  header {
    height: 84px;
    padding: 0 64px;
    background: #FFFFFF;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .brand-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2563EB;
  }
  .brand-text h1 {
    font-size: 20px;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #0F172A;
  }
  .brand-text p {
    font-size: 11px;
    font-weight: 600;
    color: #64748B;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  .nav-links a {
    font-size: 14px;
    font-weight: 600;
    color: #475569;
    text-decoration: none;
  }
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .btn-secondary {
    padding: 10px 20px;
    border-radius: 9999px;
    background: #F1F5F9;
    border: 1px solid #CBD5E1;
    color: #1E293B;
    font-size: 13px;
    font-weight: 700;
  }
  .btn-primary-nav {
    padding: 10px 22px;
    border-radius: 9999px;
    background: #2563EB;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 700;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
  }

  /* ── Hero Section ── */
  main {
    flex: 1;
    padding: 36px 64px;
    display: grid;
    grid-template-columns: 1.18fr 0.82fr;
    gap: 44px;
    align-items: stretch;
  }

  /* Left Column: Hero Card */
  .hero-card {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 28px;
    padding: 44px 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  }
  .trust-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    padding: 6px 16px;
    border-radius: 9999px;
    font-size: 13px;
    font-weight: 700;
    color: #334155;
    box-shadow: 0 1px 2px rgba(0,0,0,0.03);
    width: fit-content;
  }
  .hero-card h2 {
    font-size: 54px;
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -1.5px;
    color: #0F172A;
    margin: 18px 0 14px 0;
  }
  .hero-card h2 span {
    color: #2563EB;
  }
  .hero-subtext {
    font-size: 16px;
    line-height: 1.6;
    color: #475569;
    max-width: 580px;
    margin-bottom: 24px;
  }
  .hero-subtext strong {
    color: #0F172A;
    font-weight: 700;
  }
  .hero-subtext .highlight {
    color: #2563EB;
    font-weight: 700;
  }
  .hero-actions {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 28px;
  }
  .btn-hero-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #2563EB;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 800;
    padding: 14px 28px;
    border-radius: 9999px;
    box-shadow: 0 10px 25px -3px rgba(37, 99, 235, 0.35);
  }
  .btn-hero-secondary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #FFFFFF;
    color: #2563EB;
    border: 2px solid #2563EB;
    font-size: 15px;
    font-weight: 800;
    padding: 12px 26px;
    border-radius: 9999px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  }
  .trust-features {
    padding-top: 20px;
    border-top: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 13px;
    font-weight: 700;
    color: #475569;
  }
  .trust-features span {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Right Column: Doctor Portrait Card */
  .doctor-card {
    position: relative;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.15);
    border: 1px solid #E2E8F0;
    background: #000;
  }
  .doctor-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 10%;
    display: block;
  }
  .doctor-card .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.7) 100%);
  }

  /* Floating Badges */
  .badge-slot {
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 14px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    font-size: 13px;
    font-weight: 800;
    color: #0F172A;
  }
  .badge-avail {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #10B981;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 800;
    padding: 7px 16px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 6px 16px rgba(16, 185, 129, 0.3);
  }
  .badge-reviews {
    position: absolute;
    bottom: 24px;
    left: 20px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 18px;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.12);
  }
  .star-circle {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #FEF3C7;
    border: 1px solid #FDE68A;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #D97706;
  }
  .review-text .score {
    font-size: 14px;
    font-weight: 900;
    color: #0F172A;
  }
  .review-text .patients {
    font-size: 11px;
    font-weight: 600;
    color: #64748B;
  }
  .doctor-title-overlay {
    position: absolute;
    bottom: 24px;
    right: 24px;
    text-align: right;
    color: #FFFFFF;
  }
  .doctor-title-overlay h3 {
    font-size: 18px;
    font-weight: 800;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
  .doctor-title-overlay p {
    font-size: 12px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }

  /* ── Bottom Stats Banner (Royal Blue) ── */
  .stats-banner {
    height: 104px;
    background: linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #1D4ED8 100%);
    padding: 0 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
  }
  .stats-group {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-around;
  }
  .stat-col {
    text-align: center;
    padding: 0 20px;
  }
  .stat-col h4 {
    font-size: 36px;
    font-weight: 900;
    letter-spacing: -1px;
    color: #FFFFFF;
    line-height: 1;
  }
  .stat-col p {
    font-size: 12px;
    font-weight: 600;
    color: #BFDBFE;
    margin-top: 4px;
    letter-spacing: 0.2px;
  }
  .stat-divider {
    width: 1px;
    height: 44px;
    background: rgba(255, 255, 255, 0.2);
  }
  .ai-pill {
    padding: 9px 20px;
    border-radius: 9999px;
    background: #FFFFFF;
    color: #1E40AF;
    font-size: 12px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
</style>
</head>
<body>

  <!-- 1. Header -->
  <header>
    <div class="brand">
      <div class="brand-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>
      </div>
      <div class="brand-text">
        <h1>AL-RAFAI CLINIC</h1>
        <p>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          12:00 PM – 6:00 PM Daily • North Karachi
        </p>
      </div>
    </div>

    <nav class="nav-links">
      <a href="#">Services</a>
      <a href="#">How It Works</a>
      <a href="#">About Dr. Fatima</a>
      <a href="#">Testimonials</a>
      <a href="#">Contact</a>
    </nav>

    <div class="nav-actions">
      <div class="btn-secondary">Doctor Dashboard</div>
      <div class="btn-primary-nav">Book Appointment</div>
    </div>
  </header>

  <!-- 2. Main Hero Grid -->
  <main>
    <!-- Left Hero Card -->
    <div class="hero-card">
      <div>
        <div class="trust-badge">
          <span style="color:#2563EB;">✦</span>
          <span>Trusted by 350+ Patients in the Community</span>
        </div>

        <h2>Your Health,<br><span>Our Priority.</span></h2>

        <p class="hero-subtext">
          Visit Dr. Fatima at her clinic in <strong>5A/2, North Karachi</strong>, open daily from <span class="highlight">12 PM to 6 PM</span>. Walk in or reserve your slot instantly via 24/7 AI voice & chat booking.
        </p>

        <div class="hero-actions">
          <div class="btn-hero-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            <span>Book via AI Chat / Voice</span>
          </div>
          <div class="btn-hero-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M16 2v4"/></svg>
            <span>Check Today's Slots</span>
          </div>
        </div>
      </div>

      <div class="trust-features">
        <span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          PMDC Registered Doctor
        </span>
        <span style="color:#CBD5E1;">•</span>
        <span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2.5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
          1-on-1 Unhurried Care
        </span>
        <span style="color:#CBD5E1;">•</span>
        <span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          12 PM – 6 PM Daily Care
        </span>
      </div>
    </div>

    <!-- Right Doctor Portrait Card -->
    <div class="doctor-card">
      <img src="data:image/jpeg;base64,${doctorImgBase64}" alt="Dr. Fatima MBBS">
      <div class="overlay"></div>

      <div class="badge-slot">
        <span style="width:8px; height:8px; border-radius:50%; background:#10B981;"></span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>Next Slot: 2:00 PM Today</span>
      </div>

      <div class="badge-avail">
        <span style="width:6px; height:6px; border-radius:50%; background:#FFFFFF;"></span>
        <span>Available Today</span>
      </div>

      <div class="badge-reviews">
        <div class="star-circle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#D97706"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <div class="review-text">
          <div class="score">⭐⭐⭐⭐⭐ 4.9/5</div>
          <div class="patients">350+ Verified Patients</div>
        </div>
      </div>

      <div class="doctor-title-overlay">
        <h3>Dr. Fatima, MBBS</h3>
        <p>General Physician & Consultant</p>
      </div>
    </div>
  </main>

  <!-- 3. Bottom Stats Banner -->
  <div class="stats-banner">
    <div class="stats-group">
      <div class="stat-col">
        <h4>350+</h4>
        <p>Patients Treated</p>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-col">
        <h4>4.9 ★</h4>
        <p>Rating (Verified)</p>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-col">
        <h4>12PM–6PM</h4>
        <p>Daily Clinic Care</p>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-col">
        <h4>&lt; 60 sec</h4>
        <p>AI Booking Time</p>
      </div>
    </div>

    <div class="ai-pill">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span>AI Voice & Chat Booking</span>
    </div>
  </div>

</body>
</html>`;

fs.writeFileSync('public/al-rafai-render.html', html);
console.log('Generated public/al-rafai-render.html');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlPath = path.resolve('public/al-rafai-render.html');
const outPath = path.resolve('public/al-rafai-clinic-mockup.png');

execSync(`"${edgePath}" --headless --disable-gpu --window-size=1600,900 --screenshot="${outPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`);
console.log('Rendered screenshot to:', outPath);
