import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

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
  }, []);

  return (
    <nav id="mainNav" style={{ boxShadow: scrolled ? '0 4px 30px rgba(15,14,11,.08)' : 'none' }}>
      <div className="nav-logo">
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
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
};

export default Navbar;
