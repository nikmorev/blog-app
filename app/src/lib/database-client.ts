import { PrismaClient } from '@prisma/client'

let databaseClient: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    databaseClient = new PrismaClient();
} else {
    if (!(global.databaseClient as PrismaClient)) {
        global.databaseClient = new PrismaClient()
    }
    databaseClient = global.databaseClient;
}

export { databaseClient }