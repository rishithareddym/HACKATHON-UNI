import React, { useEffect, useMemo, useRef, useState } from 'react';

const CLUBS = [
  {
    id: 'mountaineering',
    name: 'Mountaineering Club',
    desc: 'Adventure through treks, outdoor expeditions, and endurance training.',
    photo:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'rotaract',
    name: 'Rotaract Club',
    desc: 'Lead impactful social service initiatives and community projects.',
    photo:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'dance',
    name: 'Dance Club',
    desc: 'Express creativity through dynamic performances, workshops, and showcases.',
    photo:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'coding',
    name: 'Coding Club',
    desc: 'Innovate, build, and collaborate on hackathons and real dev projects.',
    photo:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'photography',
    name: 'Photography Club',
    desc: 'Capture campus stories through photo-walks, edits, and exhibitions.',
    photo:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'music',
    name: 'Music & Cultural Club',
    desc: 'Create unforgettable nights with music, drama, and cultural fests.',
    photo:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function ClubsCarousel() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(CLUBS[0].id);

  const activeIndex = useMemo(
    () => Math.max(0, CLUBS.findIndex((c) => c.id === active)),
    [active],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const cards = Array.from(el.querySelectorAll('[data-club-id]'));
      if (!cards.length) return;

      const center = el.scrollLeft + el.clientWidth / 2;
      let best = { id: active, dist: Number.POSITIVE_INFINITY };

      cards.forEach((c) => {
        const left = c.offsetLeft;
        const w = c.clientWidth;
        const cardCenter = left + w / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < best.dist) best = { id: c.getAttribute('data-club-id'), dist };
      });

      if (best.id && best.id !== active) setActive(best.id);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [active]);

  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-club-id]');
    const step = card ? card.clientWidth + 18 : 320;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="clubs-section" id="clubs">
      <div className="section-eyebrow">Clubs</div>
      <h2 className="section-title">
        Student communities that <strong>move fast.</strong>
      </h2>
      <p className="section-sub">
        Swipe through clubs and communities — tap to highlight. No navigation, just vibes.
      </p>

      <div className="clubs-shell reveal">
        <button className="clubs-nav left" type="button" onClick={() => scrollByCards(-1)} aria-label="Previous clubs">
          &larr;
        </button>

        <div className="clubs-track" ref={scrollerRef}>
          {CLUBS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`club-card ${active === c.id ? 'active' : ''}`}
              data-club-id={c.id}
              onClick={() => setActive(c.id)}
            >
              <div className="club-media">
                <img src={c.photo} alt={c.name} loading="lazy" />
                <div className="club-overlay" />
                <div className="club-text">
                  <div className="club-name">{c.name}</div>
                  <div className="club-desc">{c.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button className="clubs-nav right" type="button" onClick={() => scrollByCards(1)} aria-label="Next clubs">
          &rarr;
        </button>
      </div>

      <div className="clubs-indicator reveal reveal-delay-1" aria-hidden="true">
        <span className="clubs-indicator-label">Active</span>
        <span className="clubs-indicator-value">
          {CLUBS[activeIndex]?.name}
        </span>
      </div>
    </section>
  );
}

