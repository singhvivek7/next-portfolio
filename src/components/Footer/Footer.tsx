import Link from 'next/link';
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#141414] text-[#F5F5F5e0]">
      <div className="w-11/12 lg:w-3/4 mx-auto flex flex-col justify-center items-center pt-10 pb-5">
        <p className="text-lg">Designed and built with &hearts; by Vivek</p>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <div className="flex justify-center items-center gap-5 mt-2">
          <Link
            href="https://github.com/singhvivek7"
            target="_blank"
            className="text-lg hover:text-primary transition-colors">
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/singhvivek7/"
            target="_blank"
            className="text-lg hover:text-primary transition-colors">
            <FaLinkedin />
          </Link>

          <Link
            href="https://twitter.com/v1v3k__"
            target="_blank"
            className="text-lg hover:text-primary transition-colors">
            <FaXTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/ig_v1v3k"
            target="_blank"
            className="text-lg hover:text-primary transition-colors">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};
