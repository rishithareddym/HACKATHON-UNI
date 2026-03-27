import React from 'react';

export default function About() {
  const highlights = [
    { label: 'Established', value: '1946' },
    { label: 'Programs', value: '180+' },
    { label: 'Students', value: '28,000+' },
    { label: 'Accreditation', value: 'NAAC A++' },
  ];

  const facilities = [
    'Modern labs & innovation hubs',
    'Central library + digital resources',
    'Industry collaboration centers',
    'Sports complex & fitness facilities',
    'Hostels, dining, and student services',
    'Green campus initiatives',
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-eyebrow">About</div>
      <h2 className="section-title">
        Built on legacy. Driven by <strong>innovation.</strong>
      </h2>
      <p className="section-sub">
        Zenith Institute of Technology is a leading institution focused on academic excellence, hands-on learning,
        and industry-ready outcomes. Our campus culture blends deep fundamentals with modern, project-based education.
      </p>

      <div className="about-grid">
        <div className="about-card reveal">
          <div className="about-card-title">College Overview</div>
          <div className="about-text">
            Located in Bengaluru, Zenith Institute of Technology offers undergraduate, postgraduate, and doctoral programs across engineering,
            sciences, management, and design. Our students learn through labs, research, hackathons, and real-world
            partnerships with industry.
          </div>
          <div className="about-meta">
            <div className="about-meta-item">
              <div className="about-meta-label">Address</div>
              <div className="about-meta-value">Bull Temple Road, Basavanagudi, Bengaluru, Karnataka</div>
            </div>
            <div className="about-meta-item">
              <div className="about-meta-label">Contact</div>
              <div className="about-meta-value">admissions@bmsce.ac.in · +91 80 2662 2130</div>
            </div>
          </div>
        </div>

        <div className="about-card reveal reveal-delay-1">
          <div className="about-card-title">At a glance</div>
          <div className="about-highlights">
            {highlights.map((h) => (
              <div key={h.label} className="about-highlight">
                <div className="about-highlight-value">{h.value}</div>
                <div className="about-highlight-label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card reveal reveal-delay-2">
          <div className="about-card-title">Campus & Facilities</div>
          <ul className="about-list">
            {facilities.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="about-note">
            Multiple academic blocks and community spaces support learning, collaboration, and student-led initiatives.
          </div>
        </div>
      </div>
    </section>
  );
}

