'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { DATA } from '@/data/resume';
import CelestialHeroBg from '@/components/CelestialHeroBg';
import { ThemeToggle } from '@/components/ThemeToggle';
import { InteractiveTerminal } from '@/components/InteractiveTerminal';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F2F0EA] font-body overflow-x-hidden selection:bg-[#FFA94D] selection:text-[#0B0C0E]">
      {/* HEADER NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0C0E]/80 backdrop-blur-md border-b border-[#1B1C20]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="font-mono text-sm text-[#FFA94D] tracking-wider font-semibold hover:opacity-80 transition-opacity">
              {DATA.initials}.
            </a>
            <span className="hidden sm:inline-block text-xs font-mono text-[#66625D]">/</span>
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-[#9A9691]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Bengaluru, IN</span>
              {currentTime && <span className="text-[#66625D]">· {currentTime}</span>}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <ul
              className={`md:flex gap-8 font-mono text-xs text-[#9A9691] items-center ${
                mobileMenuOpen
                  ? 'flex flex-col absolute top-full left-0 right-0 bg-[#0B0C0E]/95 backdrop-blur-xl border-b border-[#232428] p-6 gap-5 shadow-2xl'
                  : 'hidden'
              }`}
            >
              <li>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2F0EA] transition-colors">
                  about
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2F0EA] transition-colors">
                  experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2F0EA] transition-colors">
                  projects
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2F0EA] transition-colors">
                  skills
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2F0EA] transition-colors">
                  contact
                </a>
              </li>
            </ul>

            <ThemeToggle />

            <button
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#232428] bg-[#131417] text-xs font-mono text-[#F2F0EA]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕ Close' : '☰ Menu'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 w-full overflow-hidden">
        <CelestialHeroBg variant={0} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full min-w-0 relative z-10">
          <div className="lg:col-span-6 min-w-0 space-y-6">

            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#F2F0EA] break-words">
              Engineering distributed systems that <span className="text-[#FFA94D]">scale & stay resilient</span>.
            </h1>

            <p className="text-sm sm:text-base text-[#9A9691] max-w-xl leading-relaxed font-body">
              <strong className="text-[#F2F0EA] font-semibold">{DATA.name}</strong> — {DATA.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
              <a
                href="#contact"
                className="bg-[#FFA94D] hover:bg-[#ffb968] text-[#1A1200] font-mono text-xs font-semibold px-6 py-3.5 rounded transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Get in touch →
              </a>
              <a
                href="#experience"
                className="border border-[#FFA94D] text-[#FFA94D] bg-[#FFA94D]/5 hover:bg-[#FFA94D] hover:text-[#1A1200] font-mono text-xs font-semibold px-6 py-3.5 rounded transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                View experience
              </a>
              <a
                href="https://github.com/singhvivek7"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#232428] text-[#9A9691] hover:text-[#F2F0EA] hover:border-[#9A9691] bg-[#131417] font-mono text-xs font-semibold px-6 py-3.5 rounded transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 min-w-0 w-full">
            <InteractiveTerminal />
          </div>
        </div>
      </section>



      {/* ABOUT & PHILOSOPHY SECTION */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs text-[#FFA94D] tracking-widest uppercase mb-2">// PHILOSOPHY</div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F2F0EA] tracking-tight">
              Backend correctness first.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-[#9A9691] text-sm sm:text-base leading-relaxed">
            <p className="text-[#F2F0EA] font-medium text-base sm:text-lg leading-relaxed">
              {DATA.about}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-lg border border-[#232428] bg-[#131417]/60 space-y-2">
                <div className="font-mono text-xs text-[#FFA94D] font-semibold">01. Service Boundaries</div>
                <p className="text-xs text-[#9A9691] leading-normal">
                  Decoupled microservices architecture designed around strict domain boundaries and idempotent data pipelines.
                </p>
              </div>
              <div className="p-5 rounded-lg border border-[#232428] bg-[#131417]/60 space-y-2">
                <div className="font-mono text-xs text-[#FFA94D] font-semibold">02. Observability & Infra</div>
                <p className="text-xs text-[#9A9691] leading-normal">
                  AWS cloud infrastructure (RDS, EC2, CloudFront, Nginx) paired with proactive logging and alert management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section id="experience" className="py-24 border-t border-[#1B1C20] bg-[#0E0F12]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs text-[#FFA94D] tracking-widest uppercase mb-2">// CAREER TIMELINE</div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F2F0EA] tracking-tight">
                Software Engineering Experience
              </h2>
            </div>
            <div className="font-mono text-xs text-[#66625D]">3+ Years Industry Experience</div>
          </div>

          <div className="space-y-8">
            {DATA.work.map((company, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-xl border border-[#232428] bg-[#131417]/80 hover:border-[#FFA94D]/30 transition-all space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#232428] pb-6">
                  <div className="flex items-center gap-4">
                    {company.logoUrl && (
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#0B0C0E] border border-[#232428] flex-shrink-0 flex items-center justify-center p-1">
                        <Image src={company.logoUrl} alt={company.company} width={40} height={40} className="object-contain" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#F2F0EA]">{company.company}</h3>
                      <div className="font-mono text-xs text-[#9A9691]">{company.location}</div>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-[#FFA94D] font-semibold bg-[#FFA94D]/10 px-3 py-1 rounded border border-[#FFA94D]/20 self-start sm:self-auto">
                    {company.totalPeriod}
                  </div>
                </div>

                <div className="space-y-6">
                  {company.roles.map((role, rIdx) => (
                    <div key={rIdx} className="space-y-3 pl-2 sm:pl-4 border-l-2 border-[#232428] hover:border-[#FFA94D] transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-mono text-sm font-bold text-[#F2F0EA]">{role.title}</h4>
                          {role.badge && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E0F12] text-emerald-400 border border-emerald-500/20">
                              {role.badge}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-xs text-[#66625D]">
                          {role.start} — {role.end}
                        </span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#9A9691]">
                        {role.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-[#FFA94D] mt-1">›</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-[#FFA94D] tracking-widest uppercase mb-2">// FEATURED WORK</div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F2F0EA] tracking-tight">
              Production Systems & Projects
            </h2>
          </div>
          <a href="https://github.com/singhvivek7" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[#FFA94D] hover:underline">
            View all on GitHub ↗
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATA.projects.map((proj, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-xl border border-[#232428] bg-[#131417]/80 hover:border-[#FFA94D]/50 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#66625D]">{proj.date}</span>
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-semibold text-[#FFA94D] hover:underline flex items-center gap-1"
                  >
                    Live App ↗
                  </a>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#F2F0EA]">{proj.title}</h3>
                <p className="text-xs sm:text-sm text-[#9A9691] leading-relaxed">{proj.description}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#232428]">
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono bg-[#0E0F12] p-2.5 rounded border border-[#232428]">
                  {proj.stats.map((s, sIdx) => (
                    <div key={sIdx}>
                      <div className="text-[#66625D] uppercase">{s.label}</div>
                      <div className="text-[#F2F0EA] font-semibold mt-0.5">{s.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="font-mono text-[10px] px-2 py-1 rounded bg-[#0E0F12] text-[#9A9691] border border-[#232428]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS & TECHNICAL STACK */}
      <section id="skills" className="py-24 border-t border-[#1B1C20] bg-[#0E0F12]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <div className="font-mono text-xs text-[#FFA94D] tracking-widest uppercase mb-2">// TECHNICAL STACK</div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F2F0EA] tracking-tight">
              Technologies & Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-[#232428] bg-[#131417]/80 space-y-4">
              <div className="font-mono text-xs text-[#FFA94D] font-semibold tracking-wider uppercase border-b border-[#232428] pb-3">
                01. Backend & APIs
              </div>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.backend.map((s, idx) => (
                  <span key={idx} className="font-mono text-xs px-3 py-1.5 rounded bg-[#0E0F12] text-[#F2F0EA] border border-[#232428]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#232428] bg-[#131417]/80 space-y-4">
              <div className="font-mono text-xs text-[#FFA94D] font-semibold tracking-wider uppercase border-b border-[#232428] pb-3">
                02. Cloud & DevOps
              </div>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.devops.map((s, idx) => (
                  <span key={idx} className="font-mono text-xs px-3 py-1.5 rounded bg-[#0E0F12] text-[#F2F0EA] border border-[#232428]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#232428] bg-[#131417]/80 space-y-4">
              <div className="font-mono text-xs text-[#FFA94D] font-semibold tracking-wider uppercase border-b border-[#232428] pb-3">
                03. Frontend & Interfaces
              </div>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.frontend.map((s, idx) => (
                  <span key={idx} className="font-mono text-xs px-3 py-1.5 rounded bg-[#0E0F12] text-[#F2F0EA] border border-[#232428]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & FOOTER SECTION */}
      <footer id="contact" className="py-24 border-t border-[#1B1C20] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="font-mono text-xs text-[#FFA94D] tracking-widest uppercase">// GET IN TOUCH</div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F2F0EA] tracking-tight">
              Let's build something scalable together.
            </h2>
            <p className="text-sm text-[#9A9691] max-w-lg">
              Open for software engineering opportunities, backend microservices architecture consulting, and high-performance system builds.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="bg-[#FFA94D] hover:bg-[#ffb968] text-[#1A1200] font-mono text-xs font-bold px-8 py-4 rounded transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Send an Email ↗
            </a>
            <div className="font-mono text-xs text-[#66625D]">{DATA.contact.email}</div>
          </div>
        </div>

        <div className="pt-12 border-t border-[#232428] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9A9691]">
          <div className="flex flex-wrap gap-6">
            {DATA.contact.social.map((s, idx) => (
              <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA94D] transition-colors">
                {s.name}
              </a>
            ))}
          </div>
          <div className="text-[#66625D]">© {new Date().getFullYear()} Vivek Kumar. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
