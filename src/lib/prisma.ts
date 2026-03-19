import { DATABASE_ENV } from "../core/constant";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb({
    host: DATABASE_ENV.DATABASE_HOST,
    user: DATABASE_ENV.DATABASE_USER,
    password: DATABASE_ENV.DATABASE_PASSWORD,
    database: DATABASE_ENV.DATABASE_NAME,
    connectionLimit: 5,
    
})

const prisma = new PrismaClient({ adapter })

export {prisma}