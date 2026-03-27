import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="mainNav" style={{ boxShadow: scrolled ? '0 4px 30px rgba(15,14,11,.08)' : 'none' }}>
      <div className="nav-logo">
        <div className="logo-mark">B</div>
        <div>
          <div className="logo-text">BMS COLLEGE OF ENGINEERING</div>
          <span className="logo-sub">Est. 1946 &middot; Excellence in Innovation</span>
        </div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#academics" onClick={() => setMenuOpen(false)}>Academics</a></li>
        <li><a href="#alumni" onClick={() => setMenuOpen(false)}>Alumni</a></li>
        <li><a href="#research" onClick={() => setMenuOpen(false)}>Research</a></li>
        <li><a href="#campus" onClick={() => setMenuOpen(false)}>Campus</a></li>
        <li><a href="#admissions" onClick={() => setMenuOpen(false)}>Admissions</a></li>
        <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
      </ul>
      <a href="/apply" className="nav-cta" style={{ display: 'inline-block' }}>Apply Now &rarr;</a>
      <button className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
