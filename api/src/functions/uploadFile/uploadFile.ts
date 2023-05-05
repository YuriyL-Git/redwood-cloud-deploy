import type { APIGatewayEvent, Context } from 'aws-lambda';

import { authApi } from 'src/lib/auth';
import { logger } from 'src/lib/logger';

export const handler = async (event: APIGatewayEvent, context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: uploadFile function`);

  const { user } = await authApi(event);
  console.log('user ->', user);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      time: new Date().toDateString(),
    },
  };
};
