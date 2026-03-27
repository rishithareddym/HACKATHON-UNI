import React from 'react';

const researchPapers = [
  { id: 1, cat: 'Artificial Intelligence', title: 'Federated Learning for Privacy-Preserving Healthcare Diagnostics', authors: 'Dr. R. Sharma, K. Reddy (UG), et al.', abstract: 'A novel approach to training deep learning models on distributed patient data without compromising personal health information security.', citations: '48 Citations', link: 'Nature AI \u00b7 2024' },
  { id: 2, cat: 'Materials Science', title: 'Graphene-infused Concrete for Sustainable Urban Infrastructure', authors: 'Prof. S. Gupta, M. Desai (UG)', abstract: 'Evaluating the tensile strength and carbon footprint reduction of novel composite building materials using industrial waste.', citations: '124 Citations', link: 'Sci Advances \u00b7 2023' },
  { id: 3, cat: 'Quantum Computing', title: 'Error Correction Algorithms in Noisy Intermediate-Scale Quantum Systems', authors: 'Dr. V. Anand, P. Iyer (UG)', abstract: 'Proposing a new fault-tolerant quantum error correction protocol that reduces qubit overhead by 40%.', citations: '12 Citations', link: 'PRX Quantum \u00b7 2025' }
];

export default function Research() {
  return (
    <section className="research-section" id="research">
      <div className="section-eyebrow">Pioneering Research</div>
      <h2 className="section-title">Expanding the boundaries of <strong>human knowledge.</strong></h2>
      <p className="section-sub">At BMSCE, undergraduates don't just read about breakthroughs—they co-author them. Our labs are tackling the defining challenges of our time.</p>

      <div className="research-grid">
        {researchPapers.map(paper => (
          <div className="research-card reveal" key={paper.id}>
            <div className="rc-category">{paper.cat}</div>
            <div className="rc-title">{paper.title}</div>
            <div className="rc-authors">{paper.authors}</div>
            <div className="rc-abstract">{paper.abstract}</div>
            <div className="rc-footer">
              <span className="rc-citations">{paper.citations}</span>
              <a href="#" className="rc-link">Read Paper &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
