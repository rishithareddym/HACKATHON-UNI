import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCourseById } from '../../components/courses/coursesData';

export default function CourseDetail() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const course = useMemo(() => getCourseById(courseId), [courseId]);

  if (!course) {
    return (
      <section className="courses-section courses-page-animate">
        <div className="courses-wrap">
          <div className="apply-card">
            <div className="section-eyebrow" style={{ color: 'var(--gold2)' }}>
              Courses
            </div>
            <h2 className="section-title">
              Course <strong>not found</strong>
            </h2>
            <p className="section-sub">Please return to the courses list.</p>
            <div className="apply-actions">
              <button className="apply-secondary" type="button" onClick={() => navigate('/courses')}>
                Back to Courses
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="courses-section courses-page-animate">
      <div className="courses-wrap">
        <div className="career-breadcrumb" style={{ marginBottom: '1.2rem' }}>
          <button type="button" className="career-breadcrumb-link" onClick={() => navigate('/courses')}>
            Courses
          </button>
          <span className="career-breadcrumb-sep">/</span>
          <span>{course.name}</span>
        </div>

        <div className="course-detail-card">
          <div className="course-detail-top">
            <div className="course-detail-icon">{course.icon}</div>
            <div>
              <h1 className="course-detail-title">{course.name}</h1>
              <div className="course-detail-sub">
                {course.duration} · {course.seats} Seats · {course.fees}
              </div>
            </div>

            <div className="course-detail-actions">
              <button className="course-btn-secondary" type="button" onClick={() => navigate('/courses')}>
                Back
              </button>
              <button className="course-btn-primary" type="button" onClick={() => navigate(`/courses/${course.id}/apply`)}>
                Apply Now
              </button>
            </div>
          </div>

          <div className="course-detail-grid">
            <div className="course-detail-box">
              <div className="course-detail-box-title">Description</div>
              <div className="course-detail-text">{course.description}</div>
            </div>

            <div className="course-detail-box">
              <div className="course-detail-box-title">Eligibility</div>
              <div className="course-detail-text">{course.eligibility}</div>
            </div>

            <div className="course-detail-box course-detail-span">
              <div className="course-detail-box-title">Curriculum (Mock)</div>
              <ul className="course-detail-list">
                {course.curriculum.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>

            <div className="course-detail-box course-detail-span">
              <div className="course-detail-box-title">Placements</div>
              <div className="course-detail-text">{course.placement}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

