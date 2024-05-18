import { MY_PROJECTS } from '@/utils/constant';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

const Project = ({ params: { slug } }: Props) => {
  const projectId = slug.split('_').at(1);

  const projectDetails = MY_PROJECTS.find(item => item.id === projectId);

  if (!projectDetails) {
    notFound();
  }

  return (
    <section className="pt-20">
      <div>{projectDetails.name}</div>
    </section>
  );
};

export default Project;
