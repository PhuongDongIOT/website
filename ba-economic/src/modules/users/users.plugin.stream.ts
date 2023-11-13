import { Elysia } from 'elysia';
import { Stream } from '@elysiajs/stream'

export const usersPluginStream = new Elysia()    
    .get('/stream', () => new Stream(async (stream) => {
        stream.send('hello')

        await stream.wait(1000)
        stream.send('world')

        stream.close()
    }),
    {
    detail: {
        summary: 'Stream',
    },
    },)