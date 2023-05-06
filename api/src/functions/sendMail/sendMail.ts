import type { APIGatewayEvent, Context } from 'aws-lambda';

import { logger } from 'src/lib/logger';
import { sendMail } from 'src/services/nodemailer/nodemailer';

export const handler = async (event: APIGatewayEvent, context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: sendMail function`);

  try {
    await sendMail({
      from: 'Redwood test',
      receivers: ['1malak16@gmail.com'],
      subject: 'E-mail verification',
      htmlBody: '<b>Hello world TEST HTML?</b>',
    });
  } catch (error) {
    return {
      statusCode: 502,
      body: {
        error,
      },
    };
  }

  return {
    statusCode: 200,
    body: {
      result: 'Verification e-mail is sent',
    },
  };
};
