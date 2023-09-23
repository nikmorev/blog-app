import { PrismaClient } from '@prisma/client'

declare global {
    var databaseClient: PrismaClient;
}