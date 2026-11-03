'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useGsapAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      document.querySelectorAll<HTMLElement>('.reveal, .hero-content, .top').forEach((e) => {
        e.style.opacity = '1';
        e.style.transform = 'none';
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Use gsap.context for React 18 Strict Mode safety and proper cleanup
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.top',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      // Hero content entrance using explicit fromTo
      gsap.fromTo(
        '.hero .reveal',
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.1,
        }
      );

      // Scroll reveals on subsequent sections
      const targets = gsap.utils.toArray<HTMLElement>(
        '.head, .project, .role, .portrait, .about-grid > div, .contact-main'
      );

      targets.forEach((el) => {
        // Skip elements inside hero
        if (el.closest('.hero')) return;

        gsap.fromTo(
          el,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      // Subtle parallax scrub on hero text
      gsap.to('.stroke', {
        x: 18,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.hero-content', {
        y: 80,
        opacity: 0.35,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => {
      ctx.revert(); // Perfectly cleans up all GSAP animations and ScrollTriggers
    };
  }, []);
}

export default useGsapAnimations;
