import { Elysia } from 'elysia';

export const usersPlugin = new Elysia()
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
          ({ body, store }) => 'Hello',
          {
            // body: InsertUserSchema,
            // response: ReturnedUserSchema,
            detail: {
              summary: 'Register',
            },
          },
        )
  );