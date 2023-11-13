import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Context {
    prisma: PrismaClient
    req: any // HTTP request carrying the `Authorization` header
}
  
function createContext(req: any) {
    return {
        ...req,
        prisma,
    }
}

export {
    Context,
    createContext,
}