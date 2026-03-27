import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CareerNodeCard from '../careers/CareerNodeCard';

const careerData = {
  cse: { title: 'B.Tech CSE & AI', sub: '4-year program \u00b7 94% placement rate \u00b7 Avg. \u20b918 LPA starting CTC',
    flow: [
      [{ icon: '\ud83d\udcbb', title: 'Graduate', salary: 'Year 0', cls: 'root' }],
      [{ icon: '\ud83d\udc68\u200d\ud83d\udcbb', title: 'Software Engineer', salary: '\u20b912\u201322 LPA', cls: '' }, { icon: '\ud83d\udcca', title: 'Data Analyst', salary: '\u20b910\u201318 LPA', cls: '' }, { icon: '\ud83d\udd10', title: 'Security Engineer', salary: '\u20b914\u201324 LPA', cls: '' }],
      [{ icon: '\ud83e\udde0', title: 'Senior SWE', salary: '\u20b925\u201345 LPA', cls: 'highlight' }, { icon: '\ud83e\udd16', title: 'ML Engineer', salary: '\u20b928\u201350 LPA', cls: 'highlight' }, { icon: '\ud83c\udfd7\ufe0f', title: 'Tech Lead', salary: '\u20b935\u201360 LPA', cls: 'highlight' }],
      [{ icon: '\ud83e\udd84', title: 'Startup Founder', salary: 'Unlimited', cls: 'top' }, { icon: '\ud83c\udfe2', title: 'VP Engineering', salary: '\u20b980L\u20131.5Cr', cls: 'top' }, { icon: '\ud83d\udd2c', title: 'AI Researcher', salary: '\u20b960L\u20131.2Cr', cls: 'top' }]
    ]
  },
  bio: { title: 'B.Tech Biotechnology', sub: '4-year program \u00b7 78% placement rate \u00b7 Avg. \u20b912 LPA starting CTC',
    flow: [
      [{ icon: '\ud83e\uddec', title: 'Graduate', salary: 'Year 0', cls: 'root' }],
      [{ icon: '\ud83d\udd2c', title: 'Research Assoc.', salary: '\u20b98\u201314 LPA', cls: '' }, { icon: '\ud83d\udc8a', title: 'Pharma Analyst', salary: '\u20b910\u201316 LPA', cls: '' }],
      [{ icon: '\ud83d\udc69\u200d\ud83d\udd2c', title: 'Sr. Scientist', salary: '\u20b918\u201330 LPA', cls: 'highlight' }, { icon: '\ud83c\udfe5', title: 'Clinical Lead', salary: '\u20b920\u201335 LPA', cls: 'highlight' }],
      [{ icon: '\ud83d\ude80', title: 'Biotech Founder', salary: 'Unlimited', cls: 'top' }, { icon: '\ud83c\udfc6', title: 'R&D Director', salary: '\u20b950\u201380 LPA', cls: 'top' }]
    ]
  },
  mba: { title: 'MBA Business Analytics', sub: '2-year program \u00b7 96% placement rate \u00b7 Avg. \u20b922 LPA starting CTC',
    flow: [
      [{ icon: '\ud83d\udcca', title: 'MBA Graduate', salary: 'Year 0', cls: 'root' }],
      [{ icon: '\ud83d\udcc8', title: 'Consultant', salary: '\u20b918\u201328 LPA', cls: '' }, { icon: '\ud83d\udcb0', title: 'Fin. Analyst', salary: '\u20b916\u201324 LPA', cls: '' }],
      [{ icon: '\ud83c\udfaf', title: 'Sr. Manager', salary: '\u20b935\u201355 LPA', cls: 'highlight' }, { icon: '\ud83d\udce6', title: 'Product Manager', salary: '\u20b930\u201350 LPA', cls: 'highlight' }],
      [{ icon: '\ud83c\udfe6', title: 'Partner / Director', salary: '\u20b980L\u20132Cr', cls: 'top' }, { icon: '\ud83e\udd81', title: 'CEO / Founder', salary: 'Unlimited', cls: 'top' }]
    ]
  },
  design: { title: 'B.Des Interaction Design', sub: '4-year program \u00b7 88% placement rate \u00b7 Avg. \u20b914 LPA starting CTC',
    flow: [
      [{ icon: '\ud83c\udfa8', title: 'Des. Graduate', salary: 'Year 0', cls: 'root' }],
      [{ icon: '\u270f\ufe0f', title: 'UI/UX Designer', salary: '\u20b910\u201318 LPA', cls: '' }, { icon: '\ud83d\uddbc\ufe0f', title: 'Visual Designer', salary: '\u20b98\u201314 LPA', cls: '' }],
      [{ icon: '\ud83e\udde9', title: 'Lead Designer', salary: '\u20b922\u201338 LPA', cls: 'highlight' }, { icon: '\ud83d\udcf1', title: 'Product Designer', salary: '\u20b925\u201342 LPA', cls: 'highlight' }],
      [{ icon: '\ud83d\ude80', title: 'Design Founder', salary: 'Unlimited', cls: 'top' }, { icon: '\ud83c\udf1f', title: 'Design Director', salary: '\u20b955\u201390 LPA', cls: 'top' }]
    ]
  },
  ee: { title: 'B.Tech Electrical Engineering', sub: '4-year program \u00b7 86% placement rate \u00b7 Avg. \u20b915 LPA starting CTC',
    flow: [
      [{ icon: '\u26a1', title: 'EE Graduate', salary: 'Year 0', cls: 'root' }],
      [{ icon: '\ud83d\udd0c', title: 'Elec. Engineer', salary: '\u20b910\u201318 LPA', cls: '' }, { icon: '\ud83d\udef0\ufe0f', title: 'Systems Eng.', salary: '\u20b912\u201320 LPA', cls: '' }],
      [{ icon: '\ud83e\udd16', title: 'Robotics Lead', salary: '\u20b922\u201338 LPA', cls: 'highlight' }, { icon: '\u2600\ufe0f', title: 'Energy Manager', salary: '\u20b918\u201332 LPA', cls: 'highlight' }],
      [{ icon: '\ud83c\udfed', title: 'Plant Director', salary: '\u20b950\u201380 LPA', cls: 'top' }, { icon: '\ud83d\udca1', title: 'Deep-tech Founder', salary: 'Unlimited', cls: 'top' }]
    ]
  }
};

