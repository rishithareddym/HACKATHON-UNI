import React from 'react';

export default function Footer() {
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
          <p className="footer-desc">A place where curiosity is cultivated, ambition is nurtured, and the future is built &mdash; one breakthrough at a time.</p>
          <div className="footer-social">
            <div className="social-btn">&#120143;</div>
            <div className="social-btn">in</div>
            <div className="social-btn">&#128216;</div>
            <div className="social-btn">&#9654;</div>
            <div className="social-btn">&#128248;</div>
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
        <div className="footer-copy">© {new Date().getFullYear()} BMS College of Engineering. All rights reserved. NAAC A++ | UGC Recognized | AICTE Approved</div>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Accessibility</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
