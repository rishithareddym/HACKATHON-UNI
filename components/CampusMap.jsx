import React, { useState } from 'react';

const buildings = [
  { icon: '🏛️', name: 'Main Academic Block', cat: 'cat-academic', top: 40, left: 30, info: 'Main academic building — 80 lecture halls' },
  { icon: '🔬', name: 'Research Lab A', cat: 'cat-lab', top: 35, left: 55, info: 'Advanced Research Lab — Physics & Chemistry' },
  { icon: '📚', name: 'Central Library', cat: 'cat-academic', top: 55, left: 20, info: '2M+ volumes, open 24/7' },
  { icon: '🏃', name: 'Sports Complex', cat: 'cat-sports', top: 70, left: 60, info: 'Olympic pool + gym + tracks' },
  { icon: '🏠', name: 'Boys Hostel', cat: 'cat-hostel', top: 20, left: 75, info: 'Block A–D · 3200 students' },
  { icon: '🏠', name: 'Girls Hostel', cat: 'cat-hostel', top: 75, left: 15, info: 'Block E–G · 2800 students' },
  { icon: '🏢', name: 'Admin Block', cat: 'cat-admin', top: 15, left: 40, info: 'Admissions, Registrar, Finance' },
  { icon: '💡', name: 'Innovation Hub', cat: 'cat-lab', top: 60, left: 40, info: '40+ startups incubated' },
  { icon: '🎭', name: 'Cultural Centre', cat: 'cat-academic', top: 45, left: 70, info: '1200-seat auditorium' },
  { icon: '⚽', name: 'Football Ground', cat: 'cat-sports', top: 80, left: 45, info: 'FIFA-standard pitch' },
];

const CampusMap = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredBuilding, setHoveredBuilding] = useState(null);

  const categories = [
    { id: 'all', name: 'All Buildings', count: 18, color: 'var(--deep)' },
    { id: 'cat-academic', name: 'Academic', count: 6, color: '#1a2744' },
    { id: 'cat-sports', name: 'Sports & Wellness', count: 4, color: '#2d8c4e' },
    { id: 'cat-admin', name: 'Administration', count: 3, color: '#c8962a' },
    { id: 'cat-hostel', name: 'Hostels', count: 3, color: '#8c4a2a' },
    { id: 'cat-lab', name: 'Research Labs', count: 2, color: '#4a2d8c' },
  ];

  return (
    <section className="map-section" id="map">
      <div className="section-eyebrow">Interactive Campus Map</div>
      <h2 className="section-title">Find your way <strong>around.</strong></h2>
      <p className="section-sub">Explore buildings, labs, and facilities across our 400-acre campus. Click any building for details.</p>

      <div className="map-layout">
        <div>
          <div className="map-categories">
            <div className="map-cat" style={{ padding: '.6rem 1rem', fontSize: '.75rem', fontWeight: 800, color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'default' }}>
              Filter by type
            </div>
            {categories.map(c => (
              <div 
                key={c.id} 
                className={`map-cat ${filter === c.id ? 'active' : ''}`} 
                onClick={() => setFilter(c.id)}
              >
                <div className="cat-dot" style={{ background: c.color }}></div>
                <span className="cat-name">{c.name}</span>
                <span className="cat-count">{c.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="map-canvas">
          <div className="map-bg-grid"></div>
          
          <div className={`map-tooltip ${hoveredBuilding ? 'show' : ''}`} style={{
            left: hoveredBuilding ? `${Math.min(hoveredBuilding.left, 75)}%` : 0,
            top: hoveredBuilding ? `${hoveredBuilding.top - 15}%` : 0
          }}>
            {hoveredBuilding && (
              <>
                <strong>{hoveredBuilding.name}</strong><br />
                <span style={{ fontSize: '.65rem', opacity: .7 }}>{hoveredBuilding.info}</span>
              </>
            )}
          </div>

          {buildings.map((b, i) => (
            <div 
              key={i} 
              className={`map-building ${b.cat}`} 
              style={{
                top: `${b.top}%`, 
                left: `${b.left}%`,
                opacity: filter === 'all' || filter === b.cat ? 1 : 0.15
              }}
              onMouseEnter={() => setHoveredBuilding(b)}
              onMouseLeave={() => setHoveredBuilding(null)}
            >
              <div className="mb-box">{b.icon}</div>
              <div className="mb-label">{b.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusMap;
