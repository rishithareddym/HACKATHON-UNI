import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { courses, getCategories } from '../data/courses';

const CoursesHub = () => {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState('View All');
  const categories = getCategories();
  
  // Make sure to scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCourses = activeCat === 'View All' 
    ? courses 
    : courses.filter(c => c.category === activeCat);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '8rem' }}>
      <Navbar />
      
      <div style={{ padding: '0 4rem', marginBottom: '4rem' }}>
        <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          Explore <strong>Programs</strong>
        </h1>
        <p className="hero-sub" style={{ maxWidth: '600px' }}>
          Filter through our extensive catalogue of 180+ undergraduate, postgraduate, and research degrees to find the perfect trajectory for your career.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '3rem', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}
              style={{ borderRadius: '20px', padding: '0.6rem 1.4rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="course-card" onClick={() => navigate(`/course/${course.id}`)}>
              <div className="course-card-top">
                <div className="cc-icon">{course.icon}</div>
                <div className="cc-badge">{course.category}</div>
              </div>
              <h3 className="cc-title">{course.name}</h3>
              <p className="cc-desc">{course.short_desc}</p>
              <div className="cc-footer">
                <span className="cc-duration">⏱ {course.duration}</span>
                <span className="cc-arrow">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CoursesHub;
