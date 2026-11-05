'use client';

import { ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="contact wrap" id="contact">
      <div className="head reveal">
        <div className="kicker">
          <b>04</b> Get in touch
        </div>
        <div className="count">Have a good one in mind?</div>
      </div>

      <div className="contact-main reveal">
        <h2>
          Let&apos;s make<br />
          it <span>work.</span>
        </h2>

        <div className="contact-copy">
          Open to interesting engineering conversations and opportunities.
          <br />
          <a href="mailto:singhvivek1999@yahoo.com">
            singhvivek1999@yahoo.com <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
