import { MyProjects } from '@/utils/constant';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components';

export const ProjectCard = ({
  name,
  id,
  sortDescription,
  image,
  slug
}: MyProjects) => {
  const getProjectUrl = ({ slug, id }: { slug: string; id: string }) =>
    `/projects/${slug}_${id}`;

  return (
    <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-20">
      <Image
        src={image.src}
        alt={name}
        className="pointer-events-none select-none rounded border border-primary shadow-md"
        width={image.width}
        height={image.height}
      />
      <div className="flex flex-col gap-5">
        <h4 className="text-4xl font-bold text-foreground">{name}</h4>
        <p className="text-lg">{sortDescription}</p>
        {/* <Link href="/#projects" className="w-fit"> */}
        <Button variant="secondary" className="capitalize" disabled>
          Explore (coming soon...)
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
};
