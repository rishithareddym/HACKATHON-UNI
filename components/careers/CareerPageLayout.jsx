import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function toTitleCase(slug) {
  return String(slug)
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function CareerPageLayout({ data, slug }) {
  const navigate = useNavigate();

  const safeData = useMemo(() => {
    if (data) return data;
    return {
      roleTitle: toTitleCase(slug),
      description: 'This role detail page is coming soon. Meanwhile, explore other career paths in the visualizer.',
      keySkills: [],
      averageSalary: '—',
      careerGrowthPath: [],
      topRecruiters: [],
    };
  }, [data, slug]);

  return (
    <section className="career-detail-section">
      <div className="career-detail-wrap">
        <div className="career-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="career-breadcrumb-link">
            Home
          </Link>
          <span className="career-breadcrumb-sep">/</span>
          <span>Careers</span>
          <span className="career-breadcrumb-sep">/</span>
          <span>{safeData.roleTitle}</span>
        </div>

        <div className="career-detail-card career-page-animate">
          <div className="career-detail-top">
            <div>
              <h1 className="career-role">
                {safeData.roleTitle.includes(' ') ? (
                  <>
                    {safeData.roleTitle.split(' ').slice(0, 1).join(' ')}{' '}
                    <span className="career-role-strong">{safeData.roleTitle.split(' ').slice(1).join(' ')}</span>
                  </>
                ) : (
                  safeData.roleTitle
                )}
              </h1>
              <p className="career-desc">{safeData.description}</p>
            </div>

            <div className="career-meta">
              <div className="career-salary">
                <div className="career-salary-label">Average Salary</div>
                <div className="career-salary-value">{safeData.averageSalary}</div>
              </div>

              <button className="career-back" type="button" onClick={() => navigate('/#careers')}>
                &larr; Back to Visualizer
              </button>
            </div>
          </div>

          <div className="career-grid">
            <div className="career-box">
              <div className="career-box-title">Key Skills Required</div>
              {safeData.keySkills.length ? (
                <ul className="career-list">
                  {safeData.keySkills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              ) : (
                <div className="career-muted">Check back soon for key skills.</div>
              )}
            </div>

            <div className="career-box">
              <div className="career-box-title">Top Recruiters</div>
              {safeData.topRecruiters.length ? (
                <div className="career-pills">
                  {safeData.topRecruiters.map((r) => (
                    <span key={r} className="career-pill">
                      {r}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="career-muted">Recruiters will be added soon.</div>
              )}
            </div>

            <div className="career-box career-box-span">
              <div className="career-box-title">Career Growth Path</div>
              {safeData.careerGrowthPath.length ? (
                <div className="career-growth">
                  {safeData.careerGrowthPath.map((step, idx) => (
                    <div className="growth-step" key={step}>
                      <div className="growth-index">{idx + 1}</div>
                      <div className="growth-content">{step}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="career-muted">Growth steps will be added soon.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

