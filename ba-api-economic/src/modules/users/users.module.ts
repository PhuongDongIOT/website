import { Context } from '~libs/connect.prisma'
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { Elysia } from 'elysia';

export const setupUsers = (context: Context) => {
  const usersRepository = new UsersRepository(context);
  const usersService = new UsersService(usersRepository);
  return new Elysia().state(() => ({ usersService }));
};