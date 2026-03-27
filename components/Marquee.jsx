import React from 'react';

const Marquee = () => {
  const items = [
    "Google", "Microsoft", "ISRO", "Stanford Collaboration", "McKinsey & Company", 
    "Amazon", "Goldman Sachs", "Tesla", "NASSCOM Partner", "Anthropic", "OpenAI", "Adobe"
  ];
  const list = [...items, ...items];

  return (
    <div className="marquee-band">
      <div className="marquee-inner" id="mq">
        {list.map((item, index) => (
          <div className="marquee-item" key={index}>
            {item} <span className="sep">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
