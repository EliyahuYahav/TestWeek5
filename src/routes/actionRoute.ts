import express, { Application, Router } from "express";
import { GetAllStudents } from "../controllers/actionController";
import { authIfTeacher } from "../middleware/authMiddleware";
// import { } from "../controllers/actionController.js";

const app: Application = express();
const router: Router = express.Router();

/**
/**
 * @swagger
 * /users/getAll/{class}:
 *  get:
 *      summary: Get all the users
 *      parameters:
 *       - in: path
 *         name: class
 *         required: true
 *         description: class of the users to delete grad
 *         schema:
 *           type: string
 *      responses:
 *          200:
 *              description: A JSON of all the users
 */
router.route("/getAll/:class").get(authIfTeacher, GetAllStudents);


export default router;