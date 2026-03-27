import React from 'react';

const Research = () => {
  return (
    <section className="research-section" id="research">
      <div className="section-eyebrow">Research & Innovation</div>
      <h2 className="section-title">Solving problems that <strong>matter.</strong></h2>
      <p className="section-sub">NEXUS researchers are at the forefront of 12 core research verticals, with 340+ active projects and $75M in external funding.</p>
      
      <div className="research-grid">
        <div className="research-card reveal">
          <div className="rc-category">AI & Machine Learning</div>
          <div className="rc-title">Self-Supervised Vision Models for Low-Resource Medical Imaging</div>
          <div className="rc-authors">Dr. Ananya Iyer, Dr. Rahul Desai et al.</div>
          <div className="rc-abstract">A novel architecture achieving 94.7% accuracy on rare disease classification with only 200 labelled samples — published in Nature Medicine, 2025.</div>
          <div className="rc-footer">
            <span className="rc-citations">📄 182 citations</span>
            <a href="#" className="rc-link">Read Paper &rarr;</a>
          </div>
        </div>
        
        <div className="research-card reveal reveal-delay-1">
          <div className="rc-category">Climate Science</div>
          <div className="rc-title">Real-Time Carbon Sequestration Modelling Using Satellite Telemetry</div>
          <div className="rc-authors">Dr. Priya Nair, Siddharth Rao</div>
          <div className="rc-abstract">Deployed in partnership with ISRO; covers 2.3M sq km of forest canopy. Now feeding into India's national carbon accounting framework.</div>
          <div className="rc-footer">
            <span className="rc-citations">📄 94 citations</span>
            <a href="#" className="rc-link">Read Paper &rarr;</a>
          </div>
        </div>
        
        <div className="research-card reveal reveal-delay-2">
          <div className="rc-category">Quantum Computing</div>
          <div className="rc-title">Error Correction in Superconducting Qubits at Room Temperature</div>
          <div className="rc-authors">Prof. K. Venkataraman et al.</div>
          <div className="rc-abstract">A breakthrough result reducing qubit decoherence by 67% using novel topological error-correction codes. Patent pending, 2 spin-off companies in progress.</div>
          <div className="rc-footer">
            <span className="rc-citations">📄 211 citations</span>
            <a href="#" className="rc-link">Read Paper &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
