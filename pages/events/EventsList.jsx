import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../../components/events/EventCard';
import { eventsData } from '../../components/events/eventsData';

export default function EventsList() {
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  }, []);

  return (
    <section className="eventslist-section events-page-animate">
      <div className="eventslist-wrap">
        <div className="section-eyebrow">Campus Life</div>
        <h2 className="section-title">
          Events <strong>&</strong> Registrations
        </h2>
        <p className="section-sub">
          Explore all upcoming campus events and register in a few seconds.
        </p>

        <div className="eventslist-grid">
          {eventsData.map((ev) => (
            <div key={ev.id} className="eventslist-card reveal reveal-delay-1">
              <EventCard event={ev} onRegister={() => navigate(`/events/${ev.id}/register`)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

