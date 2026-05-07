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
  avatarUrl: '/me.jpg',
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
      X: {
        name: 'X',
        url: 'https://x.com/V1V3K__',
        icon: Icons.x,
        navbar: true,
      },
      LeetCode: {
        name: 'LeetCode',
        url: 'https://leetcode.com/singhvivek7',
        icon: Icons.leetcode,
        navbar: true,
      },
      // Resume: {
      //   name: 'Download Resume',
      //   url: 'https://drive.google.com/file/d/1zbJNpXDH6xeQVr_UJ64EmBtwoOxqT5be/view?usp=drive_link',
      //   icon: Icons.fileDown,
      //   navbar: true,
      // },
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
      company: 'Traya Health',
      href: 'https://traya.health',
      badges: [],
      location: 'Bengaluru, Karnataka',
      title: 'Software Development Engineer - II',
      logoUrl: '/traya.avif',
      start: 'June 2025',
      end: 'Present',
      description:
        'Built a personalized recommendation system by processing user form data using custom algorithms, and developed high-performance REST APIs with optimized database operations and caching strategies to enhance response times. Worked on a tenant-based CRM dashboard for real-time data management and visualization, and designed responsive admin interfaces with robust form validation and seamless backend integration.',
      promotions: [
        {
          title: 'Software Development Engineer - II',
          start: 'April 2026',
          end: 'Present',
          description:
            'Leading feature development for the recommendation engine and CRM dashboard. Mentoring junior developers and owning end-to-end delivery for key product initiatives.',
        },
        {
          title: 'Software Development Engineer - I',
          start: 'June 2025',
          end: 'April 2026',
          description:
            'Contributed to backend APIs and front-end component library. Built data visualisation widgets and integrated third-party health analytics SDKs.',
        },
      ],
    },
    {
      company: 'PayBolt Technologies',
      href: 'https://paybolt.in',
      badges: [],
      location: 'Bengaluru, Karnataka',
      title: 'Software Development Engineer - I',
      logoUrl: '/paybolt.png',
      start: 'July 2024',
      end: 'May 2025',
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
      location: 'New Delhi, India',
    },
    {
      school: 'Newton School',
      href: 'https://newtonschool.co',
      degree: 'Full Stack Web Development',
      logoUrl: '/newton.jpeg',
      start: 'August 2022',
      end: 'August 2023',
      location: 'Bengaluru, India',
    },
    {
      school: 'Nalanda Open University',
      href: 'https://www.nou.ac.in',
      degree: 'Graduation',
      logoUrl: '/nalanda.jpeg',
      start: 'July 2018',
      end: 'June 2021',
      location: 'Patna, Bihar',
    },
  ],
  projects: [
    {
      title: 'NextLink - Modern URL Shortner',
      href: 'https://link.vivekkk.in',
      dates: 'July 2025 - Present',
      active: true,
      description: 'A high-performance URL shortener with sub-millisecond link creation and redirects, smart caching, custom expiry, and automated cleanup. It offers real-time analytics with geo and device insights, secure JWT-based auth with role-based access (including a super admin view), and a modern, responsive dashboard built with Radix UI, Tailwind, Bun, and Next.js for fast, scalable performance.',
      technologies: [
        'Next.js',
        'Bun.js',
        'MongoDB',
        'Prisma',
        'Motion',
        'JWT',
        'TailwindCSS',
        'React-Query',
        'Vercel',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://link.vivekkk.in',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: '',
    },
    {
      title: 'Aurex - Modern Payment Gateway',
      href: 'https://aurex.vivekkk.in',
      dates: 'Feb 2026 - Present',
      active: true,
      description: 'Aurex is a comprehensive payment processing platform that provides a robust, secure, and developer-friendly solution for accepting and managing online payments. Built with cutting-edge technologies, Aurex offers seamless integration, real-time analytics, and enterprise-grade reliability.',
      technologies: [
        'Next.js',
        'Bun.js',
        'MongoDB',
        'Prisma',
        'Motion',
        'JWT',
        'TailwindCSS',
        'React-Query',
        'Vercel',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://aurex.vivekkk.in',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: '',
    }
  ],
}
