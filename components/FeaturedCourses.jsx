import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getFeaturedCourses } from '../data/courses';

const FeaturedCourses = () => {
  const navigate = useNavigate();
  const featured = getFeaturedCourses();

  return (
    <section className="featured-section" id="featured">
      <div className="section-eyebrow" style={{ color: 'var(--gold)' }}>Explore Curriculums</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 className="section-title">Featured <strong>Programs</strong></h2>
          <p className="section-sub" style={{ margin: 0 }}>Discover degrees designed to reconstruct the future of industry.</p>
        </div>
        <button className="btn-outline" onClick={() => navigate('/courses')} style={{ cursor: 'none' }}>
          View All Courses &rarr;
        </button>
      </div>

      <div className="featured-grid">
        {featured.map(course => (
          <div key={course.id} className="featured-card" onClick={() => navigate(`/course/${course.id}`)}>
            <div className="fc-icon">{course.icon}</div>
            <div className="fc-content">
              <div className="fc-category">{course.category}</div>
              <h3 className="fc-title">{course.name}</h3>
              <p className="fc-desc">{course.short_desc}</p>
            </div>
            <div className="fc-footer">
              <span className="fc-duration">{course.duration}</span>
              <span className="fc-arrow">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
