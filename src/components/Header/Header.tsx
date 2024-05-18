'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

import Link from 'next/link';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="w-full bg-background h-20 text-foreground fixed top-0 left-0 z-header border-b shadow-md">
      <div className="h-full w-11/12 lg:w-3/4 mx-auto flex justify-between items-center relative">
        <Link href="/#home" className="logo">
          <span>Vivekkk</span>
          <div className="beta">beta</div>
        </Link>

        <nav className="hidden lg:flex gap-5 xl:gap-10 font-semibold text-lg uppercase">
          <Link href="/#home" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="/#projects"
            className="hover:text-primary transition-colors">
            Projects
          </Link>
          {/* <Link
            href="/#experience"
            className="hover:text-primary transition-colors">
            Experience
          </Link> */}
          <Link
            href="/#contact"
            className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        {isNavOpen ? (
          <FaTimes
            className="lg:hidden text-3xl"
            onClick={() => setIsNavOpen(false)}
          />
        ) : (
          <FaBars
            className="lg:hidden text-3xl"
            onClick={() => setIsNavOpen(true)}
          />
        )}
      </div>

      {isNavOpen && (
        <nav className="flex flex-col items-start font-semibold text-lg uppercase absolute h-fit w-full top-20 left-0 bg-background">
          <Link
            href="/#home"
            onClick={() => setIsNavOpen(false)}
            className="text-foreground w-full py-3 border-b px-[4.15%] hover:bg-primary/10 active:text-primary hover:text-primary transition-all">
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsNavOpen(false)}
            className="text-foreground w-full py-3 border-b px-[4.15%] hover:bg-primary/10 active:text-primary hover:text-primary transition-all">
            About
          </Link>
          <Link
            href="/#projects"
            onClick={() => setIsNavOpen(false)}
            className="text-foreground w-full py-3 border-b px-[4.15%] hover:bg-primary/10 active:text-primary hover:text-primary transition-all">
            Projects
          </Link>
          {/* <Link
            href="/#experience"
            onClick={() => setIsNavOpen(false)}
            className="text-foreground w-full py-3 border-b px-[4.15%] hover:bg-primary/10 active:text-primary hover:text-primary transition-all">
            Experience
          </Link> */}
          <Link
            href="/#contact"
            onClick={() => setIsNavOpen(false)}
            className="text-foreground w-full py-3 border-b px-[4.15%] hover:bg-primary/10 active:text-primary hover:text-primary transition-all">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};
