'use client';

export function MetricsSection() {
  return (
    <section className="metrics wrap">
      <div className="head reveal">
        <div className="kicker">
          <b>05</b> At a glance
        </div>
        <div className="count">How I approach engineering</div>
      </div>

      <div className="metric-grid reveal">
        <div>
          <strong>3+ years</strong>
          <span>Building and shipping software</span>
        </div>
        <div>
          <strong>Backend first</strong>
          <span>APIs, data and distributed systems</span>
        </div>
        <div>
          <strong>Full-stack</strong>
          <span>From product UI to infrastructure</span>
        </div>
        <div>
          <strong>Production</strong>
          <span>Ownership beyond the code</span>
        </div>
      </div>
    </section>
  );
}

export default MetricsSection;
