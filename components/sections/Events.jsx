import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../events/EventCard';
import { eventsData } from '../events/eventsData';

export default function Events() {
  const navigate = useNavigate();

  // Keep the section compact (show a few), full list is on /events.
  const events = eventsData.slice(0, 4);

  return (
    <section className="events-section" id="events">
      <div className="section-eyebrow">Campus Life</div>
      <h2 className="section-title">What's happening <strong>on campus.</strong></h2>
      <p className="section-sub">From 48-hour hackathons to guest lectures by Nobel laureates, the BMSCE campus is always buzzing with energy.</p>

      <div className="events-layout">
        <div className="event-list">
          {events.map((ev, i) => (
            <div className={`reveal reveal-delay-${i + 1}`} key={ev.id}>
              <EventCard event={ev} onRegister={() => navigate(`/events/${ev.id}/register`)} />
            </div>
          ))}

          <div className="events-viewmore-wrap">
            <button
              type="button"
              className="events-viewmore"
              onClick={() => navigate('/events')}
            >
              View More Events
            </button>
          </div>
        </div>

        <div className="upcoming-card reveal reveal-delay-2">
          <div className="uc-eyebrow">Mega Event</div>
          <div className="uc-title">TechSymposium 2025</div>
          <div className="uc-date">&#128197; Jan 15 - 17, 2025</div>
          <div className="uc-loc">&#128205; Entire Campus</div>
          
          <div style={{ fontSize: '.6rem', textTransform: 'uppercase', letterSpacing: '.15em', color: 'rgba(255,255,255,.5)', marginBottom: '.5rem', fontWeight: 700 }}>Starts In</div>
          <div className="uc-timer">
            <div className="uc-t">
              <div className="uc-t-num">42</div>
              <div className="uc-t-lbl">Days</div>
            </div>
            <div className="uc-t">
              <div className="uc-t-num">14</div>
              <div className="uc-t-lbl">Hrs</div>
            </div>
            <div className="uc-t">
              <div className="uc-t-num">30</div>
              <div className="uc-t-lbl">Min</div>
            </div>
            <div className="uc-t">
              <div className="uc-t-num">15</div>
              <div className="uc-t-lbl">Sec</div>
            </div>
          </div>

          <button className="nav-cta" style={{ background: 'var(--gold)', color: 'var(--deep)', width: '100%', padding: '1rem' }}>Register Now</button>
        </div>
      </div>
    </section>
  );
}
