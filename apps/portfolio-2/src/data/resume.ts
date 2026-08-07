export const DATA = {
  name: 'Vivek Kumar',
  initials: 'VK',
  url: 'https://vivekkk.in',
  title: 'Full-Stack Engineer',
  role: 'SDE II @ Traya Health',
  tagline: 'Building distributed systems that scale & stay up.',
  bio: '3+ years engineering NestJS/Express microservices, React/Next.js platforms, and AWS cloud infra.',
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
          badge: 'Current Role',
          bullets: [
            'Own and scale the core recommendations microservice in Node.js, Express.js, and NestJS, powering personalized healthcare experiences across mobile app, web, and Shopify.',
            'Engineer high-throughput REST APIs and real-time event pipelines to maintain sub-100ms response times under high concurrency.',
          ],
        },
        {
          title: 'Software Development Engineer I',
          start: 'JUN 2025',
          end: 'APR 2026',
          isLive: false,
          isPromotion: false,
          badge: 'Promotion',
          bullets: [
            'Architected a rules engine, intelligent Redis caching layer, and payload optimization, reducing result page response latency from ~500ms to < 100ms.',
            'Engineered the diagnostic recommendation pipeline processing user input data to automatically generate personalized treatment plans.',
            'Built responsive NestJS admin services and database schemas with robust input validation and audit logging.',
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
          badge: 'Fintech Systems',
          bullets: [
            'Architected high-throughput payment microservices for core checkout workflows, including UPI, QR payments, payment links, and connected banking.',
            'Designed PostgreSQL transaction persistence layers with ACID guarantees, collaborating with DevOps for high availability on AWS.',
            'Built merchant reconciliation dashboards and real-time transaction monitoring tools in Next.js/TypeScript.',
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
          badge: 'Frontend Systems',
          bullets: [
            'Shipped 3+ production web applications using Next.js, React Hooks, SASS, and Webpack, mentoring 3 junior developers.',
            'Established reusable component libraries, Sentry error monitoring, and Git workflow standards.',
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
        'A high-performance URL shortener featuring instant redirects, Redis caching, custom expiration rules, geo/device analytics, and JWT-based authentication.',
      stats: [
        { label: 'Architecture', value: 'Edge Cached' },
        { label: 'Latency P50', value: '< 10ms' },
        { label: 'Deployment', value: 'Vercel Edge' },
      ],
      technologies: ['Next.js', 'Bun.js', 'MongoDB', 'Prisma', 'TypeScript'],
      href: 'https://link.vivekkk.in',
    },
    {
      title: 'RenderPDF',
      date: 'FEB 2026 - PRESENT',
      description:
        'A resilient HTML/Markdown-to-PDF rendering service featuring custom templates, header/footer injection, webhooks, and headless browser worker pools.',
      stats: [
        { label: 'Execution', value: 'Worker Pool' },
        { label: 'Rendering', value: '< 250ms' },
        { label: 'Deployment', value: 'Vercel Cloud' },
      ],
      technologies: ['Next.js', 'Node.js', 'Puppeteer', 'TypeScript', 'TailwindCSS'],
      href: 'https://pdf.vivekkk.in',
    },
  ],

  skills: {
    backend: ['NestJS', 'Node.js', 'Express.js', 'Python', 'Go', 'REST APIs', 'Microservices', 'PostgreSQL', 'MongoDB', 'Redis'],
    frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux Toolkit', 'React Query'],
    devops: ['AWS (EC2, RDS, Route 53, S3, CloudFront)', 'Docker', 'Nginx', 'Git', 'CI/CD', 'Sentry'],
  },

  education: [
    {
      school: 'Indira Gandhi National Open University',
      degree: 'Master of Computer Applications (MCA) · New Delhi',
      start: 'JAN 2025',
      end: 'PRESENT',
    },
    {
      school: 'Newton School',
      degree: 'Full Stack Web Development · Bengaluru',
      start: 'AUG 2022',
      end: 'AUG 2023',
    },
    {
      school: 'Nalanda Open University',
      degree: 'Bachelor\'s Degree · Bihar',
      start: 'JUL 2018',
      end: 'JUN 2021',
    },
  ],

  contact: {
    email: 'singhvivek1999@yahoo.com',
    location: 'Bengaluru, India',
    social: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/singhvivek7' },
      { name: 'GitHub', url: 'https://github.com/singhvivek7' },
      { name: 'X / Twitter', url: 'https://x.com/V1V3K__' },
      { name: 'LeetCode', url: 'https://leetcode.com/singhvivek7' },
      { name: 'Email', url: 'mailto:singhvivek1999@yahoo.com' },
    ],
  },
};
