export const DATA = {
  name: 'Vivek Kumar',
  initials: 'VK',
  brandName: 'vivek',
  url: 'https://vivekkk.in',
  title: 'Full-Stack Engineer',
  role: 'SDE II @ Traya Health',
  tagline: 'Building distributed systems that scale & stay up.',
  bio: '3+ years engineering NestJS/Express microservices, React/Next.js platforms, and AWS cloud infra.',

  headline: {
    start: 'I build things',
    highlight: 'scale.',
  },

  intro:
    "Hey, I'm Vivek — a software engineer focused on building reliable backend systems, thoughtful products, and experiences that solve real problems.",

  heroCta: {
    primaryText: 'Explore my work',
    primaryHref: '#projects',
    secondaryText: 'GitHub ↗',
    secondaryHref: 'https://github.com/singhvivek7',
  },

  heroNote: 'v26',

  floatingBadges: [
    {
      label: 'Engineering focus',
      value: 'Reliability',
      hasArrow: true,
      position: 'float-a',
    },
    {
      label: 'Approach',
      value: 'Build · Measure · Improve',
      hasArrow: false,
      position: 'float-b',
    },
  ],

  codeSnippet: {
    filename: 'recommendation.service.ts',
    lines: [
      {
        num: '01',
        indent: false,
        parts: [
          { text: 'async function', cls: 'blue' },
          { text: ' ' },
          { text: 'getRecommendations', cls: 'green' },
          { text: '() {' },
        ],
      },
      {
        num: '02',
        indent: true,
        parts: [
          { text: 'const', cls: 'yellow' },
          { text: ' tenant = ' },
          { text: 'resolveTenant', cls: 'green' },
          { text: '();' },
        ],
      },
      {
        num: '03',
        indent: true,
        parts: [
          { text: 'const', cls: 'yellow' },
          { text: ' context = ' },
          { text: 'await', cls: 'blue' },
          { text: ' loadContext(tenant);' },
        ],
      },
      {
        num: '04',
        indent: true,
        parts: [
          { text: 'return', cls: 'yellow' },
          { text: ' rankCandidates(context);' },
        ],
      },
      {
        num: '05',
        indent: false,
        parts: [{ text: '}' }],
      },
    ],
    tagline: 'Built for scale. Designed for people.',
    status: '✓ tests passing   ·   deploy ready',
  },

  navlinks: [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],

  metrics: [
    { value: '3+ years', label: 'Building and shipping software' },
    { value: 'Backend first', label: 'APIs, data and distributed systems' },
    { value: 'Full-stack', label: 'From product UI to infrastructure' },
    { value: 'Production', label: 'Ownership beyond the code' },
  ],

  experienceSection: {
    kicker: 'THE JOURNEY',
    title: 'Experience',
    subtitle: 'Building, learning, and taking ownership of systems that matter.',
  },

  // COMPANIES & POSITIONS
  work: [
    {
      company: 'Traya Health',
      location: 'Bengaluru, Karnataka',
      totalPeriod: 'JUN 2024 - PRESENT',
      logoUrl: '/traya.avif',
      roles: [
        {
          title: 'Software Development Engineer II',
          shortTitle: 'SDE II',
          position: 'Software Development Engineer II',
          period: 'APR 2026 — PRESENT',
          start: 'APR 2026',
          end: 'PRESENT',
          team: 'Recommendations Platform',
          sub: 'Software Development Engineer II · Recommendations Platform',
          badge: 'SDE II',
          isLive: true,
          isPromotion: true,
          skills: ['Node.js', 'NestJS', 'Express.js', 'PostgreSQL', 'Redis', 'Microservices', 'REST APIs'],
          bullets: [
            'Own and scale the core recommendations microservice in Node.js, Express.js, and NestJS, powering personalized healthcare experiences across mobile app, web, and Shopify.',
            'Improve database query performance, asynchronous workflows, and service resource utilization to maintain sub-100ms response times.',
            'Work across API design, CMS integration, observability, and production reliability under high concurrency.',
          ],
        },
        {
          title: 'Software Development Engineer I',
          shortTitle: 'SDE I',
          position: 'Software Development Engineer I',
          period: 'JUN 2025 — APR 2026',
          start: 'JUN 2025',
          end: 'APR 2026',
          team: 'Full-stack Development',
          sub: 'Software Development Engineer I · Full-stack Development',
          badge: 'SDE I',
          isLive: false,
          isPromotion: false,
          skills: ['Redis', 'NestJS', 'Rules Engine', 'Caching', 'PostgreSQL', 'TypeScript'],
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
          shortTitle: 'SDE I',
          position: 'Software Development Engineer I',
          period: '2024 — 2025',
          start: 'JUL 2024',
          end: 'JUN 2025',
          team: 'Payment Microservices',
          sub: 'Software Development Engineer I · Payment Microservices',
          badge: 'SDE I',
          isLive: false,
          isPromotion: false,
          skills: ['PostgreSQL', 'AWS', 'Payment APIs', 'Next.js', 'TypeScript', 'ACID'],
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
          shortTitle: 'Jr. React Dev',
          position: 'Jr. React.js Developer',
          period: '2023 — 2024',
          start: 'SEP 2023',
          end: 'JUL 2024',
          team: 'Frontend Systems',
          sub: 'Jr. React.js Developer · Frontend Systems',
          badge: 'Jr. React Dev',
          isLive: false,
          isPromotion: false,
          skills: ['React', 'Next.js', 'TypeScript', 'SASS', 'Webpack', 'Sentry'],
          bullets: [
            'Shipped 3+ production web applications using Next.js, React Hooks, SASS, and Webpack, mentoring 3 junior developers.',
            'Established reusable component libraries, Sentry error monitoring, and Git workflow standards.',
            'Optimized client-side rendering performance, state management, and asset delivery.',
          ],
        },
      ],
    },
  ],

  projectsSection: {
    kicker: 'SELECTED WORK',
    title: "Things I've built",
    subtitle: 'A few products and experiments from the workbench.',
  },

  projects: [
    {
      title: 'NextLink',
      kind: 'product' as const,
      date: 'JUL 2025 - PRESENT',
      description:
        'A link management platform to shorten, organize and track links with analytics, custom expiration rules, and edge redirects.',
      stats: [
        { label: 'Architecture', value: 'Edge Cached' },
        { label: 'Latency P50', value: '< 10ms' },
        { label: 'Deployment', value: 'Vercel Edge' },
      ],
      technologies: ['Next.js', 'Bun.js', 'MongoDB', 'Prisma', 'TypeScript'],
      chips: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
      href: 'https://link.vivekkk.in',
      artType: 'browser' as const,
    },
    {
      title: 'SettleUp',
      kind: 'product' as const,
      date: 'OCT 2025 - PRESENT',
      description:
        'A group expense-sharing and debt-simplification platform featuring an immutable double-entry ledger, graph minimization algorithms, and direct UPI settlements.',
      stats: [
        { label: 'Algorithm', value: 'Graph Simplified' },
        { label: 'Ledger', value: 'Double-Entry' },
        { label: 'Settlements', value: 'Razorpay / UPI' },
      ],
      technologies: ['Next.js', 'Prisma', 'MongoDB', 'NextAuth', 'TailwindCSS', 'TypeScript'],
      chips: ['Next.js', 'Prisma', 'MongoDB', 'Graph Engine', 'TypeScript'],
      href: 'https://settleup.vivekkk.in',
      artType: 'ledger' as const,
    },
    {
      title: 'RenderPDF',
      kind: 'tool' as const,
      date: 'FEB 2026 - PRESENT',
      description:
        'An API to render HTML into PDFs, with support for templates, headers, footers and custom styling.',
      stats: [
        { label: 'Execution', value: 'Worker Pool' },
        { label: 'Rendering', value: '< 250ms' },
        { label: 'Deployment', value: 'Vercel Cloud' },
      ],
      technologies: ['Next.js', 'Node.js', 'Puppeteer', 'TypeScript', 'TailwindCSS'],
      chips: ['Node.js', 'Docker', 'AWS', 'API design'],
      href: 'https://pdf.vivekkk.in',
      artType: 'pdf' as const,
    },
  ],

  aboutSection: {
    kicker: 'A LITTLE ABOUT ME',
    titleStart: 'Engineer by craft.',
    titleEnd: 'Curious by default.',
    lead: 'I enjoy understanding how things work under the hood — from database query plans and distributed systems to the details that make a product feel intuitive. I care about ',
    strong:
      'clear abstractions, pragmatic engineering, and software that holds up in production.',
  },

  about:
    'I start from the backend: NestJS microservices, service boundaries, and the AWS infrastructure (EC2, RDS, Nginx, CI/CD) that keeps them running, then build the React/Next.js interfaces on top. I tend to end up owning the parts of the system where correctness actually matters: payment reconciliation, recommendation ranking, SSO - the stuff where a bug isn\'t a bad review, it\'s a support ticket at 2am.',

  contactSection: {
    kicker: 'HAVE SOMETHING IN MIND?',
    titleStart: "Let's build something",
    titleEnd: 'meaningful.',
    description:
      'Open to interesting engineering conversations and opportunities.',
    ctaText: 'Get in touch ↗',
  },

  skills: {
    backend: [
      'NestJS',
      'Node.js',
      'Express.js',
      'Python',
      'Go',
      'REST APIs',
      'Microservices',
      'PostgreSQL',
      'MongoDB',
      'Redis',
    ],
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Redux Toolkit',
      'React Query',
    ],
    devops: [
      'AWS (EC2, RDS, Route 53, S3, CloudFront)',
      'Docker',
      'Nginx',
      'Git',
      'CI/CD',
      'Sentry',
    ],
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
      degree: "Bachelor's Degree · Bihar",
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
      { name: 'Live site ↗', url: 'https://www.vivekkk.in' },
    ],
  },
};
