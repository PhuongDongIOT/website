import { Elysia } from 'elysia';
import { setupChats } from './chats.module';
import { createContext } from '~libs/connect.prisma'

import { chatsPluginSocket } from './chats.plugin.socket'

export const chatsPlugin = new Elysia()
  .use(request => setupChats(createContext(request)))  
  .group(
    '/chat',
    {
      detail: {
        tags: ['Chats'],
      },
    },
    (app) =>
      app
        .state('version', 1)
        .decorate('getDate', () => Date.now())
        .use(chatsPluginSocket)
  );