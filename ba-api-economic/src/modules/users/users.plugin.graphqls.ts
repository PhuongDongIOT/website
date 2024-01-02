import { Elysia } from 'elysia';
import { yoga } from '@elysiajs/graphql-yoga'

const TypeDefended = `
type Query {
    hi: String
}
`;

const context = {
  name: 'Mobius'
};

export const usersPluginGraphql = new Elysia()
  .use(
    yoga({
          typeDefs: TypeDefended,
          context: context,
          useContext(_) {},
          resolvers: {
              Query: {
                  hi: async (parent, args, context) => context.name
              }
          }
      })
  );