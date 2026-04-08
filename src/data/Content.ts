export interface SkillGroup {
  title: string
  tags: string[]
}

export interface Project {
  href: string
  imgSrc: string
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
    tags: ['React', 'Next.js', 'Pandas', 'NumPy', 'Flask', 'Express.js', 'PySpark'],
  },
  {
    title: 'Tools & Platforms',
    tags: ['Power BI', 'Databricks', 'Supabase', 'Firebase', 'Figma', 'Django', 'Node.js'],
  },
]

export const projects: Project[] = [
  {
    href: 'https://github.com/aeMyst/PetPals',
    imgSrc: 'https://petertran-portfolio.com/projects/dashboard.png',
    imgAlt: 'DSMLC Portal',
    tech: ['TypeScript', 'PySpark', 'Power BI', 'Databricks'],
    title: 'DSMLC Portal & BI Report',
    desc: 'Data Science and Machine Learning Club dashboarding tool connected to Databricks — creating visual reports of club events and member analytics for leadership decisions.',
    featured: true,
  },
  {
    href: 'https://github.com/aeMyst/PetPals',
    imgSrc: 'https://petertran-portfolio.com/projects/petpals.png',
    imgAlt: 'PetPals',
    tech: ['React', 'Firebase', 'Gemini API'],
    title: 'PetPals',
    desc: '2nd Place Hackathon Winner — anonymous blogging platform built to address inclusivity and community support.',
  },
  {
    href: 'https://github.com/aeMyst/TableTalk',
    imgSrc: 'https://petertran-portfolio.com/projects/tabletalk.png',
    imgAlt: 'TableTalk',
    tech: ['React', 'TailwindCSS'],
    title: 'TableTalk',
    desc: 'Community-based board game website built around HCI principles — thoughtful UX and inclusive design at its core.',
  },
  {
    href: 'https://github.com/aeMyst/RevRentals',
    imgSrc: 'https://petertran-portfolio.com/projects/revrentals.png',
    imgAlt: 'RevRentals',
    tech: ['Flutter', 'Django', 'MySQL'],
    title: 'RevRentals Marketplace',
    desc: 'Mobile app fostering a peer-to-peer marketplace for renting motorcycles — combining a personal passion with technical skill.',
  },
  {
    href: 'https://github.com/aeMyst/ai-chef',
    imgSrc: 'https://petertran-portfolio.com/projects/chefai.png',
    imgAlt: 'ChefAI',
    tech: ['Python', 'Flask', 'OpenAI API'],
    title: 'ChefAI',
    desc: 'Recipe generator that provides tailored meal ideas based on expiring fridge ingredients — reducing food waste intelligently.',
  },
  {
    href: 'https://github.com/aeMyst/Minigame-Portal',
    imgSrc: 'https://petertran-portfolio.com/projects/gameportal.png',
    imgAlt: 'Minigame Portal',
    tech: ['Java', 'JavaFX'],
    title: 'Minigame Online Portal',
    desc: 'Multiplayer platform simulating matchmaking in chess, tic-tac-toe, and Connect4 — built from scratch with custom networking.',
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    date: 'May 2026 — Present',
    role: 'Data Analyst Intern',
    company: 'Enbridge',
    desc: 'Incoming data analyst role — leveraging analytical skills to support data-driven decision-making at one of North America\'s leading energy infrastructure companies.',
    upcoming: true,
  },
  {
    date: 'May 2025 — Present',
    role: 'Co-Director of Operations',
    company: 'Data Science & Machine Learning Club · University of Calgary',
    desc: 'Led sprint discussions and team coordination. Responsible for website maintenance and continuous improvements. Developed internal systems and tooling for club events and member management.',
  },
  {
    date: 'Sep 2024 — Feb 2025',
    role: 'Server / Bartender',
    company: "Roy's Korean Kitchen",
    desc: "Compiled end-of-day reports and analyzed relevant sales data, delivering concise summaries to supervisors to support operational decisions.",
  },
  {
    date: 'Jun 2022 — Feb 2024',
    role: 'Server',
    company: 'Baekjeong Korean BBQ House',
    desc: 'Conducted quality checks, managed inventory restocking, and documented shift tasks to ensure seamless team handoffs and operational continuity.',
  },
]

export const courses = [
  'Database Management Systems',
  'Scalable Data Analytics',
  'Web-Based Systems',
  'Human Computer Interactions',
  'Machine Learning & AI',
  'Web Development Essentials',
  'Data Structures',
  'Algorithm Analysis',
]