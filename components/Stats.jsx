import React, { useEffect, useRef, useState } from 'react';

const CountUp = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let timer;
          let current = 0;
          const step = target / (duration / 25);
          timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, 25);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        <div className="stat-block reveal">
          <span className="stat-number">
            <CountUp target={28000} />
            <span className="stat-suffix">+</span>
          </span>
          <span className="stat-label">Students Enrolled</span>
        </div>
        <div className="stat-block reveal reveal-delay-1">
          <span className="stat-number">
            <CountUp target={94} />
            <span className="stat-suffix">%</span>
          </span>
          <span className="stat-label">Placement Rate</span>
        </div>
        <div className="stat-block reveal reveal-delay-2">
          <span className="stat-number">
            <CountUp target={180} />
            <span className="stat-suffix">+</span>
          </span>
          <span className="stat-label">Programs Offered</span>
        </div>
        <div className="stat-block reveal reveal-delay-3">
          <span className="stat-number">
            <CountUp target={75} />
            <span className="stat-suffix">M</span>
          </span>
          <span className="stat-label">Research Funding ($)</span>
        </div>
        <div className="stat-block reveal reveal-delay-4">
          <span className="stat-number">
            <CountUp target={4200} />
            <span className="stat-suffix">+</span>
          </span>
          <span className="stat-label">Alumni at Fortune 500</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
