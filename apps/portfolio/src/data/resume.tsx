import { Icons } from '@/components/icons'
import { HomeIcon, FileDown } from 'lucide-react'
import { DataType } from './types'

export const DATA: DataType = {
  name: 'Vivek Kumar',
  initials: 'VK',
  url: 'https://vivekkk.in',
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
    'Golang',
    'Java',
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
        'Own and scale the core recommendations microservice in Node.js, Express.js, and NestJS, delivering personalized healthcare experiences across Shopify, mobile app, and web platforms.',
      promotions: [
        {
          title: 'Software Development Engineer - II',
          start: 'April 2026',
          end: 'Present',
          description:
            'Own and scale the core recommendations microservice in Node.js, Express.js, and NestJS, delivering personalized healthcare experiences across Shopify, mobile app, and web platforms. Engineer high-throughput backend APIs and real-time data pipelines to ensure high availability and resilient service scaling under high user traffic.',
        },
        {
          title: 'Software Development Engineer - I',
          start: 'June 2025',
          end: 'April 2026',
          description:
            'Architected a rules engine, intelligent caching layer, and API payload optimization, slashing result-page response latency from ~500ms to < 100ms across app, web, and Shopify. Developed high-performance NestJS REST APIs and optimized PostgreSQL database queries, building responsive admin interfaces with robust form validation.',
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
      end: 'June 2025',
      description:
        'Architected high-throughput backend APIs and microservices powering core payment workflows (UPI, QR payments, payment links, and connected banking). Designed PostgreSQL data persistence layers and system schemas for high-performance transaction processing on AWS.',
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
        'Shipped 3+ production web solutions using Next.js, React Hooks, SASS, and Webpack, leading 3 junior developers and lifting team delivery efficiency by 15%. Enforced clean-code standards, reusable UI component architecture, and version control (Git) best practices while conducting internal technical workshops on Sentry and Docker.',
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
      title: 'RenderPDF - Document Generation Microservice',
      href: 'https://pdf.vivekkk.in',
      dates: 'Feb 2026 - Present',
      active: true,
      description: 'A high-performance HTML/Markdown-to-PDF rendering service with custom page templates, header/footer injection, webhooks, and sub-second PDF generation powered by headless browser workers.',
      technologies: [
        'Next.js',
        'Node.js',
        'Puppeteer',
        'TypeScript',
        'TailwindCSS',
        'Vercel',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://pdf.vivekkk.in',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: '',
    }
  ],
}
