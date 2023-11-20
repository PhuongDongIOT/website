import { Elysia } from 'elysia';
import { setupFiles } from './files.module';
import { createContext } from '~libs/connect.prisma'

import { filesPluginRest } from './files.plugin.rest'

export const filesPlugin = new Elysia()
  .use(request => setupFiles(createContext(request)))  
  .group(
    '/file',
    {
      detail: {
        tags: ['Files'],
      },
    },
    (app) =>
      app
        .state('version', 1)
        .decorate('getDate', () => Date.now())
        .use(filesPluginRest)
  );