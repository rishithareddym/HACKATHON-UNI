export const coursesData = [
  {
    id: 'btech-cse-ai',
    name: 'B.Tech Computer Science & AI',
    category: 'Tech',
    duration: '4 Years',
    seats: 240,
    fees: '₹1.8L/yr',
    icon: '💻',
    interest: ['tech'],
    description:
      'A modern CSE curriculum with AI foundations, systems, and product engineering. Build strong fundamentals and ship real-world software.',
    curriculum: [
      'Programming + Data Structures',
      'Operating Systems + DBMS',
      'Computer Networks',
      'Machine Learning Foundations',
      'Cloud + DevOps',
      'Capstone Project',
    ],
    eligibility: 'Pass 10+2 with PCM (minimum 60%).',
    placement: '94% placements · Avg ₹18 LPA · Top recruiters: Google, Microsoft, Amazon.',
  },
  {
    id: 'btech-biotech',
    name: 'B.Tech Biotechnology',
    category: 'Science',
    duration: '4 Years',
    seats: 120,
    fees: '₹1.6L/yr',
    icon: '🧬',
    interest: ['science'],
    description:
      'Blend biology, chemistry, and engineering to solve healthcare and sustainability challenges.',
    curriculum: [
      'Molecular Biology',
      'Bioprocess Engineering',
      'Genetics + Genomics',
      'Bioinformatics',
      'Industrial Training',
      'Research Project',
    ],
    eligibility: 'Pass 10+2 with PCB/PCM (minimum 55%).',
    placement: '78% placements · Avg ₹12 LPA · Top recruiters: Biocon, Dr. Reddy’s.',
  },
  {
    id: 'btech-ee',
    name: 'B.Tech Electrical Engineering',
    category: 'Tech',
    duration: '4 Years',
    seats: 180,
    fees: '₹1.5L/yr',
    icon: '⚡',
    interest: ['tech', 'science'],
    description:
      'Power systems, electronics, embedded systems, and robotics—build the infrastructure that powers the world.',
    curriculum: [
      'Circuit Theory',
      'Power Systems',
      'Control Systems',
      'Embedded Systems',
      'Robotics Basics',
      'Industry Project',
    ],
    eligibility: 'Pass 10+2 with PCM (minimum 55%).',
    placement: '86% placements · Avg ₹15 LPA · Top recruiters: Siemens, ABB, Bosch.',
  },
  {
    id: 'mba-business-analytics',
    name: 'MBA Business Analytics',
    category: 'Business',
    duration: '2 Years',
    seats: 90,
    fees: '₹2.2L/yr',
    icon: '📊',
    interest: ['business'],
    description:
      'Learn strategy, analytics, and product thinking to drive decisions using data.',
    curriculum: [
      'Business Strategy',
      'Statistics for Business',
      'SQL + BI Tools',
      'Marketing Analytics',
      'Product Analytics',
      'Industry Internship',
    ],
    eligibility: 'Bachelor’s degree with minimum 50%.',
    placement: '96% placements · Avg ₹22 LPA · Top recruiters: Deloitte, Accenture, Amazon.',
  },
  {
    id: 'bdes-interaction',
    name: 'B.Des Interaction Design',
    category: 'Design',
    duration: '4 Years',
    seats: 60,
    fees: '₹1.4L/yr',
    icon: '🎨',
    interest: ['design'],
    description:
      'Design digital products with strong UX fundamentals, prototyping, and real-world studio practice.',
    curriculum: [
      'Design Foundations',
      'Interaction Design',
      'User Research',
      'Prototyping + UI Systems',
      'Design Studio',
      'Portfolio Capstone',
    ],
    eligibility: 'Pass 10+2 (any stream) with portfolio submission.',
    placement: '88% placements · Avg ₹14 LPA · Top recruiters: Google, Microsoft, Swiggy.',
  },
  {
    id: 'btech-civil',
    name: 'B.Tech Civil Engineering',
    category: 'Science',
    duration: '4 Years',
    seats: 150,
    fees: '₹1.3L/yr',
    icon: '🏗️',
    interest: ['science', 'impact'],
    description:
      'Plan and build sustainable infrastructure with modern materials and structural engineering.',
    curriculum: [
      'Engineering Mechanics',
      'Structural Analysis',
      'Concrete + Steel Design',
      'Surveying',
      'Environmental Engineering',
      'Field Internship',
    ],
    eligibility: 'Pass 10+2 with PCM (minimum 50%).',
    placement: 'Strong core placements · Govt/PSU pathways · Top recruiters: L&T, Tata Projects.',
  },
];

export function getCourseById(courseId) {
  return coursesData.find((c) => String(c.id) === String(courseId)) || null;
}

export function filterCoursesByInterest(interestKey) {
  if (!interestKey) return coursesData;
  return coursesData.filter((c) => c.interest.includes(interestKey));
}

