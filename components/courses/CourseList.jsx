import React from 'react';
import CourseCard from './CourseCard';

export default function CourseList({ courses, onView, onApply }) {
  return (
    <div className="courses-grid">
      {courses.map((c) => (
        <CourseCard
          key={c.id}
          course={c}
          onViewDetails={() => onView(c)}
          onApply={() => onApply(c)}
        />
      ))}
    </div>
  );
}

