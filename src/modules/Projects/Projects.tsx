import { ProjectCard, SectionHeader } from '@/components';
import { MY_PROJECTS } from '@/utils/constant';

import './Projects.css';

export const Projects = () => {
  return (
    <section id="projects" className="w-full bg-tertiary/5 py-24">
      <div className="mx-auto w-11/12 lg:w-3/4">
        <SectionHeader
          title="Projects"
          description="Check out some of my projects that I have worked on."
        />
        <div className="mt-16 flex flex-col gap-20">
          {MY_PROJECTS.map((project) => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
