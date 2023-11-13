import { Elysia } from 'elysia';
import {
  InsertUserSchema,
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
      body: InsertUserSchema,
      response: ReturnedUserSchema,
      detail: {
        summary: 'Register',
      },
    },
  )