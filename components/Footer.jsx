import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo" style={{ marginBottom: '1.2rem' }}>
            <div className="logo-mark" style={{ background: 'var(--gold)' }}>B</div>
            <div>
              <div className="logo-text" style={{ color: '#fff' }}>BMS COLLEGE OF ENGINEERING</div>
              <span className="logo-sub">Est. 1946</span>
            </div>
          </div>
          <p className="footer-desc">
            A place where curiosity is cultivated, ambition is nurtured, and the future is built — one breakthrough at a time.
          </p>
          <div className="footer-social">
            <div className="social-btn">𝕏</div>
            <div className="social-btn">in</div>
            <div className="social-btn">📘</div>
            <div className="social-btn">▶</div>
            <div className="social-btn">📸</div>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Academics</div>
          <ul className="footer-links">
            <li><a href="#academics">Undergraduate Programs</a></li>
            <li><a href="#academics">Postgraduate Programs</a></li>
            <li><a href="#academics">PhD Programs</a></li>
            <li><a href="#academics">Online Courses</a></li>
            <li><a href="#academics">Executive Education</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Campus</div>
          <ul className="footer-links">
            <li><a href="#campus">Campus Map</a></li>
            <li><a href="#campus">Hostels & Housing</a></li>
            <li><a href="#campus">Sports Facilities</a></li>
            <li><a href="#campus">Cafeteria & Dining</a></li>
            <li><a href="#campus">Health Centre</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="#admissions">Admissions Office</a></li>
            <li><a href="#research">Research Cell</a></li>
            <li><a href="#events">Placement Office</a></li>
            <li><a href="#alumni">Alumni Relations</a></li>
            <li><a href="#">Press & Media</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © {new Date().getFullYear()} BMS College of Engineering. All rights reserved. NAAC A++ | UGC Recognized | AICTE Approved
        </div>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Accessibility</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

