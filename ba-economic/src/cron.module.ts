import { Elysia } from 'elysia';
import { cron } from '@elysiajs/cron';
import { logger } from '~utils/logger.utils';

const cronPlugin = new Elysia()    
    .use(
      cron({
          name: 'heartbeat',
          pattern: '*/10 * * * * *',
          run() {
            logger.ok('Heartbeat')
          }
      })
    )

export {
    cronPlugin,
};