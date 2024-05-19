'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

import Link from 'next/link';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-header h-20 w-full border-b bg-background text-foreground shadow-md">
      <div className="relative mx-auto flex h-full w-11/12 items-center justify-between lg:w-3/4">
        <Link href="/#home" className="logo">
          <span>Vivekkk</span>
          <div className="beta">beta</div>
        </Link>

        <nav className="hidden gap-5 text-lg font-semibold uppercase lg:flex xl:gap-10">
          <Link href="/#home" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/#about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="/#projects"
            className="transition-colors hover:text-primary"
          >
            Projects
          </Link>
          {/* <Link
            href="/#experience"
            className="hover:text-primary transition-colors">
            Experience
          </Link> */}
          <Link
            href="/#contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        {isNavOpen ? (
          <FaTimes
            className="text-3xl lg:hidden"
            onClick={() => setIsNavOpen(false)}
          />
        ) : (
          <FaBars
            className="text-3xl lg:hidden"
            onClick={() => setIsNavOpen(true)}
          />
        )}
      </div>

      {isNavOpen && (
        <nav className="absolute left-0 top-20 flex h-fit w-full flex-col items-start bg-background text-lg font-semibold uppercase">
          <Link
            href="/#home"
            onClick={() => setIsNavOpen(false)}
            className="w-full border-b px-[4.15%] py-3 text-foreground transition-all hover:bg-primary/10 hover:text-primary active:text-primary"
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsNavOpen(false)}
            className="w-full border-b px-[4.15%] py-3 text-foreground transition-all hover:bg-primary/10 hover:text-primary active:text-primary"
          >
            About
          </Link>
          <Link
            href="/#projects"
            onClick={() => setIsNavOpen(false)}
            className="w-full border-b px-[4.15%] py-3 text-foreground transition-all hover:bg-primary/10 hover:text-primary active:text-primary"
          >
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
            className="w-full border-b px-[4.15%] py-3 text-foreground transition-all hover:bg-primary/10 hover:text-primary active:text-primary"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};
