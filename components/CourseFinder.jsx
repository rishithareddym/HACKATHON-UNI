import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';

const programMap = {
  tech: { job: 'btech-cse-ai', startup: 'btech-cse-business', research: 'mtech-ai-ds', impact: 'btech-social-good' },
  science: { job: 'btech-biotech', startup: 'btech-biotech-mba', research: 'msc-physics', impact: 'btech-env-engineering' },
  business: { job: 'mba-business-analytics', startup: 'mba-entrepreneurship', research: 'mba-phd-research', impact: 'mba-social-enterprise' },
  design: { job: 'bdes-interaction-design', startup: 'bdes-product-design', research: 'mdes-design-research', impact: 'bdes-social-innovation' }
};

const TypewriterText = ({ text }) => {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}<span className="cursor-blink">|</span></span>;
};

const CourseFinder = () => {
  const [qStep, setQStep] = useState(1);
  const [qAnswers, setQAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [slideDir, setSlideDir] = useState('slide-in-right');
  const [soundEnabled, setSoundEnabled] = useState(false);
  
  const audioCtxRef = useRef(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
  };

  const playClick = () => {
    if (!soundEnabled) return;
    initAudio();
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      // Play a demo click when turning on
      setTimeout(() => {
        initAudio();
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
      }, 50);
    }
  };

  const selectOpt = (key, val) => {
    playClick();
    setQAnswers(prev => ({ ...prev, [key]: val }));
  };

  const isSelected = (key, val) => qAnswers[key] === val;

  const handleNext = () => {
    if (qStep === 1 && !qAnswers.interest) return;
    if (qStep === 2 && !qAnswers.style) return;
    if (qStep === 3 && !qAnswers.goal) return;

    playClick();
    setSlideDir('slide-out-left');
    
    setTimeout(() => {
      if (qStep === 3) {
        setIsProcessing(true);
        setSlideDir('fade-in');
        setTimeout(() => {
          setIsProcessing(false);
          setShowResult(true);
        }, 1800);
      } else {
        setQStep(prev => prev + 1);
        setSlideDir('slide-in-right');
      }
    }, 300);
  };

  const handleBack = () => {
    if (qStep > 1) {
      playClick();
      setSlideDir('slide-out-right');
      setTimeout(() => {
        setQStep(prev => prev - 1);
        setShowResult(false);
        setSlideDir('slide-in-left');
      }, 300);
    }
  };

  const restartQuiz = () => {
    playClick();
    setQStep(1);
    setQAnswers({});
    setShowResult(false);
    setSlideDir('slide-in-right');
  };

  const navigate = useNavigate();

  const interest = qAnswers.interest || 'tech';
  const goal = qAnswers.goal || 'job';
  const matchedCourseId = programMap[interest] && programMap[interest][goal] ? programMap[interest][goal] : 'btech-cse-ai';
  const matchedCourse = getCourseById(matchedCourseId);
  const bestMatch = matchedCourse ? matchedCourse.name : 'B.Tech Computer Science & AI';
  const matchDesc = Object.values(qAnswers).join(' · ');

  return (
    <section className="finder-section" id="academics">
      <style>{`
        .cursor-blink { animation: blink 1s step-end infinite; color: var(--gold); }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        
        .quiz-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .sound-toggle { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.6); padding: .4rem .8rem; border-radius: 20px; font-size: .65rem; font-weight: 700; cursor: none; transition: all .2s; }
        .sound-toggle:hover { background: rgba(255,255,255,.1); color: #fff; }
        .sound-toggle.on { background: rgba(200,150,42,.15); border-color: var(--gold); color: var(--gold); }
        
        .quiz-progress-bar { width: 100%; height: 4px; background: rgba(255,255,255,.1); border-radius: 2px; margin-bottom: 2rem; overflow: hidden; }
        .quiz-progress-fill { height: 100%; background: var(--gold); transition: width 0.5s ease; border-radius: 2px; }
        
        .slide-container { position: relative; min-height: 400px; }
        .slide-step { position: absolute; top: 0; left: 0; width: 100%; opacity: 0; visibility: hidden; }
        .slide-step.active { position: relative; opacity: 1; visibility: visible; }
        
        .slide-in-right { animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .slide-in-left { animation: slideInLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .slide-out-left { animation: slideOutLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .slide-out-right { animation: slideOutRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .fade-in { animation: cf-fade 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideOutLeft { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-30px); } }
        @keyframes slideOutRight { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(30px); } }
        @keyframes cf-fade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        .quiz-options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .quiz-opt-card { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08); padding: 1.5rem; border-radius: 12px; color: rgba(255,255,255,.75); font-size: .9rem; font-weight: 600; cursor: none; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); text-align: left; display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; }
        .quiz-opt-card:active { transform: scale(0.96); }
        .quiz-opt-card:hover { transform: translateY(-4px) scale(1.02); background: rgba(200,150,42,.08); border-color: rgba(200,150,42,.3); box-shadow: 0 10px 30px rgba(0,0,0,.2); }
        .quiz-opt-card.selected { transform: translateY(-4px) scale(1.03); background: rgba(200,150,42,.15); border-color: var(--gold); color: #fff; box-shadow: 0 0 20px rgba(200,150,42,0.25); }
        .quiz-opt-icon { font-size: 1.8rem; background: rgba(255,255,255,0.05); padding: .6rem; border-radius: 8px; transition: all .3s; line-height: 1; }
        .quiz-opt-card.selected .quiz-opt-icon { background: var(--gold); color: var(--deep); }
        
        .ai-processing { text-align: center; padding: 4rem 0; color: var(--gold2); font-size: 1.2rem; font-weight: 600; font-style: italic; font-family: 'Instrument Serif', serif; }
        .ai-processing span { display: inline-block; animation: blink-ai 1.4s infinite both; }
        .ai-processing span:nth-child(2) { animation-delay: 0.2s; }
        .ai-processing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes blink-ai { 0%, 100% { opacity: 0.2; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }
        
        .quiz-nav { display: flex; gap: 1rem; margin-top: 2rem; }
        
        @media(max-width: 600px) {
          .quiz-options-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="finder-grid">
        <div>
          <div className="quiz-header">
            <div className="section-eyebrow" style={{marginBottom: 0}}>AI Program Matcher</div>
            <button className={`sound-toggle ${soundEnabled ? 'on' : ''}`} onClick={toggleSound}>
              {soundEnabled ? '🔊 Sound: ON' : '🔈 Sound: OFF'}
            </button>
          </div>
          
          <h2 className="section-title">Find the program <em style={{ fontStyle: 'italic', color: 'var(--gold2)' }}>made for you.</em></h2>
          <p className="section-sub" style={{marginBottom: '2rem'}}>Answer 3 quick questions and our AI will match you to the perfect program based on your unique profile.</p>

          <div className="quiz-flow">
            <div className="quiz-progress-bar">
              <div 
                className="quiz-progress-fill" 
                style={{ width: isProcessing || showResult ? '100%' : `${((qStep - 1) / 3) * 100 + 15}%` }}
              ></div>
            </div>

            <div className="slide-container">
              {!showResult && !isProcessing && (
                <div className={`slide-step active ${slideDir}`}>
                  {qStep === 1 && (
                    <div>
                      <div className="quiz-q"><TypewriterText text="What excites you most?" /></div>
                      <div className="quiz-options-grid">
                        <button className={`quiz-opt-card ${isSelected('interest', 'tech') ? 'selected' : ''}`} onClick={() => selectOpt('interest', 'tech')}>
                          <span className="quiz-opt-icon">💻</span>
                          <span>Building tech & software</span>
                        </button>
                        <button className={`quiz-opt-card ${isSelected('interest', 'science') ? 'selected' : ''}`} onClick={() => selectOpt('interest', 'science')}>
                          <span className="quiz-opt-icon">🔬</span>
                          <span>Science & discovery</span>
                        </button>
                        <button className={`quiz-opt-card ${isSelected('interest', 'business') ? 'selected' : ''}`} onClick={() => selectOpt('interest', 'business')}>
                          <span className="quiz-opt-icon">📈</span>
                          <span>Business & strategy</span>
                        </button>
                        <button className={`quiz-opt-card ${isSelected('interest', 'design') ? 'selected' : ''}`} onClick={() => selectOpt('interest', 'design')}>
                          <span className="quiz-opt-icon">🎨</span>
                          <span>Design & creativity</span>
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {qStep === 2 && (
                    <div>
                      <div className="quiz-q"><TypewriterText text="How do you prefer to work?" /></div>
                      <div className="quiz-options-grid">
                        <button className={`quiz-opt-card ${isSelected('style', 'solo') ? 'selected' : ''}`} onClick={() => selectOpt('style', 'solo')}>
                          <span className="quiz-opt-icon">🧘</span>
                          <span>Independently, deep focus</span>
                        </button>
                        <button className={`quiz-opt-card ${isSelected('style', 'team') ? 'selected' : ''}`} onClick={() => selectOpt('style', 'team')}>
                          <span className="quiz-opt-icon">🤝</span>
                          <span>In teams, collaborative</span>
                        </button>
                        <button className={`quiz-opt-card ${isSelected('style', 'field') ? 'selected' : ''}`} onClick={() => selectOpt('style', 'field')}>
                          <span className="quiz-opt-icon">🌍</span>
                          <span>Out in the field, hands-on</span>
                        </button>
                        <button className={`quiz-opt-card ${isSelected('style', 'lead') ? 'selected' : ''}`} onClick={() => selectOpt('style', 'lead')}>
                          <span className="quiz-opt-icon">🚀</span>
                          <span>Leading & building things</span>
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {qStep === 3 && (
                    <div>
                      <div className="quiz-q"><TypewriterText text="What's your ultimate goal?" /></div>
                      <div className="quiz-options-grid">
                        <button className={`quiz-opt-card ${isSelected('goal', 'job') ? 'selected' : ''}`} onClick={() => selectOpt('goal', 'job')}>
                          <span className="quiz-opt-icon">💼</span>
                          <span>Land a dream job</span>
                        </button>
                        <button className={`quiz-opt-card ${isSelected('goal', 'startup') ? 'selected' : ''}`} onClick={() => selectOpt('goal', 'startup')}>
                          <span className="quiz-opt-icon">🦄</span>
                          <span>Start my own company</span>
                        </button>
                        <button className={`quiz-opt-card ${isSelected('goal', 'research') ? 'selected' : ''}`} onClick={() => selectOpt('goal', 'research')}>
                          <span className="quiz-opt-icon">🏆</span>
                          <span>Contribute to research</span>
                        </button>
                        <button className={`quiz-opt-card ${isSelected('goal', 'impact') ? 'selected' : ''}`} onClick={() => selectOpt('goal', 'impact')}>
                          <span className="quiz-opt-icon">🌱</span>
                          <span>Create social impact</span>
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <div className="quiz-nav">
                    {qStep > 1 && <button className="quiz-btn ghost" onClick={handleBack}>&larr; Back</button>}
                    <button className="quiz-btn" onClick={handleNext}>{qStep === 3 ? 'Generate Match' : 'Next Question \u2192'}</button>
                  </div>
                </div>
              )}

              {isProcessing && (
                <div className={`ai-processing ${slideDir}`}>
                  Synthesizing cognitive profile array<span>.</span><span>.</span><span>.</span>
                </div>
              )}

              {showResult && (
                <div className={`result-card show ${slideDir}`}>
                  <div className="result-badge">AI Confidence Score &middot; 96%</div>
                  <div className="result-name">{bestMatch}</div>
                  <div className="result-match">Matched based on: {matchDesc}</div>
                  <div className="result-tags">
                    <span className="rtag">4 Years</span>
                    <span className="rtag">NAAC A++ Ranked</span>
                    <span className="rtag">Avg ₹18–45 LPA</span>
                  </div>
                  <button onClick={() => navigate(`/course/${matchedCourseId}`)} className="quiz-btn">Explore Program &rarr;</button>
                  <button className="quiz-btn ghost" onClick={restartQuiz} style={{ marginLeft: '.5rem' }}>Retake Matching</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFinder;
