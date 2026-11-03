'use client';

import { useState, useEffect } from 'react';

export function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    setTheme(isLight ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('vivek-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('vivek-theme', 'dark');
    }
  };

  return (
    <header className="top wrap">
      <a className="logo" href="#home">
        vivek<b>.</b>
      </a>

      <nav className="top-nav" aria-label="Main Navigation">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
