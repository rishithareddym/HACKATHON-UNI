import React from 'react';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

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

  const placementDistribution = {
    labels: ['Placed', 'Higher Studies', 'Entrepreneurship', 'Seeking'],
    datasets: [
      {
        data: [94, 3, 2, 1],
        backgroundColor: ['#14B8A6', '#2DD4BF', '#99F6E4', '#CBD5E1'],
        borderColor: '#FFFFFF',
        borderWidth: 2,
      },
    ],
  };

  const salaryByBranch = {
    labels: branchPackages.map((b) => b.branch),
    datasets: [
      {
        label: 'Highest Salary (LPA)',
        data: [80, 54, 42, 36, 28, 30],
        backgroundColor: '#14B8A6',
        borderRadius: 10,
      },
      {
        label: 'Average Salary (LPA)',
        data: [18, 14, 12, 10, 9, 12],
        backgroundColor: '#2DD4BF',
        borderRadius: 10,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#0F172A',
          font: { weight: '700' },
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.parsed}%`,
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#334155', font: { weight: '700' } },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#334155' },
        grid: { color: 'rgba(15, 23, 42, 0.08)' },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#0F172A',
          font: { weight: '700' },
        },
      },
    },
  };

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
            <div className="placements-chart-title">Placement distribution (%)</div>
            <div className="placements-chart-card">
              <div className="placements-chart-canvas placements-chart-canvas-pie">
                <Pie data={placementDistribution} options={pieOptions} />
              </div>
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
          <div className="placements-chart-wrap">
            <div className="placements-chart-title">Salary benchmarks by branch (LPA)</div>
            <div className="placements-chart-card">
              <div className="placements-chart-canvas placements-chart-canvas-wide placements-chart-canvas-bar">
                <Bar data={salaryByBranch} options={barOptions} />
              </div>
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

