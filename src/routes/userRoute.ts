import express, { Application, Router } from "express";
import { login, registerStudent, registerTeacher } from "../controllers/authController.js";

const app: Application = express();
const router: Router = express.Router();

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
router.route("/login").post(login);

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
router.route("/register/teacher").post(registerTeacher);

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
router.route("/register/student").post(registerStudent);


export default router;