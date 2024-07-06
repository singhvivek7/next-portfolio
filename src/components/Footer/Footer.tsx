import { Tooltip } from '@/components/Tooltip';
import { SOCIALS } from '@/utils/constant';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#141414] text-[#F5F5F5e0]">
      <div className="mx-auto flex w-11/12 flex-col items-center justify-center pb-5 pt-10 lg:w-3/4">
        <p className="text-lg">Designed and built with &hearts; by Vivek</p>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <Tooltip items={SOCIALS} />
      </div>
    </footer>
  );
};
