import React from 'react';

export default function EventCard({ event, onRegister }) {
  return (
    <div className="eventcard">
      <div className="eventcard-left">
        <div className="eventcard-date">
          <div className="eventcard-day">{event.date.day}</div>
          <div className="eventcard-month">{event.date.month}</div>
        </div>
      </div>

      <div className="eventcard-body">
        <div className="eventcard-title">{event.title}</div>
        <div className="eventcard-meta">
          <span className="eventcard-meta-item">{event.time}</span>
          <span className="eventcard-meta-sep">•</span>
          <span className="eventcard-meta-item">{event.loc}</span>
        </div>

        <div className="eventcard-tags">
          {event.tags.map((t) => (
            <span key={t} className="ev-tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="eventcard-actions">
        <button className="eventcard-register" type="button" onClick={onRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

