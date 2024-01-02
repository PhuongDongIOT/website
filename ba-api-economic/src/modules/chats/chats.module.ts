import { Elysia } from 'elysia';
import { Context } from '~libs/connect.prisma'

export const setupChats = (context: Context) => {
  return new Elysia().state(() => ({ }));
};