import React, { useState, useEffect } from 'react';

const careerData = {
  cse: {
    title: 'B.Tech CSE & AI', sub: '4-year program · 94% placement rate · Avg. ₹18 LPA starting CTC',
    flow: [
      [{ icon: '💻', title: 'Graduate', salary: 'Year 0', cls: 'root' }],
      [{ icon: '👨‍💻', title: 'Software Engineer', salary: '₹12–22 LPA', cls: '' }, { icon: '📊', title: 'Data Analyst', salary: '₹10–18 LPA', cls: '' }, { icon: '🔐', title: 'Security Engineer', salary: '₹14–24 LPA', cls: '' }],
      [{ icon: '🧠', title: 'Senior SWE', salary: '₹25–45 LPA', cls: 'highlight' }, { icon: '🤖', title: 'ML Engineer', salary: '₹28–50 LPA', cls: 'highlight' }, { icon: '🏗️', title: 'Tech Lead', salary: '₹35–60 LPA', cls: 'highlight' }],
      [{ icon: '🦄', title: 'Startup Founder', salary: 'Unlimited', cls: 'top' }, { icon: '🏢', title: 'VP Engineering', salary: '₹80L–1.5Cr', cls: 'top' }, { icon: '🔬', title: 'AI Researcher', salary: '₹60L–1.2Cr', cls: 'top' }]
    ]
  },
  bio: {
    title: 'B.Tech Biotechnology', sub: '4-year program · 78% placement rate · Avg. ₹12 LPA starting CTC',
    flow: [
      [{ icon: '🧬', title: 'Graduate', salary: 'Year 0', cls: 'root' }],
      [{ icon: '🔬', title: 'Research Assoc.', salary: '₹8–14 LPA', cls: '' }, { icon: '💊', title: 'Pharma Analyst', salary: '₹10–16 LPA', cls: '' }],
      [{ icon: '👩‍🔬', title: 'Sr. Scientist', salary: '₹18–30 LPA', cls: 'highlight' }, { icon: '🏥', title: 'Clinical Lead', salary: '₹20–35 LPA', cls: 'highlight' }],
      [{ icon: '🚀', title: 'Biotech Founder', salary: 'Unlimited', cls: 'top' }, { icon: '🏆', title: 'R&D Director', salary: '₹50–80 LPA', cls: 'top' }]
    ]
  },
  mba: {
    title: 'MBA Business Analytics', sub: '2-year program · 96% placement rate · Avg. ₹22 LPA starting CTC',
    flow: [
      [{ icon: '📊', title: 'MBA Graduate', salary: 'Year 0', cls: 'root' }],
      [{ icon: '📈', title: 'Consultant', salary: '₹18–28 LPA', cls: '' }, { icon: '💰', title: 'Fin. Analyst', salary: '₹16–24 LPA', cls: '' }],
      [{ icon: '🎯', title: 'Sr. Manager', salary: '₹35–55 LPA', cls: 'highlight' }, { icon: '📦', title: 'Product Manager', salary: '₹30–50 LPA', cls: 'highlight' }],
      [{ icon: '🏦', title: 'Partner / Director', salary: '₹80L–2Cr', cls: 'top' }, { icon: '🦁', title: 'CEO / Founder', salary: 'Unlimited', cls: 'top' }]
    ]
  },
  design: {
    title: 'B.Des Interaction Design', sub: '4-year program · 88% placement rate · Avg. ₹14 LPA starting CTC',
    flow: [
      [{ icon: '🎨', title: 'Des. Graduate', salary: 'Year 0', cls: 'root' }],
      [{ icon: '✏️', title: 'UI/UX Designer', salary: '₹10–18 LPA', cls: '' }, { icon: '🖼️', title: 'Visual Designer', salary: '₹8–14 LPA', cls: '' }],
      [{ icon: '🧩', title: 'Lead Designer', salary: '₹22–38 LPA', cls: 'highlight' }, { icon: '📱', title: 'Product Designer', salary: '₹25–42 LPA', cls: 'highlight' }],
      [{ icon: '🚀', title: 'Design Founder', salary: 'Unlimited', cls: 'top' }, { icon: '🌟', title: 'Design Director', salary: '₹55–90 LPA', cls: 'top' }]
    ]
  },
  ee: {
    title: 'B.Tech Electrical Engineering', sub: '4-year program · 86% placement rate · Avg. ₹15 LPA starting CTC',
    flow: [
      [{ icon: '⚡', title: 'EE Graduate', salary: 'Year 0', cls: 'root' }],
      [{ icon: '🔌', title: 'Elec. Engineer', salary: '₹10–18 LPA', cls: '' }, { icon: '🛰️', title: 'Systems Eng.', salary: '₹12–20 LPA', cls: '' }],
      [{ icon: '🤖', title: 'Robotics Lead', salary: '₹22–38 LPA', cls: 'highlight' }, { icon: '☀️', title: 'Energy Manager', salary: '₹18–32 LPA', cls: 'highlight' }],
      [{ icon: '🏭', title: 'Plant Director', salary: '₹50–80 LPA', cls: 'top' }, { icon: '💡', title: 'Deep-tech Founder', salary: 'Unlimited', cls: 'top' }]
    ]
  }
};

const FlowTree = ({ levels }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [levels]);

  return (
    <div className="flow-tree">
      {levels.map((level, li) => (
        <React.Fragment key={li}>
          {li > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', padding: `6px 0 6px ${level.length > 1 ? '62px' : '62px'}` }}>
              <div style={{ width: 2, height: 20, background: 'rgba(26,39,68,.2)' }}></div>
            </div>
          )}
          <div className="flow-level">
            {level.map((node, ni) => (
              <React.Fragment key={ni}>
                <div 
                  className={`flow-node ${node.cls} ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${li * 0.15 + ni * 0.08}s` }}
                >
                  <div className="fn-icon">{node.icon}</div>
                  <div className="fn-title">{node.title}</div>
                  <div className="fn-salary">{node.salary}</div>
                </div>
                {ni < level.length - 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'center', flexShrink: 0 }}>
                    <div style={{ width: 24, height: 2, background: 'rgba(26,39,68,.15)' }}></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const CareerPath = () => {
  const [activeCourse, setActiveCourse] = useState('cse');
  const data = careerData[activeCourse];

  return (
    <section className="career-section" id="careers">
      <div className="section-eyebrow">Career Path Visualizer</div>
      <h2 className="section-title">Where will your degree <strong>take you?</strong></h2>
      <p className="section-sub">Select a program and watch your future career paths unfold as an animated flowchart &mdash; with salary benchmarks and transition routes.</p>

      <style>{`
        .flow-node { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .flow-node:hover { transform: translateY(-5px) scale(1.05); box-shadow: 0 10px 25px rgba(26,39,68,.15); z-index: 10; }
        .flow-tree:hover .flow-node:not(:hover) { opacity: 0.6; filter: grayscale(20%); }
      `}</style>
      <div className="career-layout">
        <div className="career-courses">
          {[
            { id: 'cse', icon: '💻', name: 'B.Tech CSE & AI', dept: 'School of Engineering' },
            { id: 'bio', icon: '🧬', name: 'B.Tech Biotech', dept: 'School of Sciences' },
            { id: 'mba', icon: '📊', name: 'MBA Analytics', dept: 'Business School' },
            { id: 'design', icon: '🎨', name: 'B.Des Interaction', dept: 'School of Design' },
            { id: 'ee', icon: '⚡', name: 'B.Tech EE', dept: 'School of Engineering' }
          ].map(c => (
            <button key={c.id} className={`course-btn ${activeCourse === c.id ? 'active' : ''}`} onClick={() => setActiveCourse(c.id)}>
              <span className="c-icon">{c.icon}</span>
              <div>
                <div className="c-name">{c.name}</div>
                <div className="c-dept">{c.dept}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="career-viz">
          <div className="viz-title">{data.title}</div>
          <div className="viz-sub">{data.sub}</div>
          <div className="flow-wrap">
            <FlowTree levels={data.flow} />
          </div>
          <div className="viz-legend">
            <div className="vleg"><div className="vleg-dot" style={{ background: 'var(--deep)' }}></div>Entry Level</div>
            <div className="vleg"><div className="vleg-dot" style={{ background: 'var(--gold)' }}></div>Mid-Career</div>
            <div className="vleg"><div className="vleg-dot" style={{ background: 'var(--accent)' }}></div>Senior / Leadership</div>
            <div className="vleg"><div className="vleg-dot" style={{ background: 'var(--green)' }}></div>Entrepreneurship</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPath;
