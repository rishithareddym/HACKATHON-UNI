import React from 'react';

const facultyList = [
  { id: 1, name: 'Dr. Sameer Patil', title: 'Dean of Computing', dept: 'Ex-Google Brain', tags: ['Deep Learning', 'NLP'], initial: 'S', color: 'linear-gradient(135deg,#c8962a,#e8b84b)' },
  { id: 2, name: 'Prof. Anita Rao', title: 'Chair of Design', dept: 'IDEO Alum', tags: ['HCI', 'Accessibility'], initial: 'A', color: 'linear-gradient(135deg,#4a2d8c,#8c5af5)' },
  { id: 3, name: 'Dr. Marcus Webb', title: 'Distinguished Fellow', dept: 'Robotics Lab', tags: ['Mechatronics', 'Control'], initial: 'M', color: 'linear-gradient(135deg,#e84545,#f5a623)' },
  { id: 4, name: 'Dr. Laila Khan', title: 'Assoc. Professor', dept: 'Bio-Engineering', tags: ['Genomics', 'CRISPR'], initial: 'L', color: 'linear-gradient(135deg,#2d8c4e,#42d275)' },
  { id: 5, name: 'Dr. Kenji Sato', title: 'Visiting Scholar', dept: 'Materials Science', tags: ['Nanotech', 'Graphene'], initial: 'K', color: 'linear-gradient(135deg,#1a2744,#2d5fa6)' }
];

export default function Faculty() {
  return (
    <section className="faculty-section" id="faculty">
      <div className="section-eyebrow">World-Class Mentors</div>
      <h2 className="section-title">Learn from the people <br/><strong>building the industry.</strong></h2>
      <p className="section-sub">Our faculty doesn't just teach theory. They are active researchers, former industry leaders, and entrepreneurs who bring real-world problems into the classroom.</p>

      <div className="faculty-scroll">
        {facultyList.map(f => (
          <div className="faculty-card reveal" key={f.id}>
            <div className="fac-avatar" style={{ background: f.color, color: '#fff' }}>{f.initial}</div>
            <div className="fac-name">{f.name}</div>
            <div className="fac-title">{f.title}</div>
            <div className="fac-dept">{f.dept}</div>
            <div className="fac-tags">
              {f.tags.map(tag => <span className="fac-tag" key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
        {/* Placeholder for scroll continuation */}
        <div style={{ padding: '0 2rem', display: 'flex', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '.8rem', fontWeight: 800, color: 'var(--deep)', textTransform: 'uppercase', letterSpacing: '.05em', whiteSpace: 'nowrap' }}>View All 400+ Faculty &rarr;</a>
        </div>
      </div>
    </section>
  );
}
