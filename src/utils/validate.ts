import { validateEmail, validateString } from './utils';

export const validateForm = ({
  email,
  message,
  name,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const nameError = validateString('name', name.trim());
  const emailError = validateEmail(email.trim());
  const messageError = validateString('message', message.trim());

  return {
    name: nameError || '',
    email: emailError || '',
    message: messageError || '',
  };
};