export default function CareerPathVisualizer() {
  const navigate = useNavigate();
  const [activeCourse, setActiveCourse] = useState('cse');
  const [visibleItems, setVisibleItems] = useState(false);
  const [selectedRoleSlug, setSelectedRoleSlug] = useState(null);
  const navTimerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisibleItems(true), 50);
    return () => clearTimeout(t);
  }, [activeCourse]);

  const { title, sub, flow } = careerData[activeCourse];

  const flowSlug = useMemo(
    () => ({
      'AI Researcher': 'ai-researcher',
      Graduate: 'graduate',
      'Software Engineer': 'software-engineer',
      'Data Analyst': 'data-analyst',
      'Security Engineer': 'security-engineer',
      'Senior SWE': 'senior-swe',
      'ML Engineer': 'ml-engineer',
      'Tech Lead': 'tech-lead',
      'Startup Founder': 'startup-founder',
      'VP Engineering': 'vp-engineering',
    }),
    [],
  );

  const slugifyTitle = (roleTitle) => {
    if (flowSlug[roleTitle]) return flowSlug[roleTitle];
    return String(roleTitle)
      .toLowerCase()
      .trim()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const switchCourse = (course) => {
    setVisibleItems(false);
    setActiveCourse(course);
  };

  const onNodeClick = (slug) => {
    setSelectedRoleSlug(slug);
    if (navTimerRef.current) window.clearTimeout(navTimerRef.current);
    navTimerRef.current = window.setTimeout(() => {
      navigate(`/careers/${slug}`);
    }, 180);
  };

  return (
    <section className="career-section" id="careers">
      <div className="section-eyebrow">Career Path Visualizer</div>
      <h2 className="section-title">Where will your degree <strong>take you?</strong></h2>
      <p className="section-sub">Select a program and watch your future career paths unfold as an animated flowchart \u2014 with salary benchmarks and transition routes.</p>

      <div className="career-layout">
        <div className="career-courses">
          <button className={`course-btn ${activeCourse === 'cse' ? 'active' : ''}`} onClick={() => switchCourse('cse')}>
            <span className="c-icon">&#128187;</span>
            <div><div className="c-name">B.Tech CSE & AI</div><div className="c-dept">School of Engineering</div></div>
          </button>
          <button className={`course-btn ${activeCourse === 'bio' ? 'active' : ''}`} onClick={() => switchCourse('bio')}>
            <span className="c-icon">&#129516;</span>
            <div><div className="c-name">B.Tech Biotech</div><div className="c-dept">School of Sciences</div></div>
          </button>
          <button className={`course-btn ${activeCourse === 'mba' ? 'active' : ''}`} onClick={() => switchCourse('mba')}>
            <span className="c-icon">&#128202;</span>
            <div><div className="c-name">MBA Analytics</div><div className="c-dept">Business School</div></div>
          </button>
          <button className={`course-btn ${activeCourse === 'design' ? 'active' : ''}`} onClick={() => switchCourse('design')}>
            <span className="c-icon">&#127912;</span>
            <div><div className="c-name">B.Des Interaction</div><div className="c-dept">School of Design</div></div>
          </button>
          <button className={`course-btn ${activeCourse === 'ee' ? 'active' : ''}`} onClick={() => switchCourse('ee')}>
            <span className="c-icon">&#9889;</span>
            <div><div className="c-name">B.Tech EE</div><div className="c-dept">School of Engineering</div></div>
          </button>
        </div>

        <div className="career-viz">
          <div className="viz-title">{title}</div>
          <div className="viz-sub">{sub}</div>
          
          <div className="flow-wrap">
            <div className="flow-tree">
              {flow.map((level, li) => (
                <React.Fragment key={li}>
                  {li > 0 && (
                    <div
                      className={`flow-connector-v ${visibleItems ? 'visible' : ''}`}
                      style={{ transitionDelay: `${li * 0.15}s` }}
                    >
                      <div className="flow-connector-v-line"></div>
                    </div>
                  )}
                  <div className="flow-level">
                    {level.map((node, ni) => {
                      const roleSlug = slugifyTitle(node.title);
                      return (
                        <React.Fragment key={ni}>
                          <CareerNodeCard
                            node={node}
                            visible={visibleItems}
                            selected={selectedRoleSlug === roleSlug}
                            transitionDelay={`${li * 0.15 + ni * 0.08}s`}
                            onClick={() => onNodeClick(roleSlug)}
                          />
                        {ni < level.length - 1 && (
                          <div
                            className={`flow-connector-h ${visibleItems ? 'visible' : ''}`}
                            style={{ transitionDelay: `${li * 0.15 + ni * 0.08 + 0.06}s` }}
                          >
                            <div className="flow-connector-h-line"></div>
                          </div>
                        )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </React.Fragment>
              ))}
            </div>
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
}
