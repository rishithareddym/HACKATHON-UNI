import React from 'react';

const facultyData = [
  { avatar: 'AK', name: 'Prof. Anil Kumar', title: 'Distinguished Professor', dept: 'Computer Science', tags: ['AI', 'NLP', 'CV'], bg: 'linear-gradient(135deg,#1a2744,#4a6fa5)' },
  { avatar: 'SR', name: 'Dr. Sheela Rao', title: 'Associate Professor', dept: 'Biotechnology', tags: ['CRISPR', 'Genomics'], bg: 'linear-gradient(135deg,#c8962a,#e8b84b)' },
  { avatar: 'MV', name: 'Prof. Mohan Vyas', title: 'Dean of Engineering', dept: 'Mechanical Engg', tags: ['Robotics', 'CAD'], bg: 'linear-gradient(135deg,#2d8c4e,#42d275)' },
  { avatar: 'TN', name: 'Dr. Tara Nair', title: 'Professor', dept: 'Physics', tags: ['Quantum', 'Optics'], bg: 'linear-gradient(135deg,#4a2d8c,#8c5af5)' },
  { avatar: 'RK', name: 'Prof. Ravi Krishnan', title: 'Entrepreneur-in-Res', dept: 'Business School', tags: ['Strategy', 'VC'], bg: 'linear-gradient(135deg,#e84545,#f5a623)' },
  { avatar: 'PJ', name: 'Dr. Priya Joshi', title: 'Assoc. Professor', dept: 'Design School', tags: ['UX', 'Research'], bg: 'linear-gradient(135deg,#8c4a2a,#c87b4e)' },
  { avatar: 'AS', name: 'Prof. Amit Sharma', title: 'Professor & Researcher', dept: 'Data Science', tags: ['ML', 'Statistics'], bg: 'linear-gradient(135deg,#2a4a8c,#4a7af5)' },
];

const Faculty = () => {
  return (
    <section className="faculty-section">
      <div className="section-eyebrow">Faculty Spotlight</div>
      <h2 className="section-title">Learn from the <strong>best in the field.</strong></h2>
      <p className="section-sub">Our 1,200+ faculty include Turing Award winners, Padma Shri awardees, and executives from global companies.</p>
      
      <div className="faculty-scroll">
        {facultyData.map((f, i) => (
          <div className="faculty-card" key={i}>
            <div className="fac-avatar" style={{ background: f.bg, color: '#fff' }}>{f.avatar}</div>
            <div className="fac-name">{f.name}</div>
            <div className="fac-title">{f.title}</div>
            <div className="fac-dept">{f.dept}</div>
            <div className="fac-tags">
              {f.tags.map((t, j) => <span className="fac-tag" key={j}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;
