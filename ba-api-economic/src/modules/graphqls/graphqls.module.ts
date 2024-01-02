import { Elysia } from 'elysia';
import { Context } from '~libs/connect.prisma'

export const setupGraphqls = (context: Context) => {
  return new Elysia().state(() => ({ }));
};