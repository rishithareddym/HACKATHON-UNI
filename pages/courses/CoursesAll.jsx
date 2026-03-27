import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseList from '../../components/courses/CourseList';
import { coursesData } from '../../components/courses/coursesData';

const categories = ['All', 'Tech', 'Business', 'Design', 'Science'];
const durations = ['All', '2 Years', '4 Years'];

export default function CoursesAll() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('All');
  const [duration, setDuration] = useState('All');

  const filtered = useMemo(() => {
    return coursesData.filter((c) => {
      const catOk = category === 'All' ? true : c.category === category;
      const durOk = duration === 'All' ? true : c.duration === duration;
      return catOk && durOk;
    });
  }, [category, duration]);

  return (
    <section className="courses-section courses-page-animate">
      <div className="courses-wrap">
        <div className="section-eyebrow">Academics</div>
        <h2 className="section-title">
          All <strong>Courses</strong>
        </h2>
        <p className="section-sub">
          Explore programs across engineering, business, design, and sciences.
        </p>

        <div className="courses-filters">
          <div className="courses-filter">
            <div className="courses-filter-label">Category</div>
            <div className="courses-filter-pills">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`courses-pill ${category === c ? 'active' : ''}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="courses-filter">
            <div className="courses-filter-label">Duration</div>
            <div className="courses-filter-pills">
              {durations.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`courses-pill ${duration === d ? 'active' : ''}`}
                  onClick={() => setDuration(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <CourseList
          courses={filtered}
          onView={(c) => navigate(`/courses/${c.id}`)}
          onApply={(c) => navigate(`/courses/${c.id}/apply`)}
        />
      </div>
    </section>
  );
}

