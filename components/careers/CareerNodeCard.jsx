import React from 'react';

export default function CareerNodeCard({
  node,
  visible,
  transitionDelay,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`flow-node clickable ${node.cls} ${visible ? 'visible' : ''} ${selected ? 'selected' : ''}`}
      style={{ transitionDelay }}
      onClick={onClick}
      aria-label={`${node.title} career details`}
    >
      <div className="fn-icon">{node.icon}</div>
      <div className="fn-title">{node.title}</div>
      <div className="fn-salary">{node.salary}</div>
    </button>
  );
}

