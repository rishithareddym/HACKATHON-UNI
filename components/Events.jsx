import React, { useState, useEffect } from 'react';

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 22, hours: 14, mins: 37, secs: 0 });

  useEffect(() => {
    const target = new Date('2026-04-18T09:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const d = target - now;
      if (d <= 0) return;
      
      setTimeLeft({
        days: Math.floor(d / (1000 * 60 * 60 * 24)),
        hours: Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((d % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((d % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="events-section" id="events">
      <div className="section-eyebrow">Events & Calendar</div>
      <h2 className="section-title">Something's always <strong>happening.</strong></h2>

      <div className="events-layout">
        <div className="event-list">
          <div className="event-item">
            <div className="ev-date"><div className="ev-day">18</div><div className="ev-month">Apr</div></div>
            <div>
              <div className="ev-title">NEXUS Hackathon 2026 &mdash; Browser Battle</div>
              <div className="ev-meta"><span>📍 Innovation Hub, Block C</span><span>⏱ 48 Hours</span></div>
            </div>
            <span className="ev-tag upcoming">Upcoming</span>
          </div>
          <div className="event-item">
            <div className="ev-date"><div className="ev-day">22</div><div className="ev-month">Apr</div></div>
            <div>
              <div className="ev-title">Annual Research Symposium</div>
              <div className="ev-meta"><span>📍 Main Auditorium</span><span>⏱ 9AM &ndash; 6PM</span></div>
            </div>
            <span className="ev-tag">Academic</span>
          </div>
          <div className="event-item">
            <div className="ev-date"><div className="ev-day">05</div><div className="ev-month">May</div></div>
            <div>
              <div className="ev-title">Alumni Networking Night 2026</div>
              <div className="ev-meta"><span>📍 Engineering Quad</span><span>⏱ 6PM &ndash; 10PM</span></div>
            </div>
            <span className="ev-tag">Alumni</span>
          </div>
          <div className="event-item">
            <div className="ev-date"><div className="ev-day">10</div><div className="ev-month">May</div></div>
            <div>
              <div className="ev-title">International Cultural Fest &mdash; NEXUS MELA</div>
              <div className="ev-meta"><span>📍 Campus Grounds</span><span>⏱ 3 Days</span></div>
            </div>
            <span className="ev-tag">Cultural</span>
          </div>
          <div className="event-item">
            <div className="ev-date"><div className="ev-day">20</div><div className="ev-month">Jun</div></div>
            <div>
              <div className="ev-title">Convocation Ceremony &mdash; Class of 2026</div>
              <div className="ev-meta"><span>📍 Main Auditorium</span><span>⏱ 10AM</span></div>
            </div>
            <span className="ev-tag">Official</span>
          </div>
        </div>

        <div className="upcoming-card">
          <div className="uc-eyebrow">Next Major Event</div>
          <div className="uc-title">Browser Battle Hackathon 2026</div>
          <div className="uc-date">📅 April 18–20, 2026</div>
          <div className="uc-loc">📍 Innovation Hub, NEXUS Campus</div>
          <div className="uc-timer">
            <div className="uc-t"><div className="uc-t-num">{String(timeLeft.days).padStart(2, '0')}</div><div className="uc-t-lbl">Days</div></div>
            <div className="uc-t"><div className="uc-t-num">{String(timeLeft.hours).padStart(2, '0')}</div><div className="uc-t-lbl">Hrs</div></div>
            <div className="uc-t"><div className="uc-t-num">{String(timeLeft.mins).padStart(2, '0')}</div><div className="uc-t-lbl">Min</div></div>
            <div className="uc-t"><div className="uc-t-num">{String(timeLeft.secs).padStart(2, '0')}</div><div className="uc-t-lbl">Sec</div></div>
          </div>
          <a href="#" className="quiz-btn" style={{ fontSize: '.75rem', padding: '.7rem 1.5rem', display: 'inline-block' }}>Register for Event &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default Events;
