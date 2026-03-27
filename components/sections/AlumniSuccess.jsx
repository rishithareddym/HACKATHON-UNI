import React, { useState } from 'react';

export default function AlumniSuccess() {
  const [filter, setFilter] = useState('all');

  const show = (cat) => filter === 'all' || filter === cat;

  return (
    <section className="alumni-section" id="alumni">
      <div className="alumni-header">
        <div>
          <div className="section-eyebrow">Alumni Success Stories</div>
          <h2 className="section-title">They studied here.<br/><strong>Now they shape the world.</strong></h2>
        </div>
        <div className="alumni-filter">
          {['all', 'tech', 'founder', 'research'].map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`} 
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="alumni-grid">
        <div className="alumni-card large featured" style={{ display: show('tech') ? '' : 'none' }}>
          <div className="alumni-card-top">
            <div className="alumni-company-badge">&#127942; Top Alumni 2025</div>
            <div className="alumni-avatar" style={{ background: 'linear-gradient(135deg,#1a2744,#4a6fa5)', color: '#fff' }}>R</div>
            <div className="alumni-name">Riya Mehta</div>
            <div className="alumni-role">Senior AI Research Lead</div>
            <div className="alumni-company">Google DeepMind &middot; London, UK</div>
            <div className="alumni-divider"></div>
            <div style={{ fontSize: '.72rem', color: 'var(--muted)', fontWeight: 600 }}>B.Tech CSE, Batch 2018</div>
            <div className="alumni-impact-number">4</div>
            <div className="alumni-impact-label">Published Nature papers</div>
          </div>
          <div className="alumni-quote">
            "BMSCE didn't just give me a degree &mdash; it gave me a hunger for problems nobody had solved yet. My final-year research project became the foundation of a paper that changed how we think about multi-modal AI."
            <br/><br/>
            <a href="#" style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--deep)', letterSpacing: '.05em', textTransform: 'uppercase' }}>Read Full Story &rarr;</a>
          </div>
        </div>

        <div className="alumni-card" style={{ display: show('founder') ? '' : 'none' }}>
          <div className="alumni-card-top">
            <div className="alumni-company-badge">&#128640; Startup Founder</div>
            <div className="alumni-avatar" style={{ background: 'linear-gradient(135deg,#c8962a,#e8b84b)', color: '#fff' }}>A</div>
            <div className="alumni-name">Arjun Kapoor</div>
            <div className="alumni-role">Co-Founder & CEO</div>
            <div className="alumni-company">Kira Health &middot; YC W23</div>
          </div>
          <div className="alumni-divider" style={{ margin: '0 2rem' }}></div>
          <div className="alumni-quote">"Dropped my &#8377;35 LPA Google offer to build Kira from a dorm room. Two years later, Series A, 80-person team, impacting 2M+ patients."</div>
          <div className="alumni-card-footer">
            <span className="alumni-batch">Batch 2020</span>
            <span className="alumni-course-tag">CSE</span>
            <span className="alumni-achievement">&#128176; $14M Raised</span>
          </div>
        </div>

        <div className="alumni-card" style={{ display: show('tech') ? '' : 'none' }}>
          <div className="alumni-card-top">
            <div className="alumni-company-badge">&#128188; Placed at Microsoft</div>
            <div className="alumni-avatar" style={{ background: 'linear-gradient(135deg,#2d8c4e,#42d275)', color: '#fff' }}>S</div>
            <div className="alumni-name">Sneha Varghese</div>
            <div className="alumni-role">Principal Engineer</div>
            <div className="alumni-company">Microsoft Azure &middot; Seattle</div>
          </div>
          <div className="alumni-divider" style={{ margin: '0 2rem' }}></div>
          <div className="alumni-quote">"My internship became a full-time offer. BMSCE's industry-first curriculum meant I was ahead of peers from 12 other universities on Day 1."</div>
          <div className="alumni-card-footer">
            <span className="alumni-batch">Batch 2019</span>
            <span className="alumni-course-tag">EE</span>
            <span className="alumni-achievement">&#11088; &#8377;52 LPA</span>
          </div>
        </div>

        <div className="alumni-card" style={{ display: show('research') ? '' : 'none' }}>
          <div className="alumni-card-top">
            <div className="alumni-company-badge">&#128300; Researcher</div>
            <div className="alumni-avatar" style={{ background: 'linear-gradient(135deg,#4a2d8c,#8c5af5)', color: '#fff' }}>P</div>
            <div className="alumni-name">Dr. Priya Nair</div>
            <div className="alumni-role">Climate Scientist</div>
            <div className="alumni-company">NASA JPL &middot; California</div>
          </div>
          <div className="alumni-divider" style={{ margin: '0 2rem' }}></div>
          <div className="alumni-quote">"My PhD work at BMSCE on atmospheric modelling is now part of NASA's climate prediction infrastructure. It started as a semester project."</div>
          <div className="alumni-card-footer">
            <span className="alumni-batch">Batch 2015</span>
            <span className="alumni-course-tag">Physics</span>
            <span className="alumni-achievement">&#127941; NASA Award</span>
          </div>
        </div>

        <div className="alumni-card" style={{ display: show('founder') ? '' : 'none' }}>
          <div className="alumni-card-top">
            <div className="alumni-company-badge">&#129412; Unicorn Founder</div>
            <div className="alumni-avatar" style={{ background: 'linear-gradient(135deg,#e84545,#f5a623)', color: '#fff' }}>V</div>
            <div className="alumni-name">Vikram Anand</div>
            <div className="alumni-role">Founder & CTO</div>
            <div className="alumni-company">Finplex &middot; Unicorn 2024</div>
          </div>
          <div className="alumni-divider" style={{ margin: '0 2rem' }}></div>
          <div className="alumni-quote">"We built the first BMSCE unicorn. The entrepreneurship cell, the mentors, the lab access &mdash; the college gave us an unfair advantage."</div>
          <div className="alumni-card-footer">
            <span className="alumni-batch">Batch 2017</span>
            <span className="alumni-course-tag">MBA</span>
            <span className="alumni-achievement">&#129412; $1.2B Valuation</span>
          </div>
        </div>

        <div className="alumni-card" style={{ display: show('tech') ? '' : 'none' }}>
          <div className="alumni-card-top">
            <div className="alumni-company-badge">&#128187; Placed at Amazon</div>
            <div className="alumni-avatar" style={{ background: 'linear-gradient(135deg,#1a2744,#2d5fa6)', color: '#fff' }}>K</div>
            <div className="alumni-name">Kavya Reddy</div>
            <div className="alumni-role">ML Engineer L6</div>
            <div className="alumni-company">Amazon AWS &middot; Bangalore</div>
          </div>
          <div className="alumni-divider" style={{ margin: '0 2rem' }}></div>
          <div className="alumni-quote">"Went from sitting in NLP labs at BMSCE to building recommendation systems used by 500M+ Amazon customers. The foundation here is unreal."</div>
          <div className="alumni-card-footer">
            <span className="alumni-batch">Batch 2021</span>
            <span className="alumni-course-tag">CSE AI</span>
            <span className="alumni-achievement">&#11088; &#8377;44 LPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
