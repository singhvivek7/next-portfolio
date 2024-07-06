import Link from 'next/link';
import { Button } from '@/components';
import { TextGenerate } from '@/components/TextGenerate';

import './Hero.css';

const heroParagraph =
  "A dedicated and skilled software developer with a passion for learning and advancing in technology. With experience in React, Next.js, Express.js, Nest.js, MongoDB, and SQL, I'm thrives in challenging environments, delivering high-quality solutions.";

export const Hero = () => {
  return (
    <section id="home" className="hero-wrapper">
      <div className="relative  mx-auto flex h-full w-11/12 flex-col items-center justify-center gap-8 lg:w-3/4">
        <h1 className="text-center text-4xl font-bold uppercase md:text-6xl 2xl:text-7xl">
          Hey, my name is Vivek Kumar
        </h1>
        <div className="max-w-[70rem] text-center text-lg md:text-2xl">
          <TextGenerate words={heroParagraph} />
        </div>
        <Link href="/#projects" className="mt-5">
          <Button>Projects</Button>
        </Link>
      </div>
      <div className="mouse" />
    </section>
  );
};
