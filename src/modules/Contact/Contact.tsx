import { SectionHeader } from '@/components';
import { ContactForm } from './ContactForm';

import './Contact.css';

export const Contact = () => {
  return (
    <section id="contact" className="contact-wrapper">
      <div className="mx-auto w-11/12 lg:w-3/4">
        <SectionHeader
          title="Contact"
          description="Get in touch with me."
          hrClassName="bg-white"
          headingClassName="text-white"
        />
      </div>
      <ContactForm />
    </section>
  );
};
