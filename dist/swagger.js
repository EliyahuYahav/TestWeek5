"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: "College swagger",
        version: '1.0.0',
        description: 'show all the api request of the collage'
    },
    server: [
        {
            url: 'http://localhost:3000'
        }
    ]
};
const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts', './src/app.js']
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
