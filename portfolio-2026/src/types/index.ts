export interface NavLink {
  label: string
  href: string
}

export interface Skill {
  name: string
  icon: string
  type: 'icon' | 'image' | 'text'
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  icon: string
  github?: string
  live?: string
  docs?: string
}

export interface Certificate {
  name: string
  url: string
}

export interface CertificateCategory {
  title: string
  icon: string
  count: number
  items: Certificate[]
}

export interface Blog {
  title: string
  description: string
  cover: string
  url: string
  date: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}