// import { PrismaClient } from '@prisma/client'
import { PrismaClient as PrismaClientSqlite  } from '~prisma/sqlite/generator/client_sqlite';
import { PrismaClient as PrismaClientPostgresql  } from '~prisma/postgresql/generator/client_postgresql';

const prisma = new PrismaClientPostgresql();
const prisma_sqlite = new PrismaClientSqlite();

interface Context {
    prisma: PrismaClientPostgresql,
    prisma_sqlite: PrismaClientSqlite
    req: any // HTTP request carrying the `Authorization` header
}
  
function createContext(req: any) {
    return {
        ...req,
        prisma,
        prisma_sqlite,
    }
}

export {
    Context,
    createContext,
};