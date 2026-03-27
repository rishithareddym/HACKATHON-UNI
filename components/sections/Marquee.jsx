import React from 'react';

export default function Marquee() {
  const items = [
    'Google', 'Microsoft', 'ISRO', 'Stanford Collaboration', 
    'McKinsey & Company', 'Amazon', 'Goldman Sachs', 
    'Tesla', 'NASSCOM Partner', 'Anthropic', 'OpenAI', 'Adobe'
  ];
  
  // Duplicate for smooth infinite scroll
  const allItems = [...items, ...items];

  return (
    <div className="marquee-band">
      <div className="marquee-inner">
        {allItems.map((name, index) => (
          <div className="marquee-item" key={index}>
            {name} <span className="sep">&#10022;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
