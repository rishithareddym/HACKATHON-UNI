import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = getCourseById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div style={{ padding: '10rem 4rem', minHeight: '100vh', background: 'var(--bg)', textAlign: 'center' }}>
        <Navbar />
        <h1 className="hero-title">Course Not Found</h1>
        <button className="btn-dark" onClick={() => navigate('/courses')} style={{ marginTop: '2rem' }}>&larr; Back to Catalog</button>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />

      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'var(--deep)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(200,150,42,0.1) 0%, transparent 60%)' }}></div>
        <button onClick={() => navigate('/courses')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,.5)', letterSpacing: '.1em', fontSize: '.7rem', textTransform: 'uppercase', cursor: 'none', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '.5rem', fontWeight: 700 }}>
          &larr; Back to Catalog
        </button>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '3rem', background: 'rgba(255,255,255,.05)', padding: '1rem', borderRadius: '16px' }}>{course.icon}</span>
          <div style={{ background: 'var(--gold)', color: 'var(--deep)', padding: '.4rem .8rem', fontSize: '.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em' }}>{course.category}</div>
        </div>
        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', color: '#fff', marginBottom: '1.5rem' }}>
          {course.name}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,.7)', maxWidth: '700px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          {course.description}
        </p>

        <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: '2rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ display: 'block', textTransform: 'uppercase', fontSize: '.65rem', color: 'var(--gold2)', letterSpacing: '.1em', fontWeight: 700 }}>Duration</span>
            <span style={{ fontSize: '1.2rem', fontFamily: 'Instrument Serif, serif' }}>{course.duration}</span>
          </div>
          <div>
            <span style={{ display: 'block', textTransform: 'uppercase', fontSize: '.65rem', color: 'var(--gold2)', letterSpacing: '.1em', fontWeight: 700 }}>Avg Starting CTC</span>
            <span style={{ fontSize: '1.2rem', fontFamily: 'Instrument Serif, serif' }}>{course.salary}</span>
          </div>
          <div>
            <span style={{ display: 'block', textTransform: 'uppercase', fontSize: '.65rem', color: 'var(--gold2)', letterSpacing: '.1em', fontWeight: 700 }}>Rating</span>
            <span style={{ fontSize: '1.2rem', fontFamily: 'Instrument Serif, serif' }}>{course.rank}</span>
          </div>
        </div>
      </section>

      <div style={{ padding: '6rem 4rem', display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'start' }} className="course-detail-layout">
        <div>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Core <strong>Modules</strong></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {course.modules.map((mod, i) => (
              <div key={i} style={{ padding: '1.5rem', background: '#fff', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s', cursor: 'none' }} className="module-card">
                <div style={{ width: '40px', height: '40px', background: 'rgba(26,39,68,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'var(--deep)', fontWeight: 800 }}>
                  0{i + 1}
                </div>
                <div style={{ fontWeight: 700, fontSize: '.95rem' }}>{mod}</div>
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem', marginTop: '4rem' }}>Career <strong>Trajectories</strong></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {course.career_paths.map((path, i) => (
              <div key={i} style={{ padding: '1rem 2rem', background: 'var(--bg2)', border: '1px solid var(--border)', fontSize: '.85rem', fontWeight: 700, color: 'var(--ink)' }}>
                {path}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', padding: '3rem', border: '1px solid var(--border)', position: 'sticky', top: '100px', boxShadow: '0 20px 50px rgba(15,14,11,.08)' }}>
          <h3 style={{ fontSize: '1.5rem', fontFamily: 'Instrument Serif, serif', marginBottom: '1.5rem' }}>Ready to shape the future?</h3>
          <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Applications for the Fall 2026 incoming class are currently open. Secure your place at the frontier of innovation.
          </p>
          <button className="btn-dark glow" style={{ width: '100%', textAlign: 'center', marginBottom: '1rem' }}>Apply Now &rarr;</button>
          <button className="btn-outline" style={{ width: '100%', textAlign: 'center' }}>Download Brochure</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetail;
