import React from 'react';

const News = () => {
  return (
    <section className="news-section">
      <div className="section-eyebrow">Latest News</div>
      <h2 className="section-title">Stories from <strong>our campus.</strong></h2>
      <div className="news-grid">
        <div className="news-card featured">
          <div className="news-img"><span>🏆</span><div className="news-img-overlay"></div></div>
          <div className="news-body">
            <div className="news-cat">Achievement</div>
            <div className="news-title">NEXUS ranked #7 nationally by QS World University Rankings 2026, moving up 4 places from last year.</div>
            <div className="news-meta"><span>March 18, 2026</span><span>5 min read</span></div>
          </div>
        </div>
        <div className="news-card">
          <div className="news-img" style={{ background: 'linear-gradient(135deg,#2d4a8c,#1a2744)' }}><span>🔬</span><div className="news-img-overlay"></div></div>
          <div className="news-body">
            <div className="news-cat">Research</div>
            <div className="news-title">NEXUS Lab secures $12M DARPA grant for quantum error correction research.</div>
            <div className="news-meta"><span>Mar 10, 2026</span><span>3 min read</span></div>
          </div>
        </div>
        <div className="news-card">
          <div className="news-img" style={{ background: 'linear-gradient(135deg,#2d8c4e,#1a4a30)' }}><span>🌱</span><div className="news-img-overlay"></div></div>
          <div className="news-body">
            <div className="news-cat">Campus</div>
            <div className="news-title">NEXUS commits to net-zero campus emissions by 2030 with new solar grid.</div>
            <div className="news-meta"><span>Mar 5, 2026</span><span>4 min read</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
