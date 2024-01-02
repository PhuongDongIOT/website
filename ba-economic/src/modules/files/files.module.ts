import { Elysia } from 'elysia';
import { Context } from '~libs/connect.prisma'

export const setupFiles = (context: Context) => {
  return new Elysia().state(() => ({ }));
};