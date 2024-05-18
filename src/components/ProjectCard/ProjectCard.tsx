import { MyProjects } from '@/utils/constant';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components';

export const ProjectCard = ({
  name,
  id,
  sortDescription,
  image,
  slug,
}: MyProjects) => {
  const getProjectUrl = ({ slug, id }: { slug: string; id: string }) =>
    `/projects/${slug}_${id}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 items-center">
      <Image
        src={image.src}
        alt={name}
        className="rounded border-primary border shadow-md select-none pointer-events-none"
        width={image.width}
        height={image.height}
      />
      <div className="flex flex-col gap-5">
        <h4 className="font-bold text-4xl text-foreground">{name}</h4>
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
