import React, { useState, useEffect, useRef } from 'react';

export function CustomCursor() {
  useEffect(() => {
    const cur = document.getElementById('cur');
    const ring = document.getElementById('curRing');
    if (!cur || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cur.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animate);
    };

    const onHoverEnter = () => {
      cur.classList.add('big');
      ring.classList.add('big');
    };

    const onHoverLeave = () => {
      cur.classList.remove('big');
      ring.classList.remove('big');
    };

    window.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(animate);

    const interactiveElements = document.querySelectorAll('a, button, .quiz-opt, .alumni-card, .course-btn');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onHoverEnter);
      el.addEventListener('mouseleave', onHoverLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onHoverEnter);
        el.removeEventListener('mouseleave', onHoverLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cur" id="cur" style={{ left: 0, top: 0 }}></div>
      <div className="cur-ring" id="curRing" style={{ left: 0, top: 0 }}></div>
    </>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`back-top ${show ? 'show' : ''}`} onClick={scrollToTop}>
      &uarr;
    </button>
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! I am the Zenith Admissions Bot. How can I help you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMsg = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { text, sender: 'user' }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      let reply = "I can transfer you to an admissions counselor for more specifics, or you can check our Admissions page.";
      const lower = text.toLowerCase();
      if (lower.includes('fee') || lower.includes('cost')) reply = 'Tuition fees vary by program. B.Tech programs range from ₹1.2L to ₹2.5L per year.';
      if (lower.includes('scholarship')) reply = 'Yes! We offer up to 100% merit scholarships based on the BMSAT exam.';
      if (lower.includes('placement')) reply = 'Our placement rate is 94% with over 600 recruiters including Google, Microsoft, and Amazon.';
      setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
    }, 1200);
  };

  const suggestions = [
    'Tell me about B.Tech CSE placements',
    'What is the fee structure?',
    'Are there any scholarships?'
  ];

  return (
    <div className="chat-fab">
      <div className={`chat-window ${open ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-avatar">&#129489;&#8205;&#128187;</div>
          <div>
            <div className="chat-name">Admissions Guide</div>
            <div className="chat-status"><span className="chat-status-dot"></span> Online</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}>&#10005;</button>
        </div>
        <div className="chat-body">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.sender}`}>{m.text}</div>
          ))}
          {typing && (
            <div className="typing-indicator">
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={endRef} />
        </div>
        {!typing && messages.length === 1 && (
           <div style={{ padding: '0 1.2rem', paddingBottom: '1rem', background: 'var(--bg)', display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
             <p style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 600 }}>Suggested</p>
             {suggestions.map(s => <button key={s} className="chat-sug" onClick={() => sendMsg(s)}>{s}</button>)}
           </div>
        )}
        <div className="chat-footer">
          <input 
            type="text" 
            className="chat-input" 
            placeholder="Ask a question..." 
            value={input} 
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMsg(input)}
          />
          <button className="chat-send" onClick={() => sendMsg(input)}>&rarr;</button>
        </div>
      </div>
      
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
        <span className="chat-badge" style={{ display: open ? 'none' : 'flex' }}>1</span>
      </button>
    </div>
  );
}
