import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();
  const [data] = useState(() => {
    try {
      const raw = localStorage.getItem('applicationForm');
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  });

  const summaryItems = useMemo(() => {
    if (!data) return [];
    return [
      { label: 'Applicant', value: data.fullName || '-' },
      { label: 'Email', value: data.email || '-' },
      { label: 'Course', value: data.course || '-' },
      { label: 'Submitted', value: data.submittedAt ? new Date(data.submittedAt).toLocaleString() : '-' },
    ];
  }, [data]);

  return (
    <section className="thankyou-section">
      <div className="apply-wrap">
        <div className="apply-card thankyou-card">
          <div className="apply-header">
            <div className="section-eyebrow" style={{ color: 'var(--gold2)' }}>
              Thank You
            </div>
            <h2 className="section-title">
              We received your <strong>application</strong>
            </h2>
            <p className="section-sub">
              Our admissions team will review your details and get back to you soon.
            </p>
          </div>

          {data ? (
            <div className="thankyou-summary">
              <div className="apply-success" role="status" aria-live="polite">
                Application submitted successfully
              </div>

              <div className="summary-grid">
                {summaryItems.map((it) => (
                  <div key={it.label} className="summary-item">
                    <div className="summary-label">{it.label}</div>
                    <div className="summary-value">{it.value}</div>
                  </div>
                ))}
              </div>

              <div className="apply-actions">
                <button className="apply-submit" type="button" onClick={() => navigate('/apply')}>
                  Apply Another Program
                </button>
                <button className="apply-secondary" type="button" onClick={() => navigate('/')}>
                  Back to Home
                </button>
              </div>
            </div>
          ) : (
            <div className="thankyou-missing">
              <div className="apply-success" role="status" aria-live="polite">
                No application data found.
              </div>
              <div className="apply-actions">
                <button className="apply-submit" type="button" onClick={() => navigate('/apply')}>
                  Go to Apply Form
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

