'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import { Button, toast } from '@/components';
import { cn } from '@/utils/utils';
import { emailRegex } from '@/utils/regex';
import { postReq } from '@/config/request';
import { endpoints } from '@/utils/endpoints';
import { appConfig } from '@/config/app.config';

interface IFormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: initialFormData,
  });

  const [isLoading, setIsLoading] = useState(false);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit = async (data: IFormData) => {
    toast({
      message: 'Sending message...',
      type: 'info',
      description: 'Please wait...',
    });
    setIsLoading(true);
    const captcha = await captchaRef.current?.executeAsync();
    try {
      const response = await postReq(endpoints.contactUs, { ...data, captcha });
      toast({
        message: 'Message sent.',
        type: 'success',
        description: response.message,
      });
      reset();
    } catch (err: AnyType) {
      toast({
        message: 'Something went wrong.',
        type: 'error',
        description: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="w-11/12 lg:w-3/4 flex flex-col gap-5 px-8 sm:px-12 py-10 bg-white max-w-[700px] mx-auto mt-16 rounded-lg shadow-lg">
      <div className="flex flex-col justify-center gap-2">
        <label className="text-tertiary w-fit text-lg" htmlFor="name">
          Name:
        </label>
        <input
          className={cn(
            'px-5 py-3 focus-visible:outline-primary rounded-md border text-lg border-tertiary/20 bg-tertiary/5 text-tertiary placeholder:text-tertiary/50',
            {
              'border-red-500': errors.name?.message,
            }
          )}
          type="text"
          id="name"
          placeholder="Enter your name"
          autoComplete="off"
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 4,
              message: 'Name must be at least 4 characters long',
            },
          })}
        />
        <p className="text-red-500 h-5">{errors.name?.message}</p>
      </div>

      <div className="flex flex-col justify-center gap-2">
        <label className="text-tertiary w-fit text-lg" htmlFor="email">
          Email:
        </label>
        <input
          className={cn(
            'px-5 py-3 focus-visible:outline-primary rounded-md border text-lg border-tertiary/20 bg-tertiary/5 text-tertiary placeholder:text-tertiary/50',
            {
              'border-red-500': errors.email?.message,
            }
          )}
          type="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="off"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: emailRegex,
              message: 'Please enter a valid email',
            },
          })}
        />

        <p className="text-red-500 h-5">{errors.email?.message}</p>
      </div>

      <div className="flex flex-col justify-center gap-2">
        <label className="text-tertiary w-fit text-lg" htmlFor="message">
          Message:
        </label>
        <textarea
          className={cn(
            'px-5 py-3 focus-visible:outline-primary rounded-md border text-lg border-tertiary/20 bg-tertiary/5 text-tertiary placeholder:text-tertiary/50 resize-none',
            {
              'border-red-500': errors.message?.message,
            }
          )}
          id="message"
          placeholder="Enter your message"
          rows={7}
          autoComplete="off"
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 5,
              message: 'Message must be at least 5 characters long',
            },
          })}
        />

        <p className="text-red-500 h-10 sm:h-5">{errors.message?.message}</p>
      </div>

      <ReCAPTCHA
        sitekey={appConfig.recaptchaSiteKey}
        size="invisible"
        ref={captchaRef}
      />

      <Button
        variant="secondary"
        type="submit"
        className="capitalize self-end"
        disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};
