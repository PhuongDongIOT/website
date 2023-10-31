import { Elysia, t } from 'elysia'
import { cookie } from '@elysiajs/cookie'
import { swagger } from '@elysiajs/swagger'

import { auth, post } from './modules'

const app = new Elysia()
    .use(
        swagger({
            documentation: {
                info: {
                    title: 'Elysia Supabase Authentication',
                    version: '0.3.0'
                },
                tags: [
                    {
                        name: 'Authorized',
                        description:
                            "Need a 'access_token' and 'refresh_token' cookie for authorization"
                    },
                    {
                        name: 'Authentication',
                        description: 'For user authentication'
                    }
                ]
            }
        })
    )
    .use(auth)
    .use(post)
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)


// server.ts
// import { Elysia, t } from 'elysia'

// const app = new Elysia()
//     .get('/', () => 'Hi Elysia')
//     .get('/id/:id', ({ params: { id } }) => id)
//     .post('/mirror', ({ body }) => body, {
//         body: t.Object({
//             id: t.Number(),
//             name: t.String()
//         })
//     })
//     .listen(8080)

// export type App = typeof app