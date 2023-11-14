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
    .get('/sign/:name', async ({ jwt, cookie, setCookie, params }) => {
        setCookie('auth', await jwt.sign(params), {
            httpOnly: true,
            maxAge: 7 * 86400,
        })

        return `Sign in as ${cookie.auth}`
    })
    .get('/profile', async ({ jwt, set, cookie: { auth } }) => {
        const profile = await jwt.verify(auth)

        if (!profile) {
            set.status = 401
            return 'Unauthorized'
        }

        return `Hello ${profile.name}`
    })