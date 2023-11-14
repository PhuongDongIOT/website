import { Elysia } from 'elysia';
import {
  InsertUserSchemaElysia,
  ReturnedUserSchema,
  ReturnedArrayUserSchema,
} from './users.schema';

export const usersPluginRest = new Elysia()
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
      body: InsertUserSchemaElysia,
      response: ReturnedUserSchema,
      detail: {
        summary: 'Register',
      },
    },
  )