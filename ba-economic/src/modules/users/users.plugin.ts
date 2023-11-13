import { Elysia } from 'elysia';
import { setupUsers } from './users.module';
import { createContext } from '~libs/connect.prisma'
import {
  InsertUserSchema,
  ReturnedUserSchema,
  ReturnedArrayUserSchema,
} from './users.schema';

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
        .get(
          '',
          async ({ request, store } : any) => store.usersService.findAllUser(),
          {
            response: ReturnedArrayUserSchema,
            detail: {
              summary: 'Detail',
            },
          },
        )
        .post(
          '',
          ({ body, store } : any) => store.usersService.createUser(body.user,),
          {
            body: InsertUserSchema,
            response: ReturnedUserSchema,
            detail: {
              summary: 'Register',
            },
          },
        )
  );