import { Elysia } from 'elysia';
import { yoga } from '@elysiajs/graphql-yoga'
import { setupGraphqls } from './graphqls.module';
import { createContext } from '~libs/connect.prisma'

export const graphqlsPlugin = new Elysia()
  .use(request => setupGraphqls(createContext(request)))  
  .group(
    '/graphql',
    {
      detail: {
        tags: ['Graphqls'],
      },
    },
    (app) =>
      app
        .state('version', 1)
        .decorate('getDate', () => Date.now())        
        .use(
          yoga({
                typeDefs: /* GraphQL */`
                    type Query {
                        hi: String
                    }
                `,
                context: {
                    name: 'Mobius'
                },
                // If context is a function on this doesn't present
                // for some reason it won't infer context type
                useContext(_) {},
                resolvers: {
                    Query: {
                        hi: async (parent, args, context) => context.name
                    }
                }
            })
        )
      );