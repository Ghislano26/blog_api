"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("./core/constant");
const server_1 = __importDefault(require("./server"));
server_1.default.listen(constant_1.PORT, () => {
    console.log(`Le serveur tourne sur le port http://localhost:${constant_1.PORT}/`);
    console.log(`Documentation swagger : http://localhost:${constant_1.PORT}/api-docs`);
});
// installer express, cors, dotenv, swagger-ui-express, swagger-jsdoc, prisma, uuid
//# sourceMappingURL=app.js.map