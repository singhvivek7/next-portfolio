import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.trim().length < 1) {
    return 'Email is required';
  }
  if (!re.test(String(email).toLowerCase())) {
    return 'Please enter a valid email';
  }
};

export const validateString = (name: string, str: string) => {
  if (str.trim().length < 1) {
    return `${name} is required`;
  } else if (str.trim().length < 4) {
    return `${name} must be at least 4 characters long`;
  }
};
