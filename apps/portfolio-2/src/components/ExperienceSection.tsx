'use client';

export function ExperienceSection() {
  return (
    <section className="experience wrap" id="experience">
      <div className="head reveal">
        <div className="kicker">
          <b>02</b> THE JOURNEY · EXPERIENCE
        </div>
        <div className="count">Building, learning, improving</div>
      </div>

      <div className="timeline">
        {/* Traya Health */}
        <div className="role reveal">
          <i aria-hidden="true" />
          <div>
            <h3>
              Traya Health{' '}
              <small className="role-location">Bengaluru, Karnataka</small>
            </h3>

            <p>
              <strong>Software Development Engineer II</strong> · Recommendations
              Platform · APR 2025 — PRESENT
            </p>
            <ul>
              <li>
                Own and scale the core recommendations microservice in Node.js,
                Express.js, and NestJS, powering personalized healthcare experiences
                across mobile app, web, and Shopify.
              </li>
              <li>
                Improve database query performance, asynchronous workflows, and
                service resource utilization to maintain sub-100ms response times.
              </li>
              <li>
                Work across API design, CMS integration, observability, and
                production reliability under high concurrency.
              </li>
            </ul>

            <p>
              <strong>Software Development Engineer I</strong> · Full-stack
              Development · JUN 2024 — APR 2025
            </p>
            <ul>
              <li>
                Architected a rules engine, intelligent Redis caching layer, and
                payload optimization, reducing result page response latency from
                ~500ms to &lt; 100ms.
              </li>
              <li>
                Engineered the diagnostic recommendation pipeline processing user
                input data to automatically generate personalized treatment plans.
              </li>
              <li>
                Built responsive NestJS admin services and database schemas with
                robust input validation and audit logging.
              </li>
            </ul>

            <div className="tags">
              <span>Node.js</span>
              <span>NestJS</span>
              <span>Express.js</span>
              <span>PostgreSQL</span>
              <span>Redis</span>
              <span>Microservices</span>
              <span>REST APIs</span>
            </div>
          </div>
          <div className="date">JUN 2024 — PRESENT</div>
        </div>

        {/* PayBolt */}
        <div className="role reveal">
          <i aria-hidden="true" />
          <div>
            <h3>
              PayBolt Technologies{' '}
              <small className="role-location">Bengaluru, Karnataka</small>
            </h3>
            <p>
              <strong>Software Development Engineer I</strong> · Payment
              Microservices · JUL 2024 — JUN 2025
            </p>
            <ul>
              <li>
                Architected high-throughput payment microservices for core checkout
                workflows, including UPI, QR payments, payment links, and connected
                banking.
              </li>
              <li>
                Designed PostgreSQL transaction persistence layers with ACID
                guarantees, collaborating with DevOps for high availability on AWS.
              </li>
              <li>
                Built merchant reconciliation dashboards and real-time transaction
                monitoring tools in Next.js/TypeScript.
              </li>
            </ul>
            <div className="tags">
              <span>PostgreSQL</span>
              <span>AWS</span>
              <span>Payment APIs</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>ACID</span>
            </div>
          </div>
          <div className="date">JUL 2024 — JUN 2025</div>
        </div>

        {/* Webelight */}
        <div className="role reveal">
          <i aria-hidden="true" />
          <div>
            <h3>
              Webelight Solutions{' '}
              <small className="role-location">Ahmedabad, Gujarat</small>
            </h3>
            <p>
              <strong>Jr. React.js Developer</strong> · Frontend Systems · SEP 2023 —
              JUL 2024
            </p>
            <ul>
              <li>
                Shipped 3+ production web applications using Next.js, React Hooks,
                SASS, and Webpack, mentoring 3 junior developers.
              </li>
              <li>
                Established reusable component libraries, Sentry error monitoring, and
                Git workflow standards.
              </li>
              <li>
                Optimized client-side rendering performance, state management, and
                asset delivery.
              </li>
            </ul>
            <div className="tags">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>SASS</span>
              <span>Webpack</span>
              <span>Sentry</span>
            </div>
          </div>
          <div className="date">SEP 2023 — JUL 2024</div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
