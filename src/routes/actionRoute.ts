import express, { Application, Router } from "express";
import { AddGrad, editGrad, GetAllStudents, getAverage, GetGrad } from "../controllers/actionController";
import { authIfTeacher } from "../middleware/authMiddleware";
// import { } from "../controllers/actionController.js";

const app: Application = express();
const router: Router = express.Router();


/**
 * @swagger
 * /users/getAll/{class}:
 *  get:
 *      summary: Get all the users
 *      parameters:
 *       - in: path
 *         name: class
 *         required: true
 *         description: class of the users 
 *         schema:
 *           type: string
 *      responses:
 *          200:
 *              description: A JSON of all the users
 */
router.route("/getAll/:class").get(authIfTeacher, GetAllStudents);

/**
 * @swagger
 * /users/getAll/{class}:
 *  get:
 *      summary: Get all average of the users
 *      parameters:
 *       - in: path
 *         name: class
 *         required: true
 *         description: class of the users
 *         schema:
 *           type: string
 *      responses:
 *          200:
 *              description: A JSON of all the users
 */
router.route("/getAverage/:class").get(authIfTeacher, getAverage);

router.route("/GetGrade/:id").get(authIfTeacher, GetGrad);

/**
 * @swagger
 * /users/addGrade/{id}:
 *  put:
 *      summary: add grad
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: add grad to student
 *         schema:
 *           type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          subject:
 *                              type: string
 *                          grad:
 *                              type: number
 *      responses:
 *          200:
 *              description: A JSON of grad of student
 */
router.route("/addGrade/:id").put(authIfTeacher, AddGrad);

/**
 * @swagger
 * /users/editGrade/{id}:
 *  put:
 *      summary: add grad
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: add grad to student
 *         schema:
 *           type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          subject:
 *                              type: string
 *                          grad:
 *                              type: number
 *      responses:
 *          200:
 *              description: A JSON of grad of student
 */
router.route("/editGrade/:id").put(authIfTeacher, editGrad);

export default router;