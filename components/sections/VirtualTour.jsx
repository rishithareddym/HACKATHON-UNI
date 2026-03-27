import React, { useState } from 'react';

const spots = [
  {
    id: 'library',
    name: 'Central Library',
    type: 'Academic',
    emoji: '📚',
    desc: 'Quiet study zones, digital resources, and collaborative pods for deep work.',
    photo:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'lab',
    name: 'Quantum AI Lab',
    type: 'Research',
    emoji: '🧪',
    desc: 'Hands-on labs where students build models, deploy systems, and run experiments.',
    photo:
      'https://images.unsplash.com/photo-1581093588401-22ddeb2f0d9b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'sports',
    name: 'Olympic Sports Complex',
    type: 'Recreation',
    emoji: '🏟️',
    desc: 'Indoor arenas, modern training facilities, and outdoor grounds for every sport.',
    photo:
      'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'hostel',
    name: 'Student Housing',
    type: 'Living',
    emoji: '🏠',
    desc: 'Safe, comfortable residences with study lounges, high-speed Wi‑Fi, and community spaces.',
    photo:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'incubation',
    name: 'Startup Incubator',
    type: 'Innovation',
    emoji: '🚀',
    desc: 'Mentors, funding pathways, and maker spaces where ideas become companies.',
    photo:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
  },
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
            <div className="tour-scene">
              <img
                className="tour-photo"
                src={activeSpot.photo}
                alt={activeSpot.name}
                loading="lazy"
              />
              <div className="tour-photo-overlay"></div>
              <div className="tour-photo-text">
                <div className="tour-photo-type">{activeSpot.type}</div>
                <div className="tour-scene-name">{activeSpot.name}</div>
                <div className="tour-scene-desc">{activeSpot.desc}</div>
              </div>
            </div>
            <div className="tour-controls">
              <button className="tour-ctrl">Explore More</button>
              <button className="tour-ctrl">View 360&deg;</button>
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
                <div className="spot-thumb">
                  <img src={spot.photo} alt={spot.name} loading="lazy" />
                </div>
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
