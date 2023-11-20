import { Elysia } from 'elysia';
import {
  InsertUserSchemaElysia,
  ReturnedUserSchema,
  ReturnedArrayUserSchema,
} from './users.schema';

import { addJobs, myWorker } from '~/common/helpers/asynchronous.tasks';
// import { typeObjectSendMail, sendingMail } from '~/common/helpers/mail.stmp';
import { Logger } from '~/common/helpers/winston.logger';
import { handleCrawData } from '~/common/helpers/puppeteer.minimal';

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
    .get('/sign', ({ bearer }: any) => bearer, {
      beforeHandle({ bearer, set }: any) {
          if (!bearer) {
              set.status = 400
              set.headers[
                  'WWW-Authenticate'
              ] = `Bearer realm='sign', error="invalid_request"`

              return 'Unauthorized'
          }
      }
    })
    .get('/sign/:name', async ({ jwt, cookie, setCookie, params }: any) => {
        setCookie('auth', await jwt.sign(params), {
            httpOnly: true,
            maxAge: 7 * 86400,
        })
        await addJobs();
        return `Sign in as ${cookie.auth}`
    })
    .get('/profile', async ({ jwt, set, cookie: { auth } }: any) => {
        const profile = await jwt.verify(auth)
        // await myWorker();
        // const valueSend: typeObjectSendMail = {
        //   from: '"Sender Name" <from@example.net>',
        //   to: "dongpp.blackwind@gmail.com",
        //   subject: "Hello from node",
        //   text: "Hello world?",
        //   html: "<strong>Hello world?</strong>",
        //   headers: { 'x-myheader': 'test header' }
        // }
        // await sendingMail(valueSend);

        // const logger = new Logger("Hello world!");
        // logger.info(null, null)

        await handleCrawData();
        if (!profile) {
            set.status = 401
            return 'Unauthorized'
        }

        return `Hello ${profile.name}`
    })
    .get('/info', async (): Promise<String> => {
      return 'Hello User';
  })