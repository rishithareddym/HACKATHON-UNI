import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-text">ZENITH</div>
      <div className="hero-dots"></div>

      <div className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Applications Open &middot; Class of 2029
        </div>
        <h1 className="hero-title">
          Where bold<br />
          <em>minds</em> build<br />
          <strong>tomorrow.</strong>
        </h1>
        <p className="hero-sub">Zenith Institute of Technology is home to 28,000 students across 180+ programs. We don't just teach &mdash; we equip you to reshape industries, lead movements, and build what doesn't exist yet.</p>
        <div className="hero-actions">
          <a href="#admissions" className="btn-dark">Explore Admissions</a>
          <a href="#campus" className="btn-outline">&#9654; Virtual Tour</a>
        </div>
        <div className="hero-stats">
          <div>
            <span className="hstat-num">94%</span>
            <span className="hstat-lbl">Placement Rate</span>
          </div>
          <div>
            <span className="hstat-num">#7</span>
            <span className="hstat-lbl">National Rank</span>
          </div>
          <div>
            <span className="hstat-num">180+</span>
            <span className="hstat-lbl">Programs</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card-stack">
          <div className="hero-main-card">
            <div className="hero-card-img">&#127963;</div>
            <div className="hero-card-overlay"></div>
            <div className="hero-card-content">
              <div className="hcard-label">Campus Life</div>
              <div className="hcard-title">A 400-acre campus built for curiosity.</div>
              <a href="#campus" className="hcard-cta">Explore Campus &rarr;</a>
            </div>
          </div>
          <div className="hero-float-card float-card-1">
            <div className="float-num">$75M</div>
            <div className="float-lbl">Research Funding 2025</div>
          </div>
          <div className="hero-float-card float-card-2">
            <div className="float-num">4,200+</div>
            <div className="float-lbl">Alumni at Fortune 500</div>
          </div>
        </div>
      </div>
    </section>
  );
}
