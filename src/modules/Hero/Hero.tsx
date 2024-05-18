import Link from 'next/link';
import { Button } from '@/components';

import './Hero.css';

export const Hero = () => {
  return (
    <section id="home" className="hero-wrapper">
      <div className="w-11/12 lg:w-3/4 mx-auto h-full flex justify-center items-center flex-col gap-8 relative">
        <h1 className="uppercase text-4xl md:text-6xl 2xl:text-7xl font-bold text-center">
          Hey, my name is Vivek Kumar
        </h1>
        <p className="text-lg md:text-2xl max-w-[70rem] text-center">
          A dedicated and skilled software developer with a passion for learning
          and advancing in technology. With experience in React, Next.js,
          Express.js, Nest.js, MongoDB, and SQL, I&apos;m thrives in challenging
          environments, delivering high-quality solutions.
        </p>
        <Link href="/#projects" className="mt-5">
          <Button>Projects</Button>
        </Link>
      </div>
      <div className="mouse" />
    </section>
  );
};
