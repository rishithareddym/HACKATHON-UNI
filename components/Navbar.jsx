import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav id="mainNav" style={{ boxShadow: scrolled ? '0 4px 30px rgba(15,14,11,.08)' : 'none' }}>
      <div className="nav-logo">
        <img className="logo-img" src="/logo.png" alt="Zenith Institute of Technology logo" loading="eager" />
        <div>
          <div className="logo-text">ZENITH INSTITUTE OF TECHNOLOGY</div>
          <span className="logo-sub">Est. 1946 · Excellence in Innovation</span>
        </div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToId('about'); }}>About</a></li>
        <li><a href="#academics" onClick={() => setMenuOpen(false)}>Academics</a></li>
        <li><a href="#alumni" onClick={() => setMenuOpen(false)}>Alumni</a></li>
        <li><a href="#research" onClick={() => setMenuOpen(false)}>Research</a></li>
        <li><a href="#campus" onClick={() => setMenuOpen(false)}>Campus</a></li>
        <li><a href="#placements" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToId('placements'); }}>Placements</a></li>
        <li><a href="#admissions" onClick={() => setMenuOpen(false)}>Admissions</a></li>
        <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
      </ul>
      <a href="/apply" className="nav-cta" style={{ display: 'inline-block' }}>Apply Now &rarr;</a>
      <button className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
};

export default Navbar;

