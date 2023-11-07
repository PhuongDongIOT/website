import { Elysia } from 'elysia';
import { setupApp } from './app.module';

const app = new Elysia()
  .use(setupApp)
  .get('/', ({ set }: any) => {
    set.redirect = '/swagger';
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running! Access Swagger UI at http://${app.server?.hostname}:${app.server?.port}/swagger`,
);

// server.ts
// import { Elysia, t } from 'elysia'

// const app = new Elysia()
//     .get('/', () => 'Hi Elysia')
//     .get('/id/:id', ({ params: { id } }) => id)
//     .post('/mirror', ({ body }) => body, {
//         body: t.Object({
//             id: t.Number(),
//             name: t.String()
//         })
//     })
//     .listen(8080)

// export type App = typeof app