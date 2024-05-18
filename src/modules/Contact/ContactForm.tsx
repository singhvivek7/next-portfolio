'use client';

import { useState, FormEventHandler } from 'react';

import { Button } from '@/components';
import { cn } from '@/utils/utils';
import { validateForm } from '@/utils/validate';

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(initialFormData);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const errors = validateForm(formData);
    setError({ ...error, [name]: errors[name as keyof typeof errors] });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const errors = validateForm(formData);
    setError(() => errors);

    if (Object.values(errors).some(err => err)) return;

    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 px-8 sm:px-12 py-10 bg-white max-w-[700px] mx-auto mt-16 rounded-lg shadow-lg">
      <div className="flex flex-col justify-center gap-2">
        <label className="text-tertiary w-fit text-lg" htmlFor="name">
          Name:
        </label>
        <input
          className={cn(
            'px-5 py-3 focus-visible:outline-primary rounded-md border text-lg border-tertiary/20 bg-tertiary/5 text-tertiary placeholder:text-tertiary/50',
            {
              'border-red-500': error.name,
            }
          )}
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          value={formData.name}
          autoComplete="off"
        />
        <p className="text-red-500 capitalize h-5">{error.name}</p>
      </div>

      <div className="flex flex-col justify-center gap-2">
        <label className="text-tertiary w-fit text-lg" htmlFor="email">
          Email:
        </label>
        <input
          className={cn(
            'px-5 py-3 focus-visible:outline-primary rounded-md border text-lg border-tertiary/20 bg-tertiary/5 text-tertiary placeholder:text-tertiary/50',
            {
              'border-red-500': error.email,
            }
          )}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.email}
          autoComplete="off"
        />

        <p className="text-red-500 capitalize h-5">{error.email}</p>
      </div>

      <div className="flex flex-col justify-center gap-2">
        <label className="text-tertiary w-fit text-lg" htmlFor="message">
          Message:
        </label>
        <textarea
          className={cn(
            'px-5 py-3 focus-visible:outline-primary rounded-md border text-lg border-tertiary/20 bg-tertiary/5 text-tertiary placeholder:text-tertiary/50 resize-none',
            {
              'border-red-500': error.message,
            }
          )}
          id="message"
          name="message"
          placeholder="Enter your message"
          rows={7}
          onChange={handleChange}
          value={formData.message}
          autoComplete="off"
        />

        <p className="text-red-500 capitalize h-10 sm:h-5">{error.message}</p>
      </div>

      <Button variant="secondary" type="submit" className="capitalize self-end">
        Submit
      </Button>
    </form>
  );
};
