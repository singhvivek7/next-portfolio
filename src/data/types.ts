export type SocialLink = {
  name: string
  url: string
  icon: any
  navbar: boolean
}

export type Contact = {
  email: string
  tel: string
  social: {
    GitHub: SocialLink
    LinkedIn: SocialLink
    X?: SocialLink
    LeetCode: SocialLink
    Resume?: SocialLink
    email: SocialLink
  }
}

export type WorkExperience = {
  company: string
  href: string
  badges: string[]
  location: string
  title: string
  logoUrl: string
  start: string
  end: string
  description: string
}

export type Education = {
  school: string
  href: string
  degree: string
  logoUrl: string
  start: string
  end: string
}

export type Project = {
  title: string
  href: string
  dates: string
  active: boolean
  description: string
  technologies: string[]
  links: {
    type: string
    href: string
    icon: any
  }[]
  image: string
  video: string
}

export type DataType = {
  name: string
  initials: string
  url: string
  location: string
  locationLink: string
  description: string
  summary: string
  avatarUrl: string
  skills: string[]
  navbar: { href: string; icon: any; label: string }[]
  contact: Contact
  work: WorkExperience[]
  education: Education[]
  projects: Project[]
}
