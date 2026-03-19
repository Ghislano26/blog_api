"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const constant_1 = require("../core/constant");
const adapter_mariadb_1 = require("@prisma/adapter-mariadb");
const client_1 = require("../generated/prisma/client");
const adapter = new adapter_mariadb_1.PrismaMariaDb({
    host: constant_1.DATABASE_ENV.DATABASE_HOST,
    user: constant_1.DATABASE_ENV.DATABASE_USER,
    password: constant_1.DATABASE_ENV.DATABASE_PASSWORD,
    database: constant_1.DATABASE_ENV.DATABASE_NAME,
    connectionLimit: 5,
});
const prisma = new client_1.PrismaClient({ adapter });
exports.prisma = prisma;
//# sourceMappingURL=prisma.js.map