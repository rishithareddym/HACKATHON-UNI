import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CourseList from '../../components/courses/CourseList';
import { filterCoursesByInterest } from '../../components/courses/coursesData';

function readSavedInterest() {
  try {
    return localStorage.getItem('courseFinderInterest');
  } catch {
    return null;
  }
}

export default function CoursesRecommendations() {
  const navigate = useNavigate();
  const location = useLocation();
  const interest = location.state?.interest || readSavedInterest() || 'tech';

  const courses = useMemo(() => filterCoursesByInterest(interest), [interest]);

  const labelMap = {
    tech: 'Tech & Software',
    science: 'Science & Discovery',
    business: 'Business & Strategy',
    design: 'Design & Creativity',
    impact: 'Social Impact',
  };

  return (
    <section className="courses-section courses-page-animate">
      <div className="courses-wrap">
        <div className="section-eyebrow">Smart Course Finder</div>
        <h2 className="section-title">
          Recommended <strong>programs</strong>
        </h2>
        <p className="section-sub">
          Based on your interest: <strong style={{ color: 'var(--deep)' }}>{labelMap[interest] || interest}</strong>
        </p>

        <div className="courses-actions-top">
          <button className="apply-secondary" type="button" onClick={() => navigate('/#academics')}>
            &larr; Back to Finder
          </button>
          <button className="course-btn-primary" type="button" onClick={() => navigate('/courses')}>
            View All Courses
          </button>
        </div>

        <CourseList
          courses={courses}
          onView={(c) => navigate(`/courses/${c.id}`)}
          onApply={(c) => navigate(`/courses/${c.id}/apply`)}
        />
      </div>
    </section>
  );
}

