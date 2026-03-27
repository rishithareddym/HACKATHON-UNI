import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CourseApplicationForm from '../../components/courses/CourseApplicationForm';
import { getCourseById } from '../../components/courses/coursesData';

export default function CourseApply() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const course = useMemo(() => getCourseById(courseId), [courseId]);

  if (!course) {
    return (
      <section className="courses-section courses-page-animate">
        <div className="courses-wrap">
          <div className="apply-card">
            <h2 className="section-title">
              Course <strong>not found</strong>
            </h2>
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
          <button type="button" className="career-breadcrumb-link" onClick={() => navigate(`/courses/${course.id}`)}>
            {course.name}
          </button>
          <span className="career-breadcrumb-sep">/</span>
          <span>Apply</span>
        </div>

        <div className="course-apply-card">
          <div className="section-eyebrow" style={{ color: 'var(--gold2)' }}>
            Apply
          </div>
          <h2 className="section-title">
            Application for <strong>{course.name}</strong>
          </h2>
          <p className="section-sub">Submit your details and we’ll contact you with the next steps.</p>

          <CourseApplicationForm course={course} />

          <div className="event-reg-actions" style={{ marginTop: '1rem' }}>
            <button className="apply-secondary" type="button" onClick={() => navigate(`/courses/${course.id}`)}>
              Back to Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

