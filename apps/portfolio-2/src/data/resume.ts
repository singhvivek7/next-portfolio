export const DATA = {
  name: 'Vivek Kumar',
  initials: 'VK',
  title: 'Full-Stack Engineer',
  role: 'SDE II @ Traya Health',
  availability: 'AVAILABLE FOR OPPORTUNITIES',
  tagline: 'Building distributed systems that scale & stay up.',
  bio: 'SDE II @ Traya Health - 3+ years engineering NestJS microservices, React/Next.js platforms, and AWS cloud infra.',
  about:
    'I start from the backend: NestJS microservices, service boundaries, and the AWS infrastructure (EC2, RDS, Nginx, CI/CD) that keeps them running, then build the React/Next.js interfaces on top. I tend to end up owning the parts of the system where correctness actually matters: payment reconciliation, recommendation ranking, SSO - the stuff where a bug isn\'t a bad review, it\'s a support ticket at 2am.',
  
  work: [
    {
      company: 'Traya Health',
      location: 'Bengaluru, Karnataka',
      totalPeriod: 'JUN 2025 - PRESENT',
      logoUrl: '/traya.avif',
      roles: [
        {
          title: 'Software Development Engineer II',
          start: 'APR 2026',
          end: 'PRESENT',
          isLive: true,
          isPromotion: true,
          version: 'v3.1.0',
          bullets: [
            'Own and scale the core recommendations microservice in Node.js, Express.js, and NestJS, delivering personalized healthcare experiences across Shopify, mobile app, and web platforms.',
            'Engineer high-throughput backend APIs and real-time data pipelines to ensure high availability and resilient service scaling under high user traffic.',
          ],
        },
        {
          title: 'Software Development Engineer I',
          start: 'JUN 2025',
          end: 'APR 2026',
          isLive: false,
          isPromotion: false,
          version: 'v3.0.0',
          bullets: [
            'Architected a rules engine, intelligent caching layer, and API payload optimization, slashing result-page response latency from ~500ms to < 100ms across app, web, and Shopify.',
            'Engineered the personalized recommendation engine processing user diagnostic data to automatically generate tailored treatment plans.',
            'Developed high-performance NestJS REST APIs and optimized PostgreSQL database queries, building responsive admin interfaces with robust form validation.',
          ],
        },
      ],
    },
    {
      company: 'PayBolt Technologies',
      location: 'Bengaluru, Karnataka',
      totalPeriod: 'JUL 2024 - JUN 2025',
      logoUrl: '/paybolt.png',
      roles: [
        {
          title: 'Software Development Engineer I',
          start: 'JUL 2024',
          end: 'JUN 2025',
          isLive: false,
          isPromotion: false,
          version: 'v2.0.0',
          bullets: [
            'Architected high-throughput backend APIs and microservices powering core payment workflows, including UPI, QR payments, payment links, and connected banking.',
            'Designed PostgreSQL data persistence layers and system schemas for high-performance transaction processing, collaborating with DevOps to ensure high service availability on AWS.',
            'Built responsive merchant dashboards and dynamic application checkout flows in Next.js/TypeScript, streamlining payment reconciliation and monitoring.',
          ],
        },
      ],
    },
    {
      company: 'Webelight Solutions',
      location: 'Ahmedabad, Gujarat',
      totalPeriod: 'SEP 2023 - JUL 2024',
      logoUrl: '/webelight.jpeg',
      roles: [
        {
          title: 'Jr. React.js Developer',
          start: 'SEP 2023',
          end: 'JUL 2024',
          isLive: false,
          isPromotion: false,
          version: 'v1.0.0',
          bullets: [
            'Shipped 3+ production web solutions using Next.js, React Hooks, SASS, and Webpack, leading 3 junior developers and lifting team delivery efficiency by 15%.',
            'Enforced clean-code standards, reusable UI component architecture, and version control (Git) best practices while conducting internal technical workshops on Sentry and Docker.',
          ],
        },
      ],
    },
  ],

  projects: [
    {
      title: 'NextLink',
      date: 'JUL 2025 - PRESENT',
      description:
        'A high-performance URL shortener with sub-millisecond redirects, smart caching, custom expiry, and automated cleanup - plus real-time geo/device analytics and JWT-based role auth.',
      stats: [
        { label: 'Uptime', value: '99.97%' },
        { label: 'Redirect P50', value: '<10ms' },
        { label: 'Deployed on', value: 'Vercel' },
      ],
      technologies: ['Next.js', 'Bun.js', 'MongoDB', 'Prisma'],
      href: 'https://link.vivekkk.in',
    },
    {
      title: 'RenderPDF',
      date: 'FEB 2026 - PRESENT',
      description:
        'A high-performance HTML/Markdown-to-PDF rendering service with custom templates, header/footer injection, webhooks, and sub-second PDF generation powered by headless browser workers.',
      stats: [
        { label: 'Uptime', value: '99.98%' },
        { label: 'Latency P50', value: '<250ms' },
        { label: 'Deployed on', value: 'Vercel' },
      ],
      technologies: ['Next.js', 'Node.js', 'Puppeteer', 'TypeScript', 'TailwindCSS'],
      href: 'https://pdf.vivekkk.in',
    },
  ],

  skills: {
    backend: ['Node.js', 'Express.js', 'Nest.js', 'Python', 'Go', 'SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'],
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'React-Query', 'SASS', 'TailwindCSS', 'MaterialUI', 'Webpack', 'HTML5', 'CSS3'],
    devops: ['Git', 'GitHub', 'GitLab', 'Docker', 'AWS (EC2, Route 53, RDS, S3, CloudFront)', 'Nginx', 'Sentry', 'Auth0'],
  },

  education: [
    {
      school: 'Indira Gandhi National Open University',
      degree: 'Master of Computer Applications · New Delhi, India',
      start: 'JAN 2025',
      end: 'PRESENT',
    },
    {
      school: 'Newton School',
      degree: 'Full Stack Web Development · Bengaluru, India',
      start: 'AUG 2022',
      end: 'AUG 2023',
    },
    {
      school: 'Nalanda Open University',
      degree: 'Graduation · Patna, Bihar',
      start: 'JUL 2018',
      end: 'JUN 2021',
    },
  ],

  contact: {
    email: 'singhvivek1999@yahoo.com',
    location: 'Bengaluru, India',
    social: [
      { name: 'LinkedIn ↗', url: 'https://linkedin.com/in/singhvivek7' },
      { name: 'GitHub ↗', url: 'https://github.com/singhvivek7' },
      { name: 'X / Twitter ↗', url: 'https://x.com/V1V3K__' },
      { name: 'LeetCode ↗', url: 'https://leetcode.com/singhvivek7' },
      { name: 'Email ↗', url: 'mailto:singhvivek1999@yahoo.com' },
    ],
  },
};
