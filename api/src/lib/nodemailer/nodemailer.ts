import nodemailer from 'nodemailer';

// https://blog.devgenius.io/correct-way-in-setting-up-nodemailer-for-email-service-946f6bfd73e8
interface mailProps {
  receivers: string[];
  from: string;
  subject: string;
  htmlBody: string;
}

export async function sendMail({
  receivers,
  from,
  subject,
  htmlBody,
}: mailProps) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_ADDRESS,
      clientId: process.env.GOOGLE_CLIENT_ID_MAIL,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_MAIL,
      accessToken: process.env.GOOGLE_ACCESS_TOKEN,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    },
  });

  await transporter.sendMail({
    from: `"${from}" ${process.env.GMAIL_ADDRESS}`,
    to: receivers.join(','),
    subject,
    html: htmlBody,
  });
}
