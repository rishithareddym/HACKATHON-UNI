import React, { useState } from 'react';

const buildings = [
  { id: 1, name: 'Turing Block', label: 'Turing', type: 'cat-academic', top: '20%', left: '30%' },
  { id: 2, name: 'Bose Lab Complex', label: 'Bose', type: 'cat-lab', top: '35%', left: '50%' },
  { id: 3, name: 'Library & Admin', label: 'Admin', type: 'cat-admin', top: '50%', left: '40%' },
  { id: 4, name: 'Hostel Block A', label: 'Hostel A', type: 'cat-hostel', top: '65%', left: '25%' },
  { id: 5, name: 'Hostel Block B', label: 'Hostel B', type: 'cat-hostel', top: '70%', left: '45%' },
  { id: 6, name: 'Sports Arena', label: 'Sports', type: 'cat-sports', top: '40%', left: '75%' }
];

export default function CampusMap() {
  const [activeCat, setActiveCat] = useState('all');

  return (
    <section className="map-section">
      <div className="section-eyebrow">Interactive Campus Map</div>
      <h2 className="section-title">A city within a <strong>city.</strong></h2>
      <p className="section-sub">Navigate our eco-friendly campus. Click on categories to filter buildings and facilities.</p>

      <div className="map-layout">
        <div className="map-categories">
          <button className={`map-cat ${activeCat === 'all' ? 'active' : ''}`} onClick={() => setActiveCat('all')}>
            <span className="cat-dot" style={{ background: '#0f0e0b' }}></span>
            <span className="cat-name">All Facilities</span>
            <span className="cat-count">48</span>
          </button>
          <button className={`map-cat ${activeCat === 'cat-academic' ? 'active' : ''}`} onClick={() => setActiveCat('cat-academic')}>
            <span className="cat-dot" style={{ background: '#1a2744' }}></span>
            <span className="cat-name">Academic Blocks</span>
            <span className="cat-count">12</span>
          </button>
          <button className={`map-cat ${activeCat === 'cat-lab' ? 'active' : ''}`} onClick={() => setActiveCat('cat-lab')}>
            <span className="cat-dot" style={{ background: '#4a2d8c' }}></span>
            <span className="cat-name">Research Labs</span>
            <span className="cat-count">24</span>
          </button>
          <button className={`map-cat ${activeCat === 'cat-hostel' ? 'active' : ''}`} onClick={() => setActiveCat('cat-hostel')}>
            <span className="cat-dot" style={{ background: '#8c4a2a' }}></span>
            <span className="cat-name">Hostels</span>
            <span className="cat-count">6</span>
          </button>
          <button className={`map-cat ${activeCat === 'cat-sports' ? 'active' : ''}`} onClick={() => setActiveCat('cat-sports')}>
            <span className="cat-dot" style={{ background: '#2d8c4e' }}></span>
            <span className="cat-name">Sports Areas</span>
            <span className="cat-count">4</span>
          </button>
        </div>

        <div className="map-canvas">
          <div className="map-bg-grid"></div>
          {buildings.map(b => (
            <div 
              key={b.id} 
              className={`map-building ${b.type}`} 
              style={{ 
                top: b.top, left: b.left,
                display: (activeCat === 'all' || activeCat === b.type) ? 'block' : 'none'
              }}
            >
              <div className="mb-box" title={b.name}>
                {b.type === 'cat-academic' ? '\ud83c\udfeb' : 
                 b.type === 'cat-lab' ? '\ud83d\udd2c' : 
                 b.type === 'cat-hostel' ? '\ud83c\udfe2' : 
                 b.type === 'cat-sports' ? '\u26bd' : '\ud83c\udfe0'}
              </div>
              <div className="mb-label">{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
