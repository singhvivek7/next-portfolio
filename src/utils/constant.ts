import { StaticImageData } from 'next/image';
import { randomUUID } from 'crypto';

import nextPortfolioImage from '@/assets/next-portfolio.png';

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
    { name: 'Java', id: randomUUID(), color: '#f89820' },
    { name: 'JavaScript', id: randomUUID(), color: '#f0db4f' },
    { name: 'TypeScript', id: randomUUID(), color: '#007acc' },
    { name: 'Python', id: randomUUID(), color: '#306998' },
  ],
  frameworks: [
    { name: 'Next.js', id: randomUUID(), color: '#000000' },
    { name: 'React.js', id: randomUUID(), color: '#61dafb' },
    { name: 'React-Query', id: randomUUID(), color: '#ff4154' },
    { name: 'React Table', id: randomUUID(), color: '#14b8a6' },
    { name: 'Redux-Toolkit', id: randomUUID(), color: '#764abc' },
    { name: 'Sentry', id: randomUUID(), color: '#362d59' },
    { name: 'SASS', id: randomUUID(), color: '#cc6699' },
    { name: 'TailwindCSS', id: randomUUID(), color: '#38b2ac' },
    { name: 'MaterialUI', id: randomUUID(), color: '#0081cb' },
    { name: 'Node.js', id: randomUUID(), color: '#68a063' },
    { name: 'Express.js', id: randomUUID(), color: '#000000' },
    { name: 'Nest.js', id: randomUUID(), color: '#e0234e' },
    { name: 'MongoDB', id: randomUUID(), color: '#47a248' },
    { name: 'Mongoose', id: randomUUID(), color: '#800000' },
    { name: 'TypeORM', id: randomUUID(), color: '#ffdd00' },
    { name: 'MySQL', id: randomUUID(), color: '#4479a1' },
    { name: 'PostgreSQL', id: randomUUID(), color: '#336791' },
    { name: 'FastAPI', id: randomUUID(), color: '#009688' },
    { name: 'DSA', id: randomUUID(), color: '#4CAF50' },
  ],
  devops: [
    { name: 'Docker', id: randomUUID(), color: '#2496ed' },
    { name: 'Git', id: randomUUID(), color: '#f34f29' },
    { name: 'GitHub', id: randomUUID(), color: '#181717' },
    { name: 'Gitlab', id: randomUUID(), color: '#fc6d26' },
    { name: 'Bitbucket', id: randomUUID(), color: '#0052cc' },
  ],

  softSkills: [
    { name: 'Communication', id: randomUUID(), color: '#1E90FF' },
    { name: 'Problem Solving', id: randomUUID(), color: '#8B0000' },
    { name: 'Quick Learner', id: randomUUID(), color: '#FF4500' },
    { name: 'Adaptability', id: randomUUID(), color: '#FFA500' },
    { name: 'Time management', id: randomUUID(), color: '#2E8B57' },
    { name: 'Leadership', id: randomUUID(), color: '#FFD700' },
  ],
};

export const MY_PROJECTS: MyProjects[] = [
  {
    id: randomUUID(),
    name: 'Vivek - Next Portfolio',
    slug: 'vivek-next-portfolio',
    image: nextPortfolioImage,
    sortDescription:
      'Personal portfolio website using Next.js, TypeScript, TailwindCSS, and more, showcasing my skills and projects with a modern design.',
    description: {
      para1:
        'My personal portfolio website is a showcase of my skills, projects, and professional journey. Built with React and Next.js, it features a clean and modern design, highlighting my expertise in Java, JavaScript, TypeScript, Python, and various web development frameworks and libraries. The website includes detailed sections about me, my skills, and my past projects, providing visitors with a comprehensive view of my work and capabilities. It also offers easy navigation and a responsive layout, ensuring a seamless user experience across all devices.',
      para2: 'Deployed using Vercel.',
    },
    url: 'https://vivekkk.vercel.app/',
    github: 'https://github.com/singhvivek7/next-portfolio',
    technologies: [
      { name: 'Next.js', id: randomUUID(), color: '#000000' },
      { name: 'TypeScript', id: randomUUID(), color: '#007acc' },
      { name: 'TailwindCSS', id: randomUUID(), color: '#38b2ac' },
      { name: 'React Hook Form', id: randomUUID(), color: '#ec5990' },
      { name: 'Nodemailer', id: randomUUID(), color: '#007bff' },
      { name: 'Framer Motion', id: randomUUID(), color: '#0055FF' },
      { name: 'Google reCAPTCHA', id: randomUUID(), color: '#4285F4' },
      { name: 'Vercel', id: randomUUID(), color: '#000000' },
      { name: 'GitHub', id: randomUUID(), color: '#181717' },
    ],
  },
  // {
  //   id: randomUUID(),
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
  //     { name: 'React.js', id: randomUUID(), color: '#61dafb' },
  //     { name: 'Redux-Toolkit', id: randomUUID(), color: '#764abc' },
  //     { name: 'Express.js', id: randomUUID(), color: '#000000' },
  //     { name: 'MongoDB', id: randomUUID(), color: '#4479a1' },
  //     { name: 'Vercel', id: randomUUID(), color: '#000000' },
  //     { name: 'GitHub', id: randomUUID(), color: '#181717' },
  //   ],
  // },
];
