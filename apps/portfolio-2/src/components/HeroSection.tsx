'use client';

import { ArrowUpRight } from 'lucide-react';
import { ThreeCanvas } from './ThreeCanvas';

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <ThreeCanvas />

      <div className="wrap hero-content">
        <div className="eyebrow reveal">
          Full-Stack Engineer · SDE II @ Traya Health
        </div>

        <div className="mono hero-note reveal">
          v26
        </div>

        <h1>
          <span className="reveal">Vivek</span>
          <span className="stroke reveal">Kumar</span>
        </h1>

        <div className="hero-bottom reveal">
          <p className="intro">
            I build things that <strong>scale.</strong> Reliable backend systems,
            thoughtful products, and experiences that solve real problems.
          </p>

          <div className="hero-links">
            <a className="link" href="#projects">
              Explore my work <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              className="link"
              href="https://github.com/singhvivek7"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="hero-code" aria-label="Code preview">
          <div className="code-head">
            <span>recommendation.service.ts</span>
            <i>● ● ●</i>
          </div>
          <pre>
            <span className="c-blue">async function</span>{' '}
            <span className="c-green">getRecommendations</span>() &#123;{'\n'}
            {'  '}<span className="c-yellow">const</span> tenant ={' '}
            <span className="c-green">resolveTenant</span>();{'\n'}
            {'  '}<span className="c-yellow">const</span> context ={' '}
            <span className="c-blue">await</span> loadContext(tenant);{'\n'}
            {'  '}<span className="c-yellow">return</span> rankCandidates(context);{'\n'}
            &#125;
          </pre>
          <div className="code-foot">✓ tests passing&nbsp;&nbsp; · &nbsp;deploy ready</div>
        </aside>
      </div>

      <div className="wrap hero-footer-bar" aria-hidden="true">
        <div className="scroll">Scroll to explore</div>
        <div className="hero-no">
          01 <b>/</b> 05
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
