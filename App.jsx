import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apply from './pages/Apply';
import { Chatbot } from './components/Miscellaneous';
import JumpNav from './components/JumpNav';

import './App.css';

export default function App() {
  const location = useLocation();

  // Custom Cursor Logic
  useEffect(() => {
    const cur = document.querySelector('.cur');
    const ring = document.querySelector('.cur-ring');
    
    const moveCursor = (e) => {
      if (!cur || !ring) return;
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
      setTimeout(() => {
        if(ring) {
          ring.style.left = e.clientX + 'px';
          ring.style.top = e.clientY + 'px';
        }
      }, 50);
    };

    const handleHoverIn = () => { if(cur) cur.classList.add('big'); if(ring) ring.classList.add('big'); };
    const handleHoverOut = () => { if(cur) cur.classList.remove('big'); if(ring) ring.classList.remove('big'); };

    window.addEventListener('mousemove', moveCursor);
    
    const attachInteractiveHovers = () => {
      document.querySelectorAll('a, button, .tour-spot, .map-cat, .course-btn, .mb-box, input, select, textarea').forEach(el => {
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    };
    
    attachInteractiveHovers();
    
    const mutationObserver = new MutationObserver(() => attachInteractiveHovers());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      mutationObserver.disconnect();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <div className="cur"></div>
      <div className="cur-ring"></div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>

      <footer id="admissions" style={{ 
        background: 'var(--ink)', 
        padding: '5rem 4rem 3rem', 
        color: 'rgba(255,255,255,0.4)', 
        fontSize: '.75rem', 
        textAlign: 'center' 
      }}>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '2.5rem', color: '#fff', marginBottom: '.5rem', fontStyle: 'italic' }}>B</div>
        <div style={{ color: '#fff', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: '"Cabinet Grotesk", sans-serif' }}>BMS College of Engineering</div>
        <p style={{ letterSpacing: '.05em', marginBottom: '2rem' }}>Est 1946 &middot; Excellence in Innovation &middot; Shape Tomorrow</p>
        
        {location.pathname === '/' && (
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <Link to="/apply" style={{ color: '#fff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em' }}>Apply Now</Link>
            <a href="#campus" style={{ color: '#fff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em' }}>Virtual Visit</a>
            <a href="#alumni" style={{ color: '#fff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em' }}>Alumni</a>
          </div>
        )}
        
        <div style={{ height: '1px', background: 'rgba(255,255,255,.08)', margin: '0 auto 2rem', maxWidth: '800px' }}></div>
        <p>&copy; {new Date().getFullYear()} BMS College of Engineering. All rights reserved. Built for the future.</p>
      </footer>

      <Chatbot />
      {location.pathname === '/' && <JumpNav />}
    </div>
  );
}
