import React, { useState } from 'react';

const alumniData = [
  {
    cat: 'tech', featured: true, size: 'large', badge: '🏆 Top Alumni 2025', avatar: 'R', avatarBg: 'linear-gradient(135deg,#1a2744,#4a6fa5)',
    name: 'Riya Mehta', role: 'Senior AI Research Lead', company: 'Google DeepMind · London, UK',
    batch: 'B.Tech CSE, Batch 2018', impactNum: '4', impactLbl: 'Published Nature papers',
    quote: '"NEXUS didn\'t just give me a degree — it gave me a hunger for problems nobody had solved yet. My final-year research project became the foundation of a paper that changed how we think about multi-modal AI. The faculty here treats students like colleagues, not numbers."'
  },
  {
    cat: 'founder', badge: '🚀 Startup Founder', avatar: 'A', avatarBg: 'linear-gradient(135deg,#c8962a,#e8b84b)',
    name: 'Arjun Kapoor', role: 'Co-Founder & CEO', company: 'Kira Health · YC W23',
    quote: '"Dropped my ₹35 LPA Google offer to build Kira from a dorm room. Two years later, Series A, 80-person team, impacting 2M+ patients."',
    batch: 'Batch 2020', course: 'CSE', achievement: '💰 $14M Raised'
  },
  {
    cat: 'tech', badge: '💼 Placed at Microsoft', avatar: 'S', avatarBg: 'linear-gradient(135deg,#2d8c4e,#42d275)',
    name: 'Sneha Varghese', role: 'Principal Engineer', company: 'Microsoft Azure · Seattle',
    quote: '"My internship became a full-time offer. NEXUS\'s industry-first curriculum meant I was ahead of peers from 12 other universities on Day 1."',
    batch: 'Batch 2019', course: 'EE', achievement: '⭐ ₹52 LPA'
  },
  {
    cat: 'research', badge: '🔬 Researcher', avatar: 'P', avatarBg: 'linear-gradient(135deg,#4a2d8c,#8c5af5)',
    name: 'Dr. Priya Nair', role: 'Climate Scientist', company: 'NASA JPL · California',
    quote: '"My PhD work at NEXUS on atmospheric modelling is now part of NASA\'s climate prediction infrastructure. It started as a semester project."',
    batch: 'Batch 2015', course: 'Physics', achievement: '🏅 NASA Award'
  },
  {
    cat: 'founder', badge: '🦄 Unicorn Founder', avatar: 'V', avatarBg: 'linear-gradient(135deg,#e84545,#f5a623)',
    name: 'Vikram Anand', role: 'Founder & CTO', company: 'Finplex · Unicorn 2024',
    quote: '"We built the first NEXUS unicorn. The entrepreneurship cell, the mentors, the lab access — NEXUS gave us an unfair advantage."',
    batch: 'Batch 2017', course: 'MBA', achievement: '🦄 $1.2B Valuation'
  },
  {
    cat: 'tech', badge: '💻 Placed at Amazon', avatar: 'K', avatarBg: 'linear-gradient(135deg,#1a2744,#2d5fa6)',
    name: 'Kavya Reddy', role: 'ML Engineer L6', company: 'Amazon AWS · Bangalore',
    quote: '"Went from sitting in NLP labs at NEXUS to building recommendation systems used by 500M+ Amazon customers. The foundation here is unreal."',
    batch: 'Batch 2021', course: 'CSE AI', achievement: '⭐ ₹44 LPA'
  }
];

const Alumni = () => {
  const [filter, setFilter] = useState('all');

  const filtered = alumniData.filter(a => filter === 'all' || a.cat === filter);

  return (
    <section className="alumni-section" id="alumni">
      <div className="alumni-header">
        <div>
          <div className="section-eyebrow">Alumni Success Stories</div>
          <h2 className="section-title">They studied here.<br /><strong>Now they shape the world.</strong></h2>
        </div>
        <div className="alumni-filter">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'tech' ? 'active' : ''}`} onClick={() => setFilter('tech')}>Tech</button>
          <button className={`filter-btn ${filter === 'founder' ? 'active' : ''}`} onClick={() => setFilter('founder')}>Founders</button>
          <button className={`filter-btn ${filter === 'research' ? 'active' : ''}`} onClick={() => setFilter('research')}>Research</button>
        </div>
      </div>

      <div className="alumni-grid">
        {filtered.map((item, idx) => (
          <div className={`alumni-card ${item.size === 'large' ? 'large' : ''} ${item.featured ? 'featured' : ''}`} key={idx}>
            {item.size === 'large' ? (
              <React.Fragment>
                <div className="alumni-card-top">
                  <div className="alumni-company-badge">{item.badge}</div>
                  <div className="alumni-avatar" style={{ background: item.avatarBg, color: '#fff' }}>{item.avatar}</div>
                  <div className="alumni-name">{item.name}</div>
                  <div className="alumni-role">{item.role}</div>
                  <div className="alumni-company">{item.company}</div>
                  <div className="alumni-divider"></div>
                  <div style={{ fontSize: '.72rem', color: 'var(--muted)', fontWeight: '600' }}>{item.batch}</div>
                  <div className="alumni-impact-number">{item.impactNum}</div>
                  <div className="alumni-impact-label">{item.impactLbl}</div>
                </div>
                <div className="alumni-quote">
                  {item.quote}
                  <br /><br />
                  <a href="#" style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--deep)', letterSpacing: '.05em', textTransform: 'uppercase' }}>Read Full Story &rarr;</a>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="alumni-card-top">
                  <div className="alumni-company-badge">{item.badge}</div>
                  <div className="alumni-avatar" style={{ background: item.avatarBg, color: '#fff' }}>{item.avatar}</div>
                  <div className="alumni-name">{item.name}</div>
                  <div className="alumni-role">{item.role}</div>
                  <div className="alumni-company">{item.company}</div>
                </div>
                <div className="alumni-divider" style={{ margin: '0 2rem' }}></div>
                <div className="alumni-quote">{item.quote}</div>
                <div className="alumni-card-footer">
                  <span className="alumni-batch">{item.batch}</span>
                  <span className="alumni-course-tag">{item.course}</span>
                  <span className="alumni-achievement">{item.achievement}</span>
                </div>
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumni;
