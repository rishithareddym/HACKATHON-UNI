import React from 'react';

const Admissions = () => {
  return (
    <section className="admissions-section" id="admissions">
      <div className="adm-layout">
        <div>
          <div className="section-eyebrow">Admissions 2026</div>
          <h2 className="section-title">Your journey starts <em style={{ fontStyle: 'italic' }}>here.</em></h2>
          <p className="section-sub">Applications for the Class of 2029 are now open. We review holistically &mdash; your story matters as much as your scores.</p>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-dot"></div><div className="tl-date">Jan 15 &ndash; Mar 31, 2026</div>
              <div className="tl-title">Applications Open</div>
              <div className="tl-desc">Submit your application with academic records, SOP, and letters of recommendation.</div>
            </div>
            <div className="tl-item">
              <div className="tl-dot"></div><div className="tl-date">April 15 &ndash; April 25, 2026</div>
              <div className="tl-title">Entrance Examination</div>
              <div className="tl-desc">Online proctored exam covering aptitude, domain knowledge, and analytical reasoning.</div>
            </div>
            <div className="tl-item">
              <div className="tl-dot"></div><div className="tl-date">May 10 &ndash; May 20, 2026</div>
              <div className="tl-title">Personal Interviews</div>
              <div className="tl-desc">Selected candidates will be invited for a 20-minute interview with a faculty panel.</div>
            </div>
            <div className="tl-item">
              <div className="tl-dot"></div><div className="tl-date">June 1, 2026</div>
              <div className="tl-title">Results & Offers</div>
              <div className="tl-desc">Shortlisted students receive digital offer letters. Acceptance deadline: June 20.</div>
            </div>
            <div className="tl-item" style={{ paddingBottom: 0 }}>
              <div className="tl-dot"></div><div className="tl-date">August 1, 2026</div>
              <div className="tl-title">Classes Begin</div>
              <div className="tl-desc">Welcome to NEXUS! Orientation week and campus induction begins.</div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="adm-checklist">
            <div className="adm-check-title">Application Checklist</div>
            <div className="check-item"><span className="check-icon">✅</span>Completed online application form</div>
            <div className="check-item"><span className="check-icon">✅</span>Academic transcripts (10th, 12th, UG)</div>
            <div className="check-item"><span className="check-icon">⬜</span>Statement of Purpose (800–1000 words)</div>
            <div className="check-item"><span className="check-icon">⬜</span>2 Letters of Recommendation</div>
            <div className="check-item"><span className="check-icon">⬜</span>Entrance test scores (NEX-SAT / JEE)</div>
            <div className="check-item"><span className="check-icon">⬜</span>Portfolio (for Design programs)</div>
            <div className="check-item"><span className="check-icon">⬜</span>Application fee payment: ₹1,500</div>
          </div>
          <div style={{ marginTop: '2rem', background: 'rgba(200,150,42,.1)', border: '1px solid rgba(200,150,42,.3)', padding: '2rem' }}>
            <div style={{ fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold2)', fontWeight: 700, marginBottom: '.8rem' }}>Scholarship Available</div>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '1.3rem', color: '#fff', marginBottom: '.5rem', lineHeight: 1.3 }}>Up to 100% merit scholarship for top 50 applicants.</div>
            <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.4)', marginBottom: '1.2rem', lineHeight: 1.65 }}>NEXUS Excellence Scholarship covers full tuition for students in the top percentile of the entrance exam.</div>
            <a href="#" className="quiz-btn" style={{ fontSize: '.75rem', padding: '.7rem 1.5rem', display: 'inline-block' }}>Apply for Scholarship &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
