import React, { useState } from 'react';

const spots = [
  { icon: '🏛️', name: 'Main Academic Block', type: 'Academic', desc: '12-floor iconic structure housing 80 lecture halls and faculty offices. Built 1972.' },
  { icon: '🔬', name: 'Advanced Research Lab', type: 'Research', desc: 'State-of-the-art facility with scanning electron microscopes and quantum computing rigs.' },
  { icon: '📚', name: 'Central Library', type: 'Academic', desc: '2M+ volumes, 24/7 access, 40 group study rooms, and digital archives from 50+ journals.' },
  { icon: '🏃', name: 'Sports Complex', type: 'Sports', desc: 'Olympic-size pool, 6 courts, athletics track, indoor gym, and student wellness center.' },
  { icon: '🍽️', name: 'Student Union & Cafeteria', type: 'Student Life', desc: 'Multi-cuisine food courts, student clubs hub, and the famous rooftop lounge.' },
  { icon: '🎭', name: 'Cultural Centre', type: 'Arts', desc: '1200-seat auditorium, art galleries, music studios, and rehearsal spaces.' },
  { icon: '🏠', name: 'Hostel Campus', type: 'Residence', desc: '8 residential blocks for 6,000 students. AC rooms, laundry, and 24/7 security.' },
  { icon: '💡', name: 'Innovation Hub', type: 'Startup', desc: 'Incubator for 40+ active startups, with mentors-in-residence and seed funding access.' }
];

const VirtualTour = () => {
  const [activeSpot, setActiveSpot] = useState(0);

  const handleNext = () => setActiveSpot(prev => (prev + 1) % spots.length);
  const handlePrev = () => setActiveSpot(prev => (prev - 1 + spots.length) % spots.length);

  const current = spots[activeSpot];

  return (
    <section className="tour-section" id="campus">
      <div className="tour-layout">
        <div>
          <div className="section-eyebrow">Virtual Campus Tour</div>
          <h2 className="section-title">Explore every corner of NEXUS.</h2>
          <p className="section-sub">Walk through our 400-acre campus from anywhere in the world. Click on any location to take a virtual visit.</p>
          <div className="tour-viewer">
            <div className="tour-scene">
              <div className="tour-scene-inner">
                <span className="tour-scene-emoji">{current.icon}</span>
                <div className="tour-scene-name">{current.name}</div>
                <div className="tour-scene-desc">{current.desc}</div>
              </div>
            </div>
            <div className="tour-controls">
              <button className="tour-ctrl" onClick={handlePrev}>&larr; Prev</button>
              <button className="tour-ctrl" onClick={handleNext}>Next &rarr;</button>
            </div>
            <div className="tour-nav-btns">
              {spots.map((_, i) => (
                <button 
                  key={i} 
                  className={`tour-btn ${i === activeSpot ? 'active-btn' : ''}`}
                  onClick={() => setActiveSpot(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="tour-spots">
            {spots.map((s, i) => (
              <div 
                key={i} 
                className={`tour-spot ${i === activeSpot ? 'active-spot' : ''}`} 
                onClick={() => setActiveSpot(i)}
              >
                <span className="spot-icon">{s.icon}</span>
                <div>
                  <div className="spot-name">{s.name}</div>
                  <div className="spot-type">{s.type}</div>
                </div>
                <span className="spot-arrow">&rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
