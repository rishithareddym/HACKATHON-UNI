import React from 'react';

const news = [
  { id: 1, cat: 'Award', title: 'Zenith AI Research Team Wins 1st Prize at Global Tech Challenge', meta: 'Nov 10 \u00b7 4 min read', img: '\ud83c\udfc6', featured: true },
  { id: 2, cat: 'Partnership', title: 'New $5M Robotics Lab Setup with Industry Partner', meta: 'Nov 8 \u00b7 3 min read', img: '\ud83e\udd16', featured: false },
  { id: 3, cat: 'Alumni', title: 'Startups by Batch of 2021 Surpass $100M Valuation', meta: 'Nov 2 \u00b7 5 min read', img: '\ud83d\ude80', featured: false }
];

export default function News() {
  return (
    <section className="news-section" id="news">
      <div className="section-eyebrow">News & Updates</div>
      <h2 className="section-title">The latest from <strong>campus.</strong></h2>

      <div className="news-grid">
        {news.map((item) => (
          <div className={`news-card reveal ${item.featured ? 'featured' : ''}`} key={item.id}>
            <div className="news-img">
              <span style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,.2))' }}>{item.img}</span>
              <div className="news-img-overlay"></div>
            </div>
            <div className="news-body">
              <div className="news-cat">{item.cat}</div>
              <div className="news-title">{item.title}</div>
              <div className="news-meta">
                <span>{item.meta}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
