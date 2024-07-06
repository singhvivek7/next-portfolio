import { StaticImageData } from 'next/image';
import { nanoid } from 'nanoid';

import nextPortfolioImage from '@/assets/next-portfolio.png';
import TwitterX from '@public/icons/twitterX.svg';
import Github from '@public/icons/github.svg';
import LinkedIn from '@public/icons/linkedin.svg';
import Instagram from '@public/icons/insta.svg';

export interface MyProjects {
  id: string;
  name: string;
  slug: string;
  sortDescription: string;
  image: StaticImageData;
  description: {
    para1: string;
    para2: string;
  };
  url: string;
  github: string;
  technologies: {
    name: string;
    id: string;
    color: string;
  }[];
}

export const MY_SKILLS = {
  languages: [
    { name: 'Java', id: nanoid(), color: '#f89820' },
    { name: 'JavaScript', id: nanoid(), color: '#f0db4f' },
    { name: 'TypeScript', id: nanoid(), color: '#007acc' },
    { name: 'Python', id: nanoid(), color: '#306998' }
  ],
  frameworks: [
    { name: 'Next.js', id: nanoid(), color: '#000000' },
    { name: 'React.js', id: nanoid(), color: '#61dafb' },
    { name: 'React-Query', id: nanoid(), color: '#ff4154' },
    { name: 'React Table', id: nanoid(), color: '#14b8a6' },
    { name: 'Redux-Toolkit', id: nanoid(), color: '#764abc' },
    { name: 'Sentry', id: nanoid(), color: '#362d59' },
    { name: 'SASS', id: nanoid(), color: '#cc6699' },
    { name: 'TailwindCSS', id: nanoid(), color: '#38b2ac' },
    { name: 'MaterialUI', id: nanoid(), color: '#0081cb' },
    { name: 'Node.js', id: nanoid(), color: '#68a063' },
    { name: 'Express.js', id: nanoid(), color: '#000000' },
    { name: 'Nest.js', id: nanoid(), color: '#e0234e' },
    { name: 'MongoDB', id: nanoid(), color: '#47a248' },
    { name: 'Mongoose', id: nanoid(), color: '#800000' },
    { name: 'TypeORM', id: nanoid(), color: '#ffdd00' },
    { name: 'MySQL', id: nanoid(), color: '#4479a1' },
    { name: 'PostgreSQL', id: nanoid(), color: '#336791' },
    { name: 'FastAPI', id: nanoid(), color: '#009688' },
    { name: 'DSA', id: nanoid(), color: '#4CAF50' }
  ],
  devops: [
    { name: 'Docker', id: nanoid(), color: '#2496ed' },
    { name: 'Git', id: nanoid(), color: '#f34f29' },
    { name: 'GitHub', id: nanoid(), color: '#181717' },
    { name: 'Gitlab', id: nanoid(), color: '#fc6d26' },
    { name: 'Bitbucket', id: nanoid(), color: '#0052cc' }
  ],

  softSkills: [
    { name: 'Communication', id: nanoid(), color: '#1E90FF' },
    { name: 'Problem Solving', id: nanoid(), color: '#8B0000' },
    { name: 'Quick Learner', id: nanoid(), color: '#FF4500' },
    { name: 'Adaptability', id: nanoid(), color: '#FFA500' },
    { name: 'Time management', id: nanoid(), color: '#2E8B57' },
    { name: 'Leadership', id: nanoid(), color: '#FFD700' }
  ]
};

