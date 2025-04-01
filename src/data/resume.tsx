import { Icons } from '@/components/icons'
import { HomeIcon, FileDown } from 'lucide-react'
import { DataType } from './types'

export const DATA: DataType = {
  name: 'Vivek Kumar',
  initials: 'VK',
  url: 'https://thevivek.tech',
  location: 'Bengaluru, India',
  locationLink: 'https://www.google.com/maps/place/bengaluru',
  description:
    'Software Development Engineer, building scalable web apps with modern stacks.',
  summary:
    'Experienced Full-Stack JavaScript/TypeScript Engineer building enterprise solutions with Next.js and NestJS. Implemented 5+ production systems featuring micro frontend architecture, SSO authentication, React UIs with Redux/Zustand state management, and secure Node.js microservices.',
  avatarUrl: '/me.jpeg',
  skills: [
    'Next.js',
    'React.js',
    'Node.js',
    'Nest.js',
    'TypeScript',
    'JavaScript',
    'Three.js',
    'WebGL',
    'Zustand',
    'Redux Toolkit',
    'React-Query',
    'TypeORM',
    'Prisma',
    'TailwindCSS',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Docker',
    'AWS',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'singhvivek1999@yahoo.com',
    tel: '+919939782727',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/singhvivek7',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/singhvivek7',
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: 'X',
      //   url: 'https://x.com/V1V3K__',
      //   icon: Icons.x,
      //   navbar: true,
      // },
      LeetCode: {
        name: 'LeetCode',
        url: 'https://leetcode.com/singhvivek7',
        icon: Icons.leetcode,
        navbar: true,
      },
      Resume: {
        name: 'Download Resume',
        url: 'https://drive.google.com/file/d/1zbJNpXDH6xeQVr_UJ64EmBtwoOxqT5be/view?usp=drive_link',
        icon: Icons.fileDown,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:singhvivek1999@yahoo.com',
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'PayBolt Technologies',
      href: 'https://paybolt.in',
      badges: [],
      location: 'Bengaluru, Karnataka',
      title: 'Software Development Engineer - I',
      logoUrl: '/paybolt.png',
      start: 'July 2024',
      end: 'Present',
      description:
        'Architected and implemented mission-critical payment gateway system processing 1M+ daily transactions with 99.99% uptime using TypeScript, Next.js, Nest.js, and PostgreSQL. Designed and developed responsive merchant dashboard with real-time transaction monitoring, reducing payment reconciliation time by 65% while maintaining PCI-DSS compliance. Implemented microservice architecture with API gateway pattern, resulting in 30% improved scalability during peak transaction periods and seamless third-party banking integrations.',
    },
    {
      company: 'Webelight Solutions',
      href: 'https://webelight.com',
      badges: [],
      location: 'Ahmedabad, Gujarat',
      title: 'Jr. Reactjs Developer',
      logoUrl: '/webelight.jpeg',
      start: 'September 2023',
      end: 'July 2024',
      description:
        'Delivered 3+ production-grade solutions using modern TypeScript stack, maintaining 98% code coverage and implementing best practices in web security. Led team of 3 junior developers in rebuilding organization website with Next.js, increasing page load speed by 40% and improving SEO ranking by 15 positions. Implemented server-side rendering and dynamic routing strategies, improving application performance by 35% and enhancing user experience metrics.',
    },
  ],
  education: [
    {
      school: 'Indira Gandhi National Open University',
      href: 'https://www.ignou.ac.in',
      degree: 'Master of Computer Applications',
      logoUrl: '/ignou.png',
      start: 'January 2025',
      end: 'Present',
    },
    {
      school: 'Newton School',
      href: 'https://newtonschool.co',
      degree: 'Full Stack Web Development',
      logoUrl: '/newton.jpeg',
      start: 'August 2022',
      end: 'August 2023',
    },
    {
      school: 'Nalanda Open University',
      href: 'https://www.nou.ac.in',
      degree: 'Graduation',
      logoUrl: '/nalanda.jpeg',
      start: 'July 2018',
      end: 'June 2021',
    },
  ],
  projects: [],
  // projects: [
  //   {
  //     title: 'Payment Gateway System',
  //     href: '#',
  //     dates: 'July 2024 - Present',
  //     active: true,
  //     description:
  //       'Led development of secure payment gateway with banking API integration, improving success rates by 20% and reducing processing errors by 30% through automated reconciliation and PCI-DSS compliance. Responsible for developing back-end architecture, UI, API integration, and CI/CD pipelines.',
  //     technologies: [
  //       'Next.js',
  //       'Nest.js',
  //       'PostgreSQL',
  //       'Redis',
  //       'Redux-Toolkit',
  //       'TailwindCSS',
  //       'React-Query',
  //       'AWS (EC2, RDS, S3, etc)',
  //     ],
  //     links: [
  //       {
  //         type: 'Website',
  //         href: '#',
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: '',
  //     video: '',
  //   },
  //   {
  //     title: 'One Global SaaS',
  //     href: '#',
  //     dates: 'January 2024 - July 2024',
  //     active: false,
  //     description:
  //       "One Global Holding is a venture-building company that embodies the essence of digital transformation and restores trust between investors and ventures. Responsible for developing its different SaaS platform's user interface with module federation concept, API, and integrated that API to frontend. Also worked on authentication and authorization with Single Sign On(SSO).",
  //     technologies: [
  //       'Next.js',
  //       'React.js',
  //       'Redux-Toolkit',
  //       'TailwindCSS',
  //       'React-Query',
  //       'Nest.js',
  //       'MySQL',
  //       'TypeORM',
  //     ],
  //     links: [
  //       {
  //         type: 'Website',
  //         href: '#',
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: '',
  //     video: '',
  //   },
  // ],
}
