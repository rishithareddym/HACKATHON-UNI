export const eventsData = [
  {
    id: 'quantum-ai',
    date: { month: 'NOV', day: '14' },
    time: '10:00 AM - 12:30 PM',
    title: 'Guest Lecture: The Future of Quantum AI',
    loc: 'Turing Auditorium',
    tags: ['Tech', 'Open to All'],
  },
  {
    id: 'design-thinking-hackathon',
    date: { month: 'NOV', day: '18' },
    time: '48 Hours',
    title: 'Annual Design Thinking Hackathon',
    loc: 'Innovation Hub',
    tags: ['Competition', 'Students'],
  },
  {
    id: 'y-combinator-panel',
    date: { month: 'NOV', day: '22' },
    time: '4:00 PM - 6:00 PM',
    title: 'Y-Combinator Alumni Panel',
    loc: 'Main Seminar Hall',
    tags: ['Startup', 'Networking'],
  },
  {
    id: 'winter-robotics-showcase',
    date: { month: 'DEC', day: '05' },
    time: 'All Day',
    title: 'Winter Robotics Showcase',
    loc: 'Engineering Quad',
    tags: ['Showcase', 'Public'],
  },
  // Sample extra events for "View More Events"
  {
    id: 'tech-bootcamp',
    date: { month: 'DEC', day: '12' },
    time: '9:30 AM - 4:30 PM',
    title: 'Campus Tech Bootcamp (Hands-on)',
    loc: 'Innovation Hub',
    tags: ['Workshop', 'Tech'],
  },
  {
    id: 'startup-pitch-night',
    date: { month: 'JAN', day: '08' },
    time: '6:00 PM - 8:00 PM',
    title: 'Startup Pitch Night',
    loc: 'Main Seminar Hall',
    tags: ['Competition', 'Startup'],
  },
  {
    id: 'research-symposium',
    date: { month: 'JAN', day: '18' },
    time: '11:00 AM - 1:00 PM',
    title: 'Student Research Symposium',
    loc: 'Science Block Auditorium',
    tags: ['Research', 'Students'],
  },
];

export function getEventById(eventId) {
  return eventsData.find((e) => String(e.id) === String(eventId)) || null;
}

