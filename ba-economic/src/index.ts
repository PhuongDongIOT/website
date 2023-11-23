import { Elysia } from 'elysia';

import { setupApp } from './app.module';
import { env } from './config.module';

const app = new Elysia()
  .use(setupApp)
  .get('/', ({ set }: any) => {
    set.redirect = '/swagger'
  })
  .listen(env.APP_PORT ?? 3001);

console.log(
  `🦊 Elysia is running! Access Swagger UI at http://${app.server?.hostname}:${app.server?.port}/swagger`,
);

export default app
export type App = typeof app
