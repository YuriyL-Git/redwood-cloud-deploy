import type { APIGatewayEvent, Context } from 'aws-lambda';

import { logger } from 'src/lib/logger';

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  console.log('event', event.headers.cookie);
  console.log('context', _context);
  logger.info(`${event.httpMethod} ${event.path}: serverTime function`);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        event,
        _context,
      },
    }),
  };
};
