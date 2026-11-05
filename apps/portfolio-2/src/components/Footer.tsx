'use client';

import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="wrap">
      <a className="logo" href="#home">
        vivek<b>.</b>
      </a>

      <nav className="social" aria-label="Social media links">
        <a
          href="https://github.com/singhvivek7"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowUpRight size={11} aria-hidden="true" />
        </a>
        <a
          href="https://linkedin.com/in/singhvivek7"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <ArrowUpRight size={11} aria-hidden="true" />
        </a>
        <a href="https://x.com/V1V3K__" target="_blank" rel="noreferrer">
          X <ArrowUpRight size={11} aria-hidden="true" />
        </a>
        <a
          href="https://leetcode.com/singhvivek7"
          target="_blank"
          rel="noreferrer"
        >
          LeetCode <ArrowUpRight size={11} aria-hidden="true" />
        </a>
        <a
          href="https://www.vivekkk.in"
          target="_blank"
          rel="noreferrer"
        >
          Live site <ArrowUpRight size={11} aria-hidden="true" />
        </a>
      </nav>

      <span>© {currentYear} Vivek Kumar</span>
    </footer>
  );
}

export default Footer;
