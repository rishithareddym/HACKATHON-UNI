import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEventById } from '../../components/events/eventsData';
import EventRegistrationForm from '../../components/events/EventRegistrationForm';

export default function EventRegister() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const event = useMemo(() => getEventById(eventId), [eventId]);
  const [success, setSuccess] = useState(false);

  const onSuccess = () => {
    setSuccess(true);
  };

  return (
    <section className="eventsregister-section register-page-animate">
      <div className="eventsregister-wrap">
        <div className="eventsregister-head">
          <div className="career-breadcrumb" style={{ marginBottom: '1rem' }}>
            <button
              type="button"
              className="career-breadcrumb-link"
              onClick={() => navigate('/events')}
            >
              Events
            </button>
            <span className="career-breadcrumb-sep">/</span>
            <span>{event?.title || 'Event'}</span>
            <span className="career-breadcrumb-sep">/</span>
            <span>Register</span>
          </div>

          <h2 className="section-title" style={{ marginBottom: '.6rem' }}>
            Register for <strong>{event?.title ? event.title : 'this event'}</strong>
          </h2>
          <p className="section-sub" style={{ maxWidth: 680 }}>
            Fill in your details and submit. We will confirm your registration.
          </p>
        </div>

        <div className="eventsregister-card">
          {success && (
            <div className="event-reg-success" role="status" aria-live="polite">
              Registered successfully
            </div>
          )}

          <EventRegistrationForm event={event} onSuccess={onSuccess} />

          <div className="eventsregister-actions">
            <button type="button" className="apply-secondary" onClick={() => navigate('/events')}>
              Back to Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

