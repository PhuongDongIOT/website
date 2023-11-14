import { Elysia, t as T } from 'elysia';
import { cors } from "@elysiajs/cors";
import { compile as c, trpc } from "@elysiajs/trpc";;
import { initTRPC } from "@trpc/server";
import { staticPlugin } from '@elysiajs/static';
import { Type } from '@sinclair/typebox';
import { swagger } from '@elysiajs/swagger';

import { handleTrace } from './trace.module';
import { 
  usersPlugin, 
  chatsPlugin, 
  wsSocketsPlugin, 
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
    .trace(handleTrace)
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
    .use(wsSocketsPlugin)
    .group('/api', (app) => app
      .use(usersPlugin)
      .use(filesPlugin))
    .group('/ws', (app) => app.use(chatsPlugin))
    .group('/trc', (app) => app.use(trpc(router)))
};