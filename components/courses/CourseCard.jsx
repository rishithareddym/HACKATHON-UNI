import React from 'react';

export default function CourseCard({ course, onViewDetails, onApply }) {
  return (
    <div className="coursecard">
      <div className="coursecard-top">
        <div className="coursecard-icon">{course.icon}</div>
        <div className="coursecard-head">
          <div className="coursecard-name">{course.name}</div>
          <div className="coursecard-sub">
            {course.duration} · {course.seats} Seats · {course.fees}
          </div>
        </div>
      </div>

      <div className="coursecard-meta">
        <span className="course-pill">{course.category}</span>
      </div>

      <div className="coursecard-actions">
        <button className="course-btn-secondary" type="button" onClick={onViewDetails}>
          View Details
        </button>
        <button className="course-btn-primary" type="button" onClick={onApply}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

