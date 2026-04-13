export interface SkillGroup {
  title: string
  tags: string[]
}

export interface Project {
  href: string
  imgKey: string 
  imgAlt: string
  tech: string[]
  title: string
  desc: string
  featured?: boolean
}

export interface ExperienceItem {
  date: string
  role: string
  company: string
  desc: string
  upcoming?: boolean
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    tags: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    tags: ['React', 'Next.js', 'Pandas', 'NumPy', 'Flask', 'Express.js', 'PySpark', 'TailwindCSS', 'Spring Boot'],
  },
  {
    title: 'Tools & Platforms',
    tags: ['Power BI', 'Databricks', 'Supabase', 'Firebase', 'Figma', 'Django', 'Node.js', 'Docker', 'Git', 'AWS S3', 'MongoDB', 'MySQL', 'PostgreSQL'],
  },
]

export const projects: Project[] = [
  {
    href:   'https://github.com/aeMyst/CampuSync',
    imgKey: 'campusync',
    imgAlt: 'campusync',
    tech:   ['Spring Boot', 'Docker', 'SeaweedFS', "React", "TailwindCSS", "PGAdmin", "PostgreSQL" ],
    title:  'CampuSync',
    desc:   'CampuSync is a campus club and event management platform. Students can discover clubs, RSVP to events, and manage personal calendars. ',
    featured: true,
  },
  {
    href:    'https://github.com/aeMyst/DSMLCDashboard',
    imgKey:  'dashboard',
    imgAlt:  'DSMLC Portal',
    tech:    ['Next.js', 'PySpark', 'Power BI', 'Databricks'],
    title:   'DSMLC Portal & BI Report',
    desc:    'Data Science and Machine Learning Club dashboarding tool connected to Databricks — creating visual reports of club events and member analytics for leadership decisions.',
  },
  {
    href:   'https://github.com/aeMyst/ai-chef',
    imgKey: 'fleurish',
    imgAlt: 'Fleurish',
    tech:   ['React', 'MongoDB', 'Express', 'TailwindCSS', 'Arduino', 'Yolov8 ML Model'],
    title:  'Fleurish',
    desc:   'Fleurish is a web application that uses affordable camera-based detection and a gamified plant-focused platform to encourage community engagement and sustainable environmental habits.',
  },
  {
    href:   'https://github.com/aeMyst/PetPals',
    imgKey: 'petpals',
    imgAlt: 'PetPals',
    tech:   ['React', 'Firebase', 'Gemini API', 'Flask'],
    title:  'PetPals',
    desc:   '2nd Place Hackathon Winner — anonymous blogging platform built to address inclusivity and community support.',
  },
  {
    href:   'https://github.com/aeMyst/RevRentals',
    imgKey: 'revrentals',
    imgAlt: 'RevRentals',
    tech:   ['Flutter', 'Django', 'MySQL', 'SQL'],
    title:  'RevRentals Marketplace',
    desc:   'Mobile app fostering a peer-to-peer marketplace for renting motorcycles — combining a personal passion with technical skill.',
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    date:     'May 2026 — Present',
    role:     'Data Analyst Intern',
    company:  'Enbridge',
    desc:     "Incoming data analyst role — leveraging analytical skills to support data-driven decision-making at one of North America's leading energy infrastructure companies.",
    upcoming: true,
  },
  {
    date:    'May 2025 — Present',
    role:    'Co-Director of Operations',
    company: 'Data Science & Machine Learning Club · University of Calgary',
    desc:    'Led sprint discussions and team coordination. Responsible for website maintenance and continuous improvements. Developed internal systems and tooling for club events and member management.',
  },
  {
    date:    'Sep 2024 — Feb 2025',
    role:    'Server / Bartender',
    company: "Roy's Korean Kitchen",
    desc:    "Compiled end-of-day reports and analyzed relevant sales data, delivering concise summaries to supervisors to support operational decisions.",
  },
]

export const courses = [
  'Database Management Systems',
  'Scalable Data Analytics',
  'Thinking with Data',
  'Web-Based Systems',
  'Human Computer Interactions',
  'Machine Learning & AI',
  'Web Development Essentials',
  'Data Structures',
  'Algorithm Analysis',
]