export const appConfig = {
  emailFrom: process.env.EMAIL_FROM ?? '',
  emailTo: process.env.EMAIL_TO ?? '',
  emailUser: process.env.EMAIL_USER ?? '',
  emailPass: process.env.EMAIL_PASS ?? '',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? '',
  recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '',
  recaptchaSecret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET ?? ''
};
