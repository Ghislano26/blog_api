"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const constant_1 = require("./core/constant");
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend_blog_api',
            version: '1.0.0',
            description: 'API backend de gestion de blog'
        },
        servers: [
            {
                url: `http://localhost:${constant_1.PORT}`
            }
        ]
    },
    apis: ['./src/routes/*.ts']
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map