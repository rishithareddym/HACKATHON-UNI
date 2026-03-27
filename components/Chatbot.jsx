import React, { useState, useRef, useEffect } from 'react';

const responses = {
  'how do i apply': 'To apply to NEXUS University:\n1. Visit our Admissions page\n2. Fill the online form\n3. Upload your transcripts + SOP\n4. Pay ₹1,500 application fee\n\nDeadline: March 31, 2026 🎓',
  'what programs are available': 'We offer 180+ programs including:\n• B.Tech (CSE, EE, Biotech, Civil, Mech)\n• MBA (Analytics, Marketing, Finance)\n• B.Des Interaction Design\n• M.Tech & PhD programs\n\nUse our Smart Course Finder for personalized recommendations!',
  'hostel facilities': 'NEXUS has 8 residential blocks for 6,000 students:\n• AC & Non-AC rooms\n• High-speed WiFi (1Gbps)\n• 24/7 security\n• Laundry, gym, common rooms\n• Mess + food courts\n\nMonthly cost: ₹8,000–₹14,000',
  'default': 'Thanks for asking! I can help you with:\n• Admissions process\n• Programs & courses\n• Fees & scholarships\n• Campus facilities\n• Events & deadlines\n\nWhat would you like to know? 😊'
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm NEXUS AI 👋 I can help you with admissions, courses, campus life, fees, and more. What would you like to know?", role: 'bot' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text) => {
    const msg = text.trim();
    if (!msg) return;
    
    setMessages(prev => [...prev, { text: msg, role: 'user' }]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const key = Object.keys(responses).find(k => msg.toLowerCase().includes(k));
      const reply = responses[key] || responses['default'];
      setMessages(p => [...p, { text: reply, role: 'bot' }]);
    }, 1200);
  };

  return (
    <div className="chat-fab">
      <div className={`chat-window ${open ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-avatar">🤖</div>
          <div>
            <div className="chat-name">NEXUS AI Assistant</div>
            <div className="chat-status"><span className="chat-status-dot"></span>Online — usually replies in seconds</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="chat-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div className={`chat-msg ${m.role}`} key={i} style={{ whiteSpace: 'pre-line' }}>{m.text}</div>
          ))}
          {messages.length === 1 && (
            <div className="chat-suggestions">
              <button className="chat-sug" onClick={() => handleSend('How do I apply?')}>How do I apply?</button>
              <button className="chat-sug" onClick={() => handleSend('What programs are available?')}>What programs are available?</button>
              <button className="chat-sug" onClick={() => handleSend('What are the hostel facilities?')}>Hostel facilities?</button>
            </div>
          )}
          {isTyping && (
            <div className="typing-indicator">
              <span></span><span></span><span></span>
            </div>
          )}
        </div>
        <div className="chat-footer">
          <input 
            className="chat-input" 
            placeholder="Type a message..." 
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSend(inputVal); }}
          />
          <button className="chat-send" onClick={() => handleSend(inputVal)}>➤</button>
        </div>
      </div>
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
        {!open && <div className="chat-badge">1</div>}
      </button>
      
      <div 
        className={`back-top ${open ? '' : 'show'}`} // Simplification for scroll top, generally you'd use a window scroll listener
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ opacity: open ? 0 : 1, zIndex: 300 }} // Hiding just so it won't crash
      >
        &uarr;
      </div>
    </div>
  );
};

export default Chatbot;
