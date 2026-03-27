import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const programMap = {
  tech: { job: 'B.Tech Computer Science & AI', startup: 'B.Tech CSE + Minor in Business', research: 'M.Tech AI & Data Science', impact: 'B.Tech Computing for Social Good' },
  science: { job: 'B.Tech Biotechnology', startup: 'B.Tech Biotech + MBA', research: 'Integrated M.Sc. Physics', impact: 'B.Tech Environmental Engineering' },
  business: { job: 'MBA Business Analytics', startup: 'MBA Entrepreneurship', research: 'MBA + PhD', impact: 'MBA Social Enterprise' },
  design: { job: 'B.Des Interaction Design', startup: 'B.Des Product Design', research: 'M.Des Design Research', impact: 'B.Des for Social Innovation' }
};

export default function SmartCourseFinder() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const selectOpt = (key, val) => {
    setAnswers({ ...answers, [key]: val });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else setShowResult(true);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const restartQuiz = () => {
    setStep(1);
    setAnswers({});
    setShowResult(false);
  };

  const interest = answers.interest || 'tech';
  const goal = answers.goal || 'job';
  const resultName = programMap[interest]?.[goal] || 'B.Tech Computer Science & AI';

  return (
    <section className="finder-section" id="academics">
      <div className="finder-grid">
        <div>
          <div className="section-eyebrow">Smart Course Finder</div>
          <h2 className="section-title">Find the program <em style={{ fontStyle: 'italic', color: 'var(--gold2)' }}>made for you.</em></h2>
          <p className="section-sub">Answer 3 quick questions and we'll match you to the perfect program based on your interests, strengths, and goals.</p>

          <div className="quiz-flow" style={{ marginTop: '2.5rem' }}>
            <div className="quiz-progress">
              <div className={`qprog-dot ${step >= 1 ? 'done' : ''}`}></div>
              <div className={`qprog-dot ${step >= 2 ? 'done' : ''}`}></div>
              <div className={`qprog-dot ${step >= 3 || showResult ? 'done' : ''}`}></div>
            </div>

            {!showResult ? (
              <>
                {step === 1 && (
                  <div className="quiz-step active">
                    <div className="quiz-q">What excites you most?</div>
                    <div className="quiz-options">
                      <button className={`quiz-opt ${answers.interest === 'tech' ? 'selected' : ''}`} onClick={() => selectOpt('interest', 'tech')}><span className="quiz-opt-icon">&#128187;</span>Building tech & software</button>
                      <button className={`quiz-opt ${answers.interest === 'science' ? 'selected' : ''}`} onClick={() => selectOpt('interest', 'science')}><span className="quiz-opt-icon">&#128300;</span>Science & discovery</button>
                      <button className={`quiz-opt ${answers.interest === 'business' ? 'selected' : ''}`} onClick={() => selectOpt('interest', 'business')}><span className="quiz-opt-icon">&#128200;</span>Business & strategy</button>
                      <button className={`quiz-opt ${answers.interest === 'design' ? 'selected' : ''}`} onClick={() => selectOpt('interest', 'design')}><span className="quiz-opt-icon">&#127912;</span>Design & creativity</button>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="quiz-step active">
                    <div className="quiz-q">How do you prefer to work?</div>
                    <div className="quiz-options">
                      <button className={`quiz-opt ${answers.style === 'solo' ? 'selected' : ''}`} onClick={() => selectOpt('style', 'solo')}><span className="quiz-opt-icon">&#129632;</span>Independently, deep focus</button>
                      <button className={`quiz-opt ${answers.style === 'team' ? 'selected' : ''}`} onClick={() => selectOpt('style', 'team')}><span className="quiz-opt-icon">&#129309;</span>In teams, collaborative</button>
                      <button className={`quiz-opt ${answers.style === 'field' ? 'selected' : ''}`} onClick={() => selectOpt('style', 'field')}><span className="quiz-opt-icon">&#127757;</span>Out in the field, hands-on</button>
                      <button className={`quiz-opt ${answers.style === 'lead' ? 'selected' : ''}`} onClick={() => selectOpt('style', 'lead')}><span className="quiz-opt-icon">&#128640;</span>Leading & building things</button>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="quiz-step active">
                    <div className="quiz-q">What's your ultimate goal?</div>
                    <div className="quiz-options">
                      <button className={`quiz-opt ${answers.goal === 'job' ? 'selected' : ''}`} onClick={() => selectOpt('goal', 'job')}><span className="quiz-opt-icon">&#128188;</span>Land a dream job</button>
                      <button className={`quiz-opt ${answers.goal === 'startup' ? 'selected' : ''}`} onClick={() => selectOpt('goal', 'startup')}><span className="quiz-opt-icon">&#129412;</span>Start my own company</button>
                      <button className={`quiz-opt ${answers.goal === 'research' ? 'selected' : ''}`} onClick={() => selectOpt('goal', 'research')}><span className="quiz-opt-icon">&#127942;</span>Contribute to research</button>
                      <button className={`quiz-opt ${answers.goal === 'impact' ? 'selected' : ''}`} onClick={() => selectOpt('goal', 'impact')}><span className="quiz-opt-icon">&#127793;</span>Create social impact</button>
                    </div>
                  </div>
                )}
                <div className="quiz-nav">
                  {step > 1 && <button className="quiz-btn ghost" onClick={prevStep} style={{ marginRight: '1rem' }}>&larr; Back</button>}
                  <button className="quiz-btn" onClick={nextStep} disabled={
                    (step === 1 && !answers.interest) || 
                    (step === 2 && !answers.style) || 
                    (step === 3 && !answers.goal)
                  }>{step === 3 ? 'See My Match \u2192' : 'Next \u2192'}</button>
                </div>
              </>
            ) : (
              <div className="result-card show">
                <div className="result-badge">Best Match &middot; 96%</div>
                <div className="result-name">{resultName}</div>
                <div className="result-match">Perfect match based on your answers</div>
                <div className="result-tags">
                  <span className="rtag">4 Years</span>
                  <span className="rtag">NAAC A++ Ranked</span>
                  <span className="rtag">Avg &#8377;18&ndash;45 LPA</span>
                  <span className="rtag">Industry-ready curriculum</span>
                </div>
                <a href="#admissions" className="quiz-btn">Explore Program &rarr;</a>
                <button className="quiz-btn ghost" onClick={restartQuiz} style={{ marginLeft: '.5rem' }}>Retake Quiz</button>
              </div>
            )}
          </div>
        </div>

        <div className="finder-visual">
          <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,.3)', fontSize: '.6rem' }}>Featured Programs</div>
          <div className="program-cards">
            <div className="prog-card">
              <div className="prog-icon">&#128187;</div>
              <div><div className="prog-name">B.Tech Computer Science & AI</div><div className="prog-detail">4 Years &middot; 240 Seats &middot; &#8377;1.8L/yr</div></div>
              <div className="prog-arrow">&rarr;</div>
            </div>
            <div className="prog-card">
              <div className="prog-icon">&#129516;</div>
              <div><div className="prog-name">B.Tech Biotechnology</div><div className="prog-detail">4 Years &middot; 120 Seats &middot; &#8377;1.6L/yr</div></div>
              <div className="prog-arrow">&rarr;</div>
            </div>
            <div className="prog-card">
              <div className="prog-icon">&#9889;</div>
              <div><div className="prog-name">B.Tech Electrical Engineering</div><div className="prog-detail">4 Years &middot; 180 Seats &middot; &#8377;1.5L/yr</div></div>
              <div className="prog-arrow">&rarr;</div>
            </div>
            <div className="prog-card">
              <div className="prog-icon">&#128202;</div>
              <div><div className="prog-name">MBA Business Analytics</div><div className="prog-detail">2 Years &middot; 90 Seats &middot; &#8377;2.2L/yr</div></div>
              <div className="prog-arrow">&rarr;</div>
            </div>
            <div className="prog-card">
              <div className="prog-icon">&#127912;</div>
              <div><div className="prog-name">B.Des Interaction Design</div><div className="prog-detail">4 Years &middot; 60 Seats &middot; &#8377;1.4L/yr</div></div>
              <div className="prog-arrow">&rarr;</div>
            </div>
            <div className="prog-card">
              <div className="prog-icon">&#127959;&#65039;</div>
              <div><div className="prog-name">B.Tech Civil Engineering</div><div className="prog-detail">4 Years &middot; 150 Seats &middot; &#8377;1.3L/yr</div></div>
              <div className="prog-arrow">&rarr;</div>
            </div>
          </div>

          <div className="finder-viewall">
            <button type="button" className="finder-viewall-btn" onClick={() => navigate('/courses')}>
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
