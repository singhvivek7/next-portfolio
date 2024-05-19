import { NextRequest, NextResponse } from 'next/server';

import { appConfig } from '@/config/app.config';
import { transporter } from '@/config/nodemailer';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { name, email, message, captcha } = body;

  const verifyEndpoint = 'https://www.google.com/recaptcha/api/siteverify';

  const captchaResponse = await fetch(verifyEndpoint, {
    method: 'POST',
    headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: appConfig.recaptchaSecret,
      response: captcha,
    }),
  }).then(res => res.json());

  if (!captchaResponse.success) {
    return NextResponse.json(
      {
        success: false,
        message: captchaResponse['error-codes'][0],
      },
      {
        status: 500,
      }
    );
  }

  if (!captcha) {
    return NextResponse.json(
      {
        success: false,
        message: 'Please complete the captcha',
      },
      {
        status: 400,
      }
    );
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        success: false,
        message: 'Please fill all the fields',
      },
      {
        status: 400,
      }
    );
  }
  try {
    await transporter.sendMail({
      from: 'Portfolio Message <' + appConfig.emailFrom + '>',
      to: appConfig.emailTo,
      subject: `[Portfolio] Contact Us - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          'Your message has been sent securely, we will get back to you shortly.',
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong, please try again later.',
      },
      {
        status: 500,
      }
    );
  }
};
