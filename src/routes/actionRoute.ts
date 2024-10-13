import express, { Application, Router } from "express";
import { } from "../controllers/actionController.js";

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
router.route("/getAll").get();


export default router;