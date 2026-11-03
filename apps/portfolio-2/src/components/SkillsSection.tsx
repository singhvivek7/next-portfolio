'use client';

export function SkillsSection() {
  return (
    <section className="skills wrap" id="skills">
      <div className="head reveal">
        <div className="kicker">
          <b>06</b> Toolkit
        </div>
        <div className="count">Tools I use to make things work</div>
      </div>

      <div className="skill-grid reveal">
        <div>
          <h3>Backend &amp; Data</h3>
          <p>
            NestJS · Node.js · Express.js · Python · Go · REST APIs · Microservices
            · PostgreSQL · MongoDB · Redis
          </p>
        </div>
        <div>
          <h3>Frontend</h3>
          <p>
            React · Next.js · TypeScript · TailwindCSS · Redux Toolkit · React
            Query
          </p>
        </div>
        <div>
          <h3>Cloud &amp; DevOps</h3>
          <p>
            AWS (EC2, RDS, Route 53, S3, CloudFront) · Docker · Nginx · Git ·
            CI/CD · Sentry
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

