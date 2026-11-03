'use client';

export function ProjectsSection() {
  return (
    <section className="work wrap" id="projects">
      <div className="head reveal">
        <div className="kicker">
          <b>01</b> SELECTED WORK
        </div>
        <div className="count">A few things I&apos;ve built ↘</div>
      </div>

      <div className="grid">
        {/* NextLink */}
        <article className="project reveal">
          <div className="visual">
            <div className="window">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <div className="mockname">
                Next<span>Link</span>
              </div>
              <div className="bar" />
              <div className="bar s" />
              <div className="chart">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          <div className="meta">
            <div>
              <div className="num">01 / PRODUCT</div>
              <h3>NextLink</h3>
              <p>
                A link management platform to shorten, organize and track links with
                analytics, custom expiration rules, and edge redirects.
              </p>
              <div className="tags">
                <span>Next.js</span>
                <span>Bun.js</span>
                <span>MongoDB</span>
                <span>Prisma</span>
                <span>TypeScript</span>
              </div>
              <div className="project-stats">
                <span>Edge Cached</span>
                <span>P50 &lt; 10ms</span>
                <span>Vercel Edge</span>
                <small>JUL 2025 — PRESENT</small>
              </div>
            </div>

            <a
              className="round"
              href="https://link.vivekkk.in"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit NextLink live site"
            >
              ↗
            </a>
          </div>
        </article>

        {/* SettleUp */}
        <article className="project reveal">
          <div className="visual">
            <div className="orb" />
          </div>

          <div className="meta">
            <div>
              <div className="num">02 / PRODUCT</div>
              <h3>SettleUp</h3>
              <p>
                A group expense-sharing and debt-simplification platform featuring an
                immutable double-entry ledger, graph minimization algorithms, and
                direct UPI settlements.
              </p>
              <div className="tags">
                <span>Next.js</span>
                <span>Prisma</span>
                <span>MongoDB</span>
                <span>NextAuth</span>
                <span>TailwindCSS</span>
                <span>TypeScript</span>
              </div>
              <div className="project-stats">
                <span>Graph Simplified</span>
                <span>Double-Entry Ledger</span>
                <span>Razorpay / UPI</span>
                <small>OCT 2025 — PRESENT</small>
              </div>
            </div>

            <a
              className="round"
              href="https://settleup.vivekkk.in"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit SettleUp live site"
            >
              ↗
            </a>
          </div>
        </article>

        {/* RenderPDF */}
        <article className="project reveal">
          <div className="visual">
            <div className="window">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <div className="mockname">
                Render<span>PDF</span>
              </div>
              <div className="bar" />
              <div className="bar s" />
              <div
                style={{
                  height: '85px',
                  border: '1px solid #c8f16955',
                  marginTop: '20px',
                  padding: '10px',
                }}
              >
                <div className="bar" />
                <div className="bar s" />
              </div>
            </div>
          </div>

          <div className="meta">
            <div>
              <div className="num">03 / DEVELOPER TOOL</div>
              <h3>RenderPDF</h3>
              <p>
                An API to render HTML into PDFs, with support for templates, headers,
                footers and custom styling.
              </p>
              <div className="tags">
                <span>Next.js</span>
                <span>Node.js</span>
                <span>Puppeteer</span>
                <span>TypeScript</span>
                <span>TailwindCSS</span>
              </div>
              <div className="project-stats">
                <span>Worker Pool</span>
                <span>Render &lt; 250ms</span>
                <span>Vercel Cloud</span>
                <small>FEB 2026 — PRESENT</small>
              </div>
            </div>

            <a
              className="round"
              href="https://pdf.vivekkk.in"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit RenderPDF live site"
            >
              ↗
            </a>
          </div>
        </article>

        {/* Recommendations */}
        <article className="project reveal">
          <div className="visual">
            <div
              className="orb"
              style={{ borderRadius: '50%', width: '125px', height: '125px' }}
            />
          </div>

          <div className="meta">
            <div>
              <div className="num">04 / ENGINEERING</div>
              <h3>Recommendations</h3>
              <p>
                Multi-tenant recommendation infrastructure powering personalized
                product experiences across mobile apps and web.
              </p>
              <div className="tags">
                <span>NestJS</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>Redis</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <a
              className="round"
              href="https://github.com/singhvivek7"
              target="_blank"
              rel="noreferrer"
              aria-label="View Recommendations on GitHub"
            >
              ↗
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectsSection;