export const MY_PROJECTS: MyProjects[] = [
  {
    id: nanoid(),
    name: 'Vivek - Next Portfolio',
    slug: 'vivek-next-portfolio',
    image: nextPortfolioImage,
    sortDescription:
      'Personal portfolio website using Next.js, TypeScript, TailwindCSS, and more, showcasing my skills and projects with a modern design.',
    description: {
      para1:
        'My personal portfolio website is a showcase of my skills, projects, and professional journey. Built with React and Next.js, it features a clean and modern design, highlighting my expertise in Java, JavaScript, TypeScript, Python, and various web development frameworks and libraries. The website includes detailed sections about me, my skills, and my past projects, providing visitors with a comprehensive view of my work and capabilities. It also offers easy navigation and a responsive layout, ensuring a seamless user experience across all devices.',
      para2: 'Deployed using Vercel.'
    },
    url: 'https://vivekkk.vercel.app/',
    github: 'https://github.com/singhvivek7/next-portfolio',
    technologies: [
      { name: 'Next.js', id: nanoid(), color: '#000000' },
      { name: 'TypeScript', id: nanoid(), color: '#007acc' },
      { name: 'TailwindCSS', id: nanoid(), color: '#38b2ac' },
      { name: 'React Hook Form', id: nanoid(), color: '#ec5990' },
      { name: 'Nodemailer', id: nanoid(), color: '#007bff' },
      { name: 'Framer Motion', id: nanoid(), color: '#0055FF' },
      { name: 'Google reCAPTCHA', id: nanoid(), color: '#4285F4' },
      { name: 'Vercel', id: nanoid(), color: '#000000' },
      { name: 'GitHub', id: nanoid(), color: '#181717' }
    ]
  }
  // {
  //   id: nanoid(),
  //   name: 'Swiggy Clone',
  //   slug: 'swiggy-clone',
  //   image: nextPortfolioImage,
  //   sortDescription:
  //     'Swiggy clone created using React, Redux, MaterialUI, MUI, React-Query, FastAPI, MongoDB',
  //   description: {
  //     para1:
  //       'Swiggy clone created using React, Redux, MaterialUI, MUI, React-Query, FastAPI, MongoDB',
  //     para2: 'Deployed using Vercel',
  //   },
  //   url: 'https://swiggy-vivek.vercel.app/',
  //   github: 'https://github.com/singhvivek7/swiggy-clone',
  //   technologies: [
  //     { name: 'React.js', id: nanoid(), color: '#61dafb' },
  //     { name: 'Redux-Toolkit', id: nanoid(), color: '#764abc' },
  //     { name: 'Express.js', id: nanoid(), color: '#000000' },
  //     { name: 'MongoDB', id: nanoid(), color: '#4479a1' },
  //     { name: 'Vercel', id: nanoid(), color: '#000000' },
  //     { name: 'GitHub', id: nanoid(), color: '#181717' },
  //   ],
  // },
];

export const EXPERIENCE = [
  {
    id: nanoid(),
    name: 'High School, Kusaundhi (Bihar, India)',
    position: 'Matriculation (Xth)',
    joinDate: '04/01/2013', // MM/DD/YYYY
    endDate: '04/01/2014'
  },
  {
    id: nanoid(),
    name: 'Gopeshwar Collage, Hathua (Bihar, India)',
    position: 'Intermediate (Mathematics)',
    joinDate: '04/01/2014', // MM/DD/YYYY
    endDate: '04/01/2016'
  },
  {
    id: nanoid(),
    name: 'Nalanda Open University, Patna (Bihar, India)',
    position: 'Graduation (B.A.)',
    joinDate: '04/01/2018', // MM/DD/YYYY
    endDate: '04/01/2021'
  },
  {
    id: nanoid(),
    name: 'Newton School, Banglore (Karnataka, India)',
    position: 'Full Stack Developement (MERN)',
    joinDate: '09/01/2022', // MM/DD/YYYY
    endDate: '09/01/2023'
  },
  {
    id: nanoid(),
    name: 'Webeligth Solution, Ahmedabad (Gujarat, India)',
    position: 'Jr. Reactjs Developer',
    joinDate: '09/04/2023', // MM/DD/YYYY
    endDate: null
  }
];

export const SOCIALS = [
  {
    id: nanoid(),
    name: '@singhvivek7',
    icon: Github,
    url: 'https://github.com/singhvivek7'
  },
  {
    id: nanoid(),
    name: '@singhvivek7',
    icon: LinkedIn,
    url: 'https://www.linkedin.com/in/singhvivek7/'
  },
  {
    id: nanoid(),
    name: '@v1v3k__',
    icon: TwitterX,
    url: 'https://x.com/v1v3k__'
  },
  {
    id: nanoid(),
    name: '@ig_v1v3k',
    icon: Instagram,
    url: 'https://www.instagram.com/ig_v1v3k/'
  }
];
