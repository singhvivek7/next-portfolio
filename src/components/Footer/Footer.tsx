import Link from 'next/link';
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#141414] text-[#F5F5F5e0]">
      <div className="mx-auto flex w-11/12 flex-col items-center justify-center pb-5 pt-10 lg:w-3/4">
        <p className="text-lg">Designed and built with &hearts; by Vivek</p>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <div className="mt-2 flex items-center justify-center gap-5">
          <Link
            href="https://github.com/singhvivek7"
            target="_blank"
            className="text-lg transition-colors hover:text-primary"
            data-tooltip-id="tooltip"
            data-tooltip-content="@singhvivek7"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/singhvivek7/"
            target="_blank"
            className="text-lg transition-colors hover:text-primary"
            data-tooltip-id="tooltip"
            data-tooltip-content="@singhvivek7"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://twitter.com/v1v3k__"
            target="_blank"
            className="text-lg transition-colors hover:text-primary"
            data-tooltip-id="tooltip"
            data-tooltip-content="@v1v3k__"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/ig_v1v3k"
            target="_blank"
            className="text-lg transition-colors hover:text-primary"
            data-tooltip-id="tooltip"
            data-tooltip-content="@ig_v1v3k"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};
