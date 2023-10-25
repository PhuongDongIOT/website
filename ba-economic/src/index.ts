import Elysia from "elysia";
import { auth } from "~modules/auth";
import { articles } from "./modules/articles";
import { swagger } from "@elysiajs/swagger";
import { cookie } from "@elysiajs/cookie";
import { jwt } from "@elysiajs/jwt";
import adapter from './adapter';

const App = new Elysia()
  .use(swagger())
  .group("/api", (app) => adapter(app)
  )
  .listen(8080);
console.log(
  `🦊 Elysia is running at ${App.server?.hostname}:${App.server?.port}`
);

export type ElysiaApp = typeof App

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