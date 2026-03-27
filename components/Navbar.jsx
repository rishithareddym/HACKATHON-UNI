<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
=======
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
>>>>>>> c6d1e4ee1b7b69940e3222b938f3964297e5aaeb

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
<<<<<<< HEAD
    return () => window.removeEventListener('scroll', handleScroll);
=======

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('id'));
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(sec => observer.observe(sec));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(sec => observer.unobserve(sec));
    };
>>>>>>> c6d1e4ee1b7b69940e3222b938f3964297e5aaeb
  }, []);

  return (
    <nav id="mainNav" style={{ boxShadow: scrolled ? '0 4px 30px rgba(15,14,11,.08)' : 'none' }}>
      <div className="nav-logo">
<<<<<<< HEAD
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
=======
        <div className="logo-mark">N</div>
        <div>
          <div className="logo-text">NEXUS UNIVERSITY</div>
          <span className="logo-sub">Est. 1968 · Excellence in Innovation</span>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#academics" className={activeSection === 'academics' ? 'active' : ''}>Academics</a></li>
        <li><a href="#alumni" className={activeSection === 'alumni' ? 'active' : ''}>Alumni</a></li>
        <li><a href="#research" className={activeSection === 'research' ? 'active' : ''}>Research</a></li>
        <li><a href="#campus" className={activeSection === 'campus' ? 'active' : ''}>Campus</a></li>
        <li><a href="#admissions" className={activeSection === 'admissions' ? 'active' : ''}>Admissions</a></li>
        <li><a href="#events" className={activeSection === 'events' ? 'active' : ''}>Events</a></li>
      </ul>
      <a href="#admissions" className="nav-cta">Apply Now &rarr;</a>
      <button className="hamburger" id="hamburger">
>>>>>>> c6d1e4ee1b7b69940e3222b938f3964297e5aaeb
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
<<<<<<< HEAD
}
=======
};

export default Navbar;
>>>>>>> c6d1e4ee1b7b69940e3222b938f3964297e5aaeb
