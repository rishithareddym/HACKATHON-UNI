import React, { useState } from 'react';

const spots = [
  { id: 'library', name: 'Central Library', type: 'Academic', emoji: '\ud83d\udcda', desc: '500,000+ volumes, 24/7 access, and collaborative study pods.', img: 'linear-gradient(135deg,#1a2744,#0f0e1a)' },
  { id: 'lab', name: 'Quantum AI Lab', type: 'Research', emoji: '\ud83e\uddec', desc: 'State-of-the-art supercomputers for deep learning and robotics.', img: 'linear-gradient(135deg,#4a2d8c,#2d1a44)' },
  { id: 'sports', name: 'Olympic Sports Complex', type: 'Recreation', emoji: '\ud83c\udfc3\u200d\u2642\ufe0f', desc: 'Indoor stadium, 50m pool, and synthetic track.', img: 'linear-gradient(135deg,#2d8c4e,#1a442a)' },
  { id: 'hostel', name: 'Student Housing', type: 'Living', emoji: '\ud83c\udfe2', desc: 'Premium AC rooms, high-speed Wi-Fi, and global cuisine.', img: 'linear-gradient(135deg,#c8962a,#603c00)' },
  { id: 'incubation', name: 'Startup Incubator', type: 'Innovation', emoji: '\ud83d\ude80', desc: 'Where student ideas turn into funded companies.', img: 'linear-gradient(135deg,#e84545,#6a1a1a)' }
];

export default function VirtualTour() {
  const [activeSpot, setActiveSpot] = useState(spots[0]);

  const currentIndex = spots.findIndex(s => s.id === activeSpot.id);

  const prevSpot = () => {
    setActiveSpot(spots[(currentIndex - 1 + spots.length) % spots.length]);
  };

  const nextSpot = () => {
    setActiveSpot(spots[(currentIndex + 1) % spots.length]);
  };

  return (
    <section className="tour-section" id="campus">
      <div className="tour-layout">
        <div>
          <div className="section-eyebrow" style={{ color: 'var(--gold2)' }}>Virtual Campus Tour</div>
          <h2 className="section-title">A campus designed for <strong style={{ color: '#fff' }}>brilliance.</strong></h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,.5)' }}>Take a guided virtual tour of our 400-acre smart campus featuring world-class labs, green spaces, and vibrant student hubs.</p>

          <div className="tour-viewer">
            <div className="tour-scene" style={{ background: activeSpot.img }}>
              <div className="tour-scene-inner">
                <span className="tour-scene-emoji">{activeSpot.emoji}</span>
                <div className="tour-scene-name">{activeSpot.name}</div>
                <div className="tour-scene-desc">{activeSpot.desc}</div>
              </div>
            </div>
            <div className="tour-controls">
              <button className="tour-ctrl">360&deg; View</button>
              <button className="tour-ctrl">Info</button>
            </div>
            <div className="tour-nav-btns">
              <button className="tour-btn" onClick={prevSpot}>&larr;</button>
              <button className="tour-btn" onClick={nextSpot}>&rarr;</button>
            </div>
          </div>
        </div>

        <div>
          <div className="tour-spots">
            {spots.map((spot) => (
              <div 
                key={spot.id} 
                className={`tour-spot ${activeSpot.id === spot.id ? 'active-spot' : ''}`}
                onClick={() => setActiveSpot(spot)}
              >
                <div className="spot-icon">{spot.emoji}</div>
                <div>
                  <div className="spot-name">{spot.name}</div>
                  <div className="spot-type">{spot.type}</div>
                </div>
                <div className="spot-arrow">&rarr;</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
