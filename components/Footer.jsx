import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo" style={{ marginBottom: '1.2rem' }}>
            <div className="logo-mark" style={{ background: 'var(--gold)' }}>N</div>
            <div>
              <div className="logo-text" style={{ color: '#fff' }}>NEXUS UNIVERSITY</div>
              <span className="logo-sub" style={{ color: 'rgba(255,255,255,.5)' }}>Est. 1968</span>
            </div>
          </div>
          <p className="footer-desc">A place where curiosity is cultivated, ambition is nurtured, and the future is built &mdash; one breakthrough at a time.</p>
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
            <li><a href="#">Undergraduate Programs</a></li>
            <li><a href="#">Postgraduate Programs</a></li>
            <li><a href="#">PhD Programs</a></li>
            <li><a href="#">Online Courses</a></li>
            <li><a href="#">Executive Education</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Campus</div>
          <ul className="footer-links">
            <li><a href="#">Campus Map</a></li>
            <li><a href="#">Hostels & Housing</a></li>
            <li><a href="#">Sports Facilities</a></li>
            <li><a href="#">Cafeteria & Dining</a></li>
            <li><a href="#">Health Centre</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="#">Admissions Office</a></li>
            <li><a href="#">Research Cell</a></li>
            <li><a href="#">Placement Office</a></li>
            <li><a href="#">Alumni Relations</a></li>
            <li><a href="#">Press & Media</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">&copy; 2026 NEXUS University. All rights reserved. NAAC A++ | UGC Recognized | AICTE Approved</div>
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
