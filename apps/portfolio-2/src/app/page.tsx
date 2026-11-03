'use client';

import { GlowCursor } from '@/components/GlowCursor';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { AboutSection } from '@/components/AboutSection';
import { MetricsSection } from '@/components/MetricsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

export default function Home() {
  useGsapAnimations();

  return (
    <>
      <GlowCursor />
      <Navbar />

      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <MetricsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
