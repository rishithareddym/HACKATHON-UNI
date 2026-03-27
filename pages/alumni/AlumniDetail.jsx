import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAlumniById } from '../../components/alumni/alumniData';

export default function AlumniDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const alumni = useMemo(() => getAlumniById(id), [id]);

  if (!alumni) {
    return (
      <section className="career-detail-section">
        <div className="career-detail-wrap">
          <div className="career-detail-card career-page-animate">
            <div className="section-eyebrow" style={{ color: 'var(--gold2)' }}>
              Alumni
            </div>
            <h2 className="section-title">
              Story <strong>not found</strong>
            </h2>
            <p className="section-sub">Please return to the homepage and choose an alumni story.</p>
            <div className="apply-actions">
              <button className="apply-secondary" type="button" onClick={() => navigate('/')}>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="alumni-detail-section alumni-page-animate">
      <div className="alumni-detail-wrap">
        <div className="career-breadcrumb" aria-label="Breadcrumb">
          <button type="button" className="career-breadcrumb-link" onClick={() => navigate('/#alumni')}>
            Home
          </button>
          <span className="career-breadcrumb-sep">/</span>
          <span>Alumni</span>
          <span className="career-breadcrumb-sep">/</span>
          <span>{alumni.fullName}</span>
        </div>

        <div className="alumni-detail-card">
          <div className="alumni-detail-top">
            <img
              className="alumni-detail-img"
              src={alumni.profileImage}
              alt={`${alumni.fullName} profile`}
              loading="lazy"
            />
            <div className="alumni-detail-head">
              <div className="section-eyebrow" style={{ color: 'var(--gold2)' }}>
                Alumni Story
              </div>
              <h1 className="alumni-detail-name">{alumni.fullName}</h1>
              <div className="alumni-detail-role">{alumni.role}</div>
              <div className="alumni-detail-company">
                {alumni.company} · {alumni.location}
              </div>
              <div className="alumni-detail-batch">{alumni.batch}</div>

              <div className="alumni-detail-actions">
                <button className="apply-secondary" type="button" onClick={() => navigate('/#alumni')}>
                  &larr; Back to Stories
                </button>
              </div>
            </div>
          </div>

          <div className="alumni-detail-body">
            {alumni.storySections.map((s) => (
              <div key={s.title} className="alumni-detail-section-block">
                <div className="alumni-detail-section-title">{s.title}</div>
                <div className="alumni-detail-text">{s.text}</div>
              </div>
            ))}

            {alumni.achievements?.length ? (
              <div className="alumni-detail-achievements">
                <div className="alumni-detail-section-title">Achievements</div>
                <div className="career-pills">
                  {alumni.achievements.map((a) => (
                    <span className="career-pill" key={a}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

