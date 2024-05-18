import { ProjectCard, SectionHeader } from '@/components';
import { MY_PROJECTS } from '@/utils/constant';

import './Projects.css';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 w-full bg-tertiary/5">
      <div className="w-11/12 lg:w-3/4 mx-auto">
        <SectionHeader
          title="Projects"
          description="Check out some of my projects that I have worked on."
        />
        <div className="mt-16 flex flex-col gap-20">
          {MY_PROJECTS.map(project => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
