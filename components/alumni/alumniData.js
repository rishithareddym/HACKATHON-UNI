export const alumniData = [
  {
    id: 'riya-mehta',
    fullName: 'Riya Mehta',
    role: 'Senior AI Research Lead',
    company: 'Google DeepMind',
    location: 'London, UK',
    batch: 'B.Tech CSE, Batch 2018',
    profileImage:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    shortStory:
      'Zenith didn’t just give me a degree — it gave me a hunger for problems nobody had solved yet.',
    storySections: [
      {
        title: 'From campus labs to world-scale research',
        text:
          'My final-year project started in a small lab with big questions: how do we build models that understand multiple modalities reliably? That curiosity turned into a research track, mentors who pushed me harder than I expected, and eventually a paper that shaped my next steps.',
      },
      {
        title: 'What Zenith gave me',
        text:
          'A culture of building. The freedom to explore. And faculty who treated students like collaborators. The combination of fundamentals + exposure to real research workflows made the transition to deep research teams far smoother.',
      },
      {
        title: 'Advice to juniors',
        text:
          'Pick one hard problem and stay with it long enough to learn what “depth” feels like. Publish if you can — but more importantly, learn to explain your work clearly and iterate fast.',
      },
    ],
    achievements: ['4 Nature papers', 'Mentored 30+ student researchers', 'Keynote speaker at 2 AI conferences'],
  },
  {
    id: 'arjun-kapoor',
    fullName: 'Arjun Kapoor',
    role: 'Co-Founder & CEO',
    company: 'Kira Health (YC W23)',
    location: 'Bengaluru, IN',
    batch: 'B.Tech CSE, Batch 2020',
    profileImage:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
    shortStory:
      'Dropped a high-paying offer to build from a dorm room — two years later, Series A and 2M+ patients impacted.',
    storySections: [
      {
        title: 'The first prototype',
        text:
          'Kira began as a weekend prototype built between classes and club meets. The incubator ecosystem and access to mentors helped us validate quickly and avoid the usual early-stage traps.',
      },
      {
        title: 'Building a team',
        text:
          'Recruiting your first 10 people is about values. Zenith’s student network made it easier to find builders who cared about the mission.',
      },
      {
        title: 'Advice to builders',
        text:
          'Ship something small, talk to real users, and measure impact. Big visions come from consistent execution.',
      },
    ],
    achievements: ['$14M raised', '2M+ patients reached', '80-person team'],
  },
  {
    id: 'sneha-varghese',
    fullName: 'Sneha Varghese',
    role: 'Principal Engineer',
    company: 'Microsoft Azure',
    location: 'Seattle, US',
    batch: 'B.Tech EE, Batch 2019',
    profileImage:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=600&q=80',
    shortStory:
      'An internship that became a full-time offer — fundamentals + industry-first curriculum made Day 1 easier.',
    storySections: [
      {
        title: 'Learning the craft',
        text:
          'The biggest shift was moving from assignments to systems: debugging production issues, reading logs, and thinking about reliability. College projects that emphasized engineering practice helped a lot.',
      },
      {
        title: 'What helped most',
        text:
          'Peer learning groups and faculty who encouraged shipping real demos. That habit of finishing things mattered.',
      },
    ],
    achievements: ['₹52 LPA package', 'Led multi-region reliability improvements', 'Mentored new grad cohorts'],
  },
  {
    id: 'priya-nair',
    fullName: 'Dr. Priya Nair',
    role: 'Climate Scientist',
    company: 'NASA JPL',
    location: 'California, US',
    batch: 'Physics, Batch 2015',
    profileImage:
      'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=600&q=80',
    shortStory:
      'A semester project that evolved into research now used in climate prediction workflows.',
    storySections: [
      {
        title: 'From modeling to impact',
        text:
          'My early work focused on building models that were not only accurate, but stable under noisy real-world conditions. That robustness mindset translated directly into long-term research.',
      },
    ],
    achievements: ['NASA award', 'Published in leading journals', 'Contributed to prediction infrastructure'],
  },
];

export function getAlumniById(id) {
  return alumniData.find((a) => a.id === id) || null;
}

