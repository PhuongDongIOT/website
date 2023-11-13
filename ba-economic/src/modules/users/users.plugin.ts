import { Elysia } from 'elysia';
import { setupUsers } from './users.module';
import { createContext } from '~libs/connect.prisma'
import { usersPluginRest } from './users.plugin.rest'
import { usersPluginStream } from './users.plugin.stream'

export const usersPlugin = new Elysia()
  .use(request => setupUsers(createContext(request)))
  .group(
    '/users',
    {
      detail: {
        tags: ['Auth'],
      },
    },
    (app) =>
      app
        .use(usersPluginRest)
        .use(usersPluginStream)
  );