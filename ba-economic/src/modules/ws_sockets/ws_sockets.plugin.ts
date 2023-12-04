import { Elysia, t } from 'elysia';
import { logger } from '~utils/logger.utils';

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
          logger.warn(`${room} - ${name}`)
      },
      message(ws, { message }: any) {
          const {
              data: {
                  params: { room, name }
              }
          } = ws

          logger.warn(`${room} - ${name}`)
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