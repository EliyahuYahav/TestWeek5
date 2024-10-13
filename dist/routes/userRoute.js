"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_js_1 = require("../controllers/authController.js");
const app = (0, express_1.default)();
const router = express_1.default.Router();
/**
 * @swagger
 * /login:
 *  post:
 *      summary: login user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fullName:
 *                              type: string
 *                          email:
 *                              type: string
 *      responses:
 *          200:
 *              description: you login
 */
router.route("/login").post(authController_js_1.login);
/**
 * @swagger
 * /register/teacher:
 *  post:
 *      summary: create new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fullName:
 *                              type: string
 *                          password:
 *                              type: string
 *                          email:
 *                              type: string
 *                          class:
 *                              type: string
 *      responses:
 *          201:
 *              description: new Teacher is added
 */
router.route("/register/teacher").post(authController_js_1.registerTeacher);
/**
 * @swagger
 * /register/student:
 *  post:
 *      summary: create new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fullName:
 *                              type: string
 *                          password:
 *                              type: string
 *                          email:
 *                              type: string
 *                          class:
 *                              type: string
 *      responses:
 *          201:
 *              description: new Student is added
 */
router.route("/register/student").post(authController_js_1.registerStudent);
exports.default = router;
