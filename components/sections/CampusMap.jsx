import React, { useMemo, useState } from 'react';

const buildings = [
  { id: 'turing', name: 'Turing Block', label: 'Turing', type: 'cat-academic', top: '20%', left: '30%' },
  { id: 'bose', name: 'Bose Lab Complex', label: 'Bose Lab', type: 'cat-lab', top: '35%', left: '50%' },
  { id: 'admin', name: 'Library & Admin', label: 'Admin', type: 'cat-admin', top: '50%', left: '40%' },
  { id: 'hostel-a', name: 'Hostel Block A', label: 'Hostel A', type: 'cat-hostel', top: '65%', left: '25%' },
  { id: 'hostel-b', name: 'Hostel Block B', label: 'Hostel B', type: 'cat-hostel', top: '70%', left: '45%' },
  { id: 'sports', name: 'Sports Arena', label: 'Sports', type: 'cat-sports', top: '40%', left: '75%' }
];

const iconByType = {
  'cat-academic': '🏫',
  'cat-lab': '🔬',
  'cat-admin': '🏛️',
  'cat-hostel': '🏠',
  'cat-sports': '🏟️',
};

function percentToNumber(pct) {
  return Number(String(pct).replace('%', '').trim());
}

export default function CampusMap() {
  const [activeCat, setActiveCat] = useState('all');
  const [selectedId, setSelectedId] = useState('admin');

  const base = useMemo(() => buildings.find((b) => b.id === 'admin') || buildings[0], []);
  const selected = useMemo(() => buildings.find((b) => b.id === selectedId) || base, [selectedId, base]);

  const points = useMemo(() => {
    // Map points to a fixed viewBox space (0..1000, 0..600) for clean SVG paths.
    const W = 1000;
    const H = 600;
    const map = {};
    buildings.forEach((b) => {
      const x = (percentToNumber(b.left) / 100) * W;
      const y = (percentToNumber(b.top) / 100) * H;
      map[b.id] = { x, y };
    });
    return map;
  }, []);

  const visibleBuildings = useMemo(() => {
    return buildings.filter((b) => activeCat === 'all' || activeCat === b.type);
  }, [activeCat]);

  const selectedPath = useMemo(() => {
    const a = points[base.id];
    const b = points[selected.id];
    if (!a || !b) return null;
    // Quadratic curve control point for an organic path.
    const cx = (a.x + b.x) / 2 + (b.x - a.x) * 0.12;
    const cy = (a.y + b.y) / 2 - 90;
    return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
  }, [points, base.id, selected.id]);

  return (
    <section className="map-section">
      <div className="section-eyebrow">Interactive Campus Map</div>
      <h2 className="section-title">A city within a <strong>city.</strong></h2>
      <p className="section-sub">A clean illustrated map view — hover pins for labels, click to highlight and trace routes.</p>

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

        <div className="map-canvas illustrated">
          <svg className="map-illustration" viewBox="0 0 1000 600" aria-hidden="true">
            {/* Soft zones */}
            <path className="map-zone zone-academic" d="M120 80 C 220 20, 420 40, 520 130 C 590 190, 520 260, 380 250 C 240 240, 140 190, 120 80 Z" />
            <path className="map-zone zone-lab" d="M520 160 C 610 120, 760 150, 830 230 C 900 310, 810 380, 670 360 C 560 340, 500 260, 520 160 Z" />
            <path className="map-zone zone-admin" d="M320 270 C 430 240, 560 270, 600 360 C 640 450, 520 520, 390 500 C 270 480, 240 340, 320 270 Z" />
            <path className="map-zone zone-hostel" d="M140 360 C 220 330, 320 360, 360 440 C 400 520, 330 560, 230 560 C 120 560, 70 450, 140 360 Z" />
            <path className="map-zone zone-sports" d="M700 360 C 790 320, 920 350, 940 450 C 960 550, 820 590, 720 540 C 640 500, 620 400, 700 360 Z" />

            {/* Roads/paths (subtle) */}
            <path className="map-road" d="M 300 120 C 420 170, 520 210, 600 300" />
            <path className="map-road dotted" d="M 260 420 C 360 400, 470 390, 560 420" />
            <path className="map-road" d="M 560 420 C 650 430, 740 450, 820 480" />

            {/* Highlighted navigation trail from Admin to selected */}
            {selectedPath && (
              <>
                <path className="map-trail" d={selectedPath} />
                <circle className="map-trail-dot">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path={selectedPath} />
                </circle>
              </>
            )}
          </svg>

          {visibleBuildings.map((b) => (
            <button
              key={b.id}
              type="button"
              className={`map-pin ${b.type} ${selectedId === b.id ? 'selected' : ''}`}
              style={{ top: b.top, left: b.left }}
              onClick={() => setSelectedId(b.id)}
              aria-label={b.name}
            >
              <span className="pin-bubble">{iconByType[b.type] || '📍'}</span>
              <span className="pin-label">{b.label}</span>
            </button>
          ))}

          <div className="map-detail">
            <div className="map-detail-title">{selected.name}</div>
            <div className="map-detail-sub">
              {selected.type === 'cat-academic' ? 'Academic Zone' :
               selected.type === 'cat-lab' ? 'Research Zone' :
               selected.type === 'cat-admin' ? 'Admin Zone' :
               selected.type === 'cat-hostel' ? 'Hostel Zone' :
               selected.type === 'cat-sports' ? 'Sports Zone' : 'Campus'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
