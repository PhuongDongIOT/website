import { Elysia, t as T } from 'elysia';
import { cors } from "@elysiajs/cors";
import { cookie } from '@elysiajs/cookie'
import { jwt } from '@elysiajs/jwt'
import { compile as c, trpc } from "@elysiajs/trpc";
import { swagger } from '@elysiajs/swagger';
import { bearer } from '@elysiajs/bearer'
import { initTRPC } from "@trpc/server";
import { staticPlugin } from '@elysiajs/static';
import { Type } from '@sinclair/typebox';

import { cronPlugin } from './cron.plugin';
import { tracePlugin } from './trace.plugin';
import { 
  usersPlugin, 
  chatsPlugin, 
  wsSocketsPlugin,
  graphqlsPlugin, 
  filesPlugin } from '~modules/index';
import { title, version, description } from '../package.json';
import {
  AuthenticationError,
  AuthorizationError,
  BadRequestError,
  ERROR_CODE_STATUS_MAP,
} from './errors';


const t = initTRPC.create();
const p = t.procedure;

const router = t.router({
  greet: p

    // 💡 Using Zod
    //.input(z.string())
    // 💡 Using Elysia's T
    .input(c(Type.String()))
    .query(({ input }) => input),
});

export type Router = typeof router;

export const setupApp = () => {
  return new Elysia()
    .use(tracePlugin)
    .error({
      AUTHENTICATION: AuthenticationError,
      AUTHORIZATION: AuthorizationError,
      BAD_REQUEST: BadRequestError,
    })
    .onError(({ error, code, set }) => {
      set.status = ERROR_CODE_STATUS_MAP.get(code);
      const errorType = 'type' in error ? error.type : 'internal';
      return { errors: { [errorType]: error.message } };
    })
    .use(
      swagger({
        documentation: {
          info: { title, version, description },
        },
        exclude: ['/'],
      }),
    )
    .use(staticPlugin())
    .use(cors())
    .use(cookie())
    .use(bearer())
    .use(
      jwt({
          name: 'jwt',
          secret: 'Fischl von Luftschloss Narfidort'
      })
    )
    .use(cronPlugin)
    .use(graphqlsPlugin)
    .use(wsSocketsPlugin)
    .group('/api', (app) => app
      .use(usersPlugin)
      .use(filesPlugin))
    .group('/ws', (app) => app.use(chatsPlugin))
    .group('/trc', (app) => app.use(trpc(router)))
};