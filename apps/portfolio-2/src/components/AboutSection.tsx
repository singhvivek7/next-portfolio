'use client';

export function AboutSection() {
  return (
    <section className="about wrap" id="about">
      <div className="head reveal">
        <div className="kicker">
          <b>03</b> A bit about me
        </div>
        <div className="count">Engineer by craft. Curious by nature.</div>
      </div>

      <div className="about-grid">
        <div className="portrait reveal">
          <div className="silhouette" aria-hidden="true">
            <div className="headshape" />
            <div className="torso" />
          </div>
          <small>Vivek Kumar · Software Engineer</small>
        </div>

        <div className="reveal">
          <p className="lead">
            I enjoy turning complex problems into{' '}
            <span>simple, reliable systems.</span>
          </p>

          <p className="bio">
            I start from the backend: NestJS microservices, service boundaries,
            and the AWS infrastructure (EC2, RDS, Nginx, CI/CD) that keeps them
            running, then build the React/Next.js interfaces on top.
          </p>

          <p className="bio">
            I tend to own the parts of a system where correctness matters: payment
            reconciliation, recommendation ranking, and SSO — the details where a bug
            has real consequences. I enjoy understanding database query plans,
            distributed systems, clear abstractions, pragmatic engineering, and
            software that holds up in production.
          </p>

          <div className="about-bottom">
            <a
              className="link"
              href="https://linkedin.com/in/singhvivek7"
              target="_blank"
              rel="noreferrer"
            >
              More about my work <em>↗</em>
            </a>
            <div className="big">
              Let&apos;s<br />talk<span>.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
