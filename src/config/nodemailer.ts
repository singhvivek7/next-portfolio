import nodemailer from 'nodemailer';

import { appConfig } from '@/config/app.config';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: appConfig.emailUser,
    pass: appConfig.emailPass
  }
});
