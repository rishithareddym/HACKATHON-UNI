import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admissions() {
  const navigate = useNavigate();

  return (
    <section className="admissions-section" id="admissions">
      <div className="adm-layout">
        <div>
          <div className="section-eyebrow" style={{ color: 'var(--gold2)' }}>Admissions</div>
          <h2 className="section-title">Your journey begins <strong style={{ color: '#fff' }}>here.</strong></h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,.5)' }}>We're looking for builders, thinkers, and those who ask the uncomfortable questions. Here is the path to joining our Class of 2029.</p>

          <div className="timeline">
            <div className="tl-item reveal">
              <div className="tl-dot"></div>
              <div className="tl-date">Oct 1 &mdash; Dec 15</div>
              <div className="tl-title">Early Admission Round</div>
              <div className="tl-desc">Submit your application, high school transcripts, and portfolio. Early applicants are prioritized for merit scholarships.</div>
            </div>
            <div className="tl-item reveal reveal-delay-1">
              <div className="tl-dot"></div>
              <div className="tl-date">January 20 &mdash; 25</div>
              <div className="tl-title">The Zenith Aptitude Test (ZITAT)</div>
              <div className="tl-desc">A unique puzzle and critical thinking test. Not measuring memory, but measuring how you approach unsolved problems.</div>
            </div>
            <div className="tl-item reveal reveal-delay-2">
              <div className="tl-dot"></div>
              <div className="tl-date">February 10 &mdash; 28</div>
              <div className="tl-title">Faculty Interviews</div>
              <div className="tl-desc">Shortlisted candidates will have a 30-minute conversation with our faculty to discuss their projects, passions, and fit.</div>
            </div>
            <div className="tl-item reveal reveal-delay-3" style={{ paddingBottom: 0 }}>
              <div className="tl-dot"></div>
              <div className="tl-date">March 15</div>
              <div className="tl-title">Decision Day</div>
              <div className="tl-desc">Offer letters are sent out along with financial aid packages and scholarship awards.</div>
            </div>
          </div>
        </div>

        <div className="adm-checklist reveal reveal-delay-2">
          <div className="adm-check-title">Application Checklist</div>
          <div className="check-item"><span className="check-icon">&#10004;</span> Application Form & Fee ($50)</div>
          <div className="check-item"><span className="check-icon">&#10004;</span> High School Transcripts (Min. 3.2 GPA)</div>
          <div className="check-item"><span className="check-icon">&#10004;</span> 2 Letters of Recommendation</div>
          <div className="check-item"><span className="check-icon">&#10004;</span> Personal Statement Essay</div>
          <div className="check-item"><span className="check-icon">&#10004;</span> Project Portfolio / GitHub (Optional but recommended)</div>
          <div className="check-item"><span className="check-icon">&#10004;</span> Standardized Test Scores (SAT/ACT)</div>
          
          <button
            className="nav-cta"
            type="button"
            onClick={() => navigate('/apply')}
            style={{ width: '100%', marginTop: '2rem', padding: '1rem' }}
          >
            Start Application &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
