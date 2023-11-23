import { Elysia, t as T } from 'elysia';
import { cors } from "@elysiajs/cors";
import { cookie } from '@elysiajs/cookie';
import { compile as c, trpc } from "@elysiajs/trpc";
import { swagger } from '@elysiajs/swagger';
import { bearer } from '@elysiajs/bearer'
import { serverTiming } from '@elysiajs/server-timing'

import { initTRPC } from "@trpc/server";
import { staticPlugin } from '@elysiajs/static';
import { Type } from '@sinclair/typebox';

import { cronPlugin } from './cron.plugin';
import { tracePlugin } from './trace.plugin';
import { jwtPlugin } from './jwt.plugin';
import { 
  usersPlugin, 
  chatsPlugin, 
  wsSocketsPlugin,
  graphqlsPlugin, 
  filesPlugin } from '~modules/index';
import { title, version, description } from '../package.json';
import { logger } from '~utils/logger.utils'
import { useCheckRoute } from '~utils/route.auth';
import { useHandleEncodeAuth } from '~utils/jwt.auth';

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
    .use(serverTiming())
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
    .use(jwtPlugin)
    .derive(async ({ jwt, request: { headers } }) => {
        const authorization: any = headers.get('Authorization');
        const decodedAuth: any = await useHandleEncodeAuth(jwt, authorization);
        return decodedAuth;
    })
    .on('beforeHandle', ({ request: { url }, authorization }: any) => {
      const midlewareCheckRoute = useCheckRoute(url, authorization);
      if(!midlewareCheckRoute) {
        return {
          authorization,
        }
      }
    })
    .use(cronPlugin)
    .use(graphqlsPlugin)
    .use(wsSocketsPlugin)
    .group('/api', (app) => app
      .use(usersPlugin)
      .use(filesPlugin))
    .group('/ws', (app) => app.use(chatsPlugin))
    .group('/trc', (app) => app.use(trpc(router)))
};