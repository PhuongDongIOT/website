import { Elysia, t } from 'elysia';

export const wsSocketsPlugin = new Elysia()
    // Simple chatroom with custom room id and name
  .ws('/ws/:room/:name', {
      schema: {
          body: t.Object({
              message: t.String()
          }),
          response: t.Object({
              user: t.String(),
              message: t.String(),
              time: t.Number()
          })
      },
      open(ws) {
          const {
              data: {
                  params: { room, name }
              }
          } = ws

          ws.subscribe(room).publish(room, {
              message: `${name} has entered the room`,
              user: '[SYSTEM]',
              time: Date.now()
          })
      },
      message(ws, { message }) {
          const {
              data: {
                  params: { room, name }
              }
          } = ws

          ws.publish(room, {
              message,
              user: name,
              time: Date.now()
          })
      },
      close(ws) {
          const {
              data: {
                  params: { room, name }
              }
          } = ws

          ws.publish(room, {
              message: `${name} has leave the room`,
              user: '[SYSTEM]',
              time: Date.now()
          })
      }
  });