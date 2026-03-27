import React from 'react';

export default function Placements() {
  const yearStats = [
    { year: '2022', offers: 860, placed: '91%', highest: '₹62 LPA', average: '₹12.4 LPA' },
    { year: '2023', offers: 940, placed: '93%', highest: '₹72 LPA', average: '₹13.6 LPA' },
    { year: '2024', offers: 1010, placed: '94%', highest: '₹80 LPA', average: '₹14.8 LPA' },
  ];

  const branchPackages = [
    { branch: 'CSE / AI', highest: '₹80 LPA', average: '₹18 LPA' },
    { branch: 'ECE', highest: '₹54 LPA', average: '₹14 LPA' },
    { branch: 'EEE', highest: '₹42 LPA', average: '₹12 LPA' },
    { branch: 'Mechanical', highest: '₹36 LPA', average: '₹10 LPA' },
    { branch: 'Civil', highest: '₹28 LPA', average: '₹9 LPA' },
    { branch: 'Biotechnology', highest: '₹30 LPA', average: '₹12 LPA' },
  ];

  const recruiters = [
    'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Deloitte', 'Accenture', 'Infosys', 'TCS',
    'Wipro', 'Bosch', 'Siemens', 'Adobe', 'Oracle', 'Samsung',
  ];

  const highlights = [
    { label: 'Placement Rate', value: '94%' },
    { label: 'Total Offers', value: '1000+' },
    { label: 'Highest Package', value: '₹80 LPA' },
    { label: 'Average Package', value: '₹14.8 LPA' },
  ];

  const parseLpa = (s) => {
    const n = Number(String(s || '').replace(/[^\d.]/g, ''));
    return Number.isFinite(n) ? n : 0;
  };

  const avgByYear = yearStats.map((r) => ({ year: r.year, value: parseLpa(r.average) }));
  const maxAvg = Math.max(1, ...avgByYear.map((d) => d.value));

  const pieData = branchPackages.map((b) => ({
    label: b.branch,
    value: parseLpa(b.average),
  }));
  const totalPie = pieData.reduce((sum, d) => sum + d.value, 0) || 1;

  const polarToCartesian = (cx, cy, r, angleDeg) => {
    const angleRad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(angleRad), y: cy + r * Math.sin(angleRad) };
  };

  const describeArc = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  const pieColors = [
    'rgba(232,184,75,.85)',
    'rgba(26,39,68,.22)',
    'rgba(200,150,42,.65)',
    'rgba(45,140,78,.45)',
    'rgba(36,52,96,.32)',
    'rgba(232,69,69,.40)',
  ];

  return (
    <section className="placements-section" id="placements">
      <div className="section-eyebrow">Placements</div>
      <h2 className="section-title">
        Outcomes that open <strong>doors.</strong>
      </h2>
      <p className="section-sub">
        Year-wise placement insights, branch benchmarks, and top recruiters — designed for clarity and transparency.
      </p>

      <div className="placements-grid">
        <div className="placements-card reveal">
          <div className="placements-card-title">Placement Highlights</div>
          <div className="placements-highlights">
            {highlights.map((h) => (
              <div key={h.label} className="placements-highlight">
                <div className="placements-highlight-value">{h.value}</div>
                <div className="placements-highlight-label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="placements-card reveal reveal-delay-1">
          <div className="placements-card-title">Year-wise Statistics</div>
          <div className="placements-chart-wrap">
            <div className="placements-chart-title">Average package trend (LPA)</div>
            <div className="placements-chart-card">
              <svg className="placements-bar-svg" viewBox="0 0 420 170" role="img" aria-label="Average package trend">
                <line x1="40" x2="400" y1="30" y2="30" stroke="rgba(15,14,11,.10)" strokeWidth="1" />
                <line x1="40" x2="400" y1="70" y2="70" stroke="rgba(15,14,11,.10)" strokeWidth="1" />
                <line x1="40" x2="400" y1="110" y2="110" stroke="rgba(15,14,11,.10)" strokeWidth="1" />
                <line x1="40" x2="400" y1="150" y2="150" stroke="rgba(15,14,11,.10)" strokeWidth="1" />

                {avgByYear.map((d, idx) => {
                  const chartLeft = 60;
                  const chartRight = 380;
                  const plotW = chartRight - chartLeft;
                  const gap = plotW / avgByYear.length;
                  const barW = Math.max(18, gap * 0.42);
                  const x = chartLeft + idx * gap + (gap - barW) / 2;
                  const h = (d.value / maxAvg) * 120;
                  const y = 150 - h;
                  return (
                    <g key={d.year}>
                      <rect
                        x={x}
                        y={y}
                        width={barW}
                        height={h}
                        rx="10"
                        className="bar-rect"
                        style={{ animationDelay: `${idx * 80}ms` }}
                      />
                      <text
                        x={x + barW / 2}
                        y="162"
                        textAnchor="middle"
                        fill="rgba(15,14,11,.62)"
                        fontSize="12"
                        fontWeight="800"
                      >
                        {d.year}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
          <div className="placements-table-wrap">
            <table className="placements-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Total Offers</th>
                  <th>Placed %</th>
                  <th>Highest</th>
                  <th>Average</th>
                </tr>
              </thead>
              <tbody>
                {yearStats.map((r) => (
                  <tr key={r.year}>
                    <td>{r.year}</td>
                    <td>{r.offers}</td>
                    <td>{r.placed}</td>
                    <td>{r.highest}</td>
                    <td>{r.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="placements-card reveal reveal-delay-2">
          <div className="placements-card-title">Highest Package by Branch</div>
          <div className="placements-pie-wrap">
            <svg className="placements-pie-svg" viewBox="0 0 160 160" role="img" aria-label="Branch share pie chart">
              <circle cx="80" cy="80" r="64" fill="none" stroke="rgba(15,14,11,.10)" strokeWidth="18" />
              {pieData.reduce((acc, d, idx) => {
                const startAngle = acc.angle;
                const sliceAngle = (d.value / totalPie) * 360;
                const endAngle = startAngle + sliceAngle;
                const color = pieColors[idx % pieColors.length];
                acc.nodes.push(
                  <path
                    key={`${d.label}`}
                    d={describeArc(80, 80, 64, startAngle, endAngle)}
                    fill="none"
                    className="pie-slice pie-anim"
                    stroke={color}
                    strokeLinecap="round"
                    style={{ animationDelay: `${idx * 90}ms` }}
                  />,
                );
                acc.angle = endAngle;
                return acc;
              }, { angle: 0, nodes: [] }).nodes}
            </svg>

            <div className="pie-legend" aria-label="Pie legend">
              {pieData.map((d, idx) => (
                <div key={`${d.label}-${idx}`} className="pie-legend-item">
                  <span className="pie-swatch" style={{ background: pieColors[idx % pieColors.length] }} />
                  <span style={{ color: 'var(--deep)', fontWeight: 1000 }}>{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="placements-branch-list">
            {branchPackages.map((b) => (
              <div key={b.branch} className="placements-branch">
                <div className="placements-branch-name">{b.branch}</div>
                <div className="placements-branch-stats">
                  <span className="placements-chip">Highest: {b.highest}</span>
                  <span className="placements-chip ghost">Average: {b.average}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="placements-card placements-card-span reveal reveal-delay-3">
          <div className="placements-card-title">Top Recruiters</div>
          <div className="recruiters-grid">
            {recruiters.map((c) => (
              <div key={c} className="recruiter-pill">{c}</div>
            ))}
          </div>
          <div className="placements-note">
            Recruiters vary by program and year. This is a representative sample to show diversity across product,
            consulting, core engineering, and R&amp;D roles.
          </div>
        </div>
      </div>
    </section>
  );
}

