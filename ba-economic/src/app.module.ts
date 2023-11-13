import { compile as c, trpc } from "@elysiajs/trpc";
import { initTRPC } from "@trpc/server";
import { Elysia, t as T } from 'elysia';
import { staticPlugin } from '@elysiajs/static'
import { Type } from '@sinclair/typebox';
import { swagger } from '@elysiajs/swagger';
import { title, version, description } from '../package.json';
import {
  AuthenticationError,
  AuthorizationError,
  BadRequestError,
  ERROR_CODE_STATUS_MAP,
} from './errors';

import { usersPlugin } from '~modules/index';

// the file name is in the spirit of NestJS, where app module is the device in charge of putting together all the pieces of the app
// see: https://docs.nestjs.com/modules
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

/**
 * Add all plugins to the app
 */
export const setupApp = () => {
  return new Elysia()
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
    .group('/api', (app) => app.use(usersPlugin))
    .group('/trc', (app) => app.use(trpc(router)));
};