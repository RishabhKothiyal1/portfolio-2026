import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: '/java-logo.png', type: 'image' },
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/1a1a1a', type: 'icon' },
      { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/1a1a1a', type: 'icon' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/1a1a1a', type: 'icon' },
      { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/1a1a1a', type: 'icon' },
      { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/1a1a1a', type: 'icon' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/1a1a1a', type: 'icon' },
      { name: 'CSS3', icon: '/css3-logo.png', type: 'image' },
      { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/1a1a1a', type: 'icon' },
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/1a1a1a', type: 'icon' },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/1a1a1a', type: 'icon' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/1a1a1a', type: 'icon' },
      { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/1a1a1a', type: 'icon' },
      { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/1a1a1a', type: 'icon' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/1a1a1a', type: 'icon' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/1a1a1a', type: 'icon' },
      { name: 'Firestore', icon: 'https://cdn.simpleicons.org/googlecloud/1a1a1a', type: 'icon' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/1a1a1a', type: 'icon' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/1a1a1a', type: 'icon' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/1a1a1a', type: 'icon' },
      { name: 'VS Code', icon: '/vscode-logo.png', type: 'image' },
      { name: 'Replit', icon: 'https://cdn.simpleicons.org/replit/1a1a1a', type: 'icon' },
      { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor/1a1a1a', type: 'icon' },
      { name: 'Antigravity', icon: '/antigravity-logo.png', type: 'image' },
      { name: 'Claude Code', icon: '/claude-logo.png', type: 'image' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/1a1a1a', type: 'icon' },
      { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/1a1a1a', type: 'icon' },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'Bash', icon: 'https://cdn.simpleicons.org/gnubash/1a1a1a', type: 'icon' },
      { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/jsonwebtokens/1a1a1a', type: 'icon' },
      { name: 'WebSockets', icon: 'https://cdn.simpleicons.org/socketdotio/1a1a1a', type: 'icon' },
    ],
  },
]

export interface Education {
  years: string
  school: string
  description: string
  logo: string
}

export const education: Education[] = [
  {
    years: '2022 – 2025',
    school: 'Graphic Era Hill University',
    description: 'Bachelor in Computer Applications',
    logo: 'gehu-logo.png',
  },
  {
    years: '2018 – 2022',
    school: 'Vanasthali Public School',
    description: 'Secondary & Higher Schooling',
    logo: 'vanasthali-logo.png',
  },
  {
    years: '2006 – 2018',
    school: 'Dayawati Modi Public School',
    description: 'Primary Education',
    logo: 'dmps.jpg',
  },
]

export interface Experience {
  date: string
  title: string
  description: string
}

export const experience: Experience[] = [
  {
    date: 'Jan 2025',
    title: 'Freelance',
    description: 'Stocks Portfolio Management',
  },
  {
    date: '2025',
    title: 'Freelance Project',
    description: 'Fast API & Langchain',
  },
  {
    date: '2024',
    title: 'Intern',
    description: 'Zenring Technologies Pvt Ltd (Bangalore)',
  },
]