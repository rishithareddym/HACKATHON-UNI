import React, { useEffect, useRef, useState } from 'react';

const StatItem = ({ target, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        document.getElementById(`stat-block-${label}`).classList.add('visible');
        observer.disconnect();
        let cur = 0;
        const step = target / 60;
        const t = setInterval(() => {
          cur = Math.min(cur + step, target);
          setCount(Math.floor(cur));
          if (cur >= target) clearInterval(t);
        }, 25);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, label]);

  return (
    <div id={`stat-block-${label}`} className={`stat-block reveal ${delay}`} ref={ref}>
      <span className="stat-number">
        {count.toLocaleString()}
        <span className="stat-suffix">{suffix}</span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export default function StatsCounter() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        <StatItem target={28000} suffix="+" label="Students Enrolled" delay="" />
        <StatItem target={94} suffix="%" label="Placement Rate" delay="reveal-delay-1" />
        <StatItem target={180} suffix="+" label="Programs Offered" delay="reveal-delay-2" />
        <StatItem target={75} suffix="M" label="Research Funding ($)" delay="reveal-delay-3" />
        <StatItem target={4200} suffix="+" label="Alumni at Fortune 500" delay="reveal-delay-4" />
      </div>
    </section>
  );
}
