import { Elysia } from 'elysia';

export const chatsPluginSocket = new Elysia()
    .get('/', () => Bun.file('./src/modules/chats/ws.html'))
    .ws('/user', {
        async message(ws, message) {
            ws.send(message)
        }
    })