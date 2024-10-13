"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const actionController_1 = require("../controllers/actionController");
const authMiddleware_1 = require("../middleware/authMiddleware");
// import { } from "../controllers/actionController.js";
const app = (0, express_1.default)();
const router = express_1.default.Router();
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
router.route("/getAll/:class").get(authMiddleware_1.authIfTeacher, actionController_1.GetAllStudents);
/**
 * @swagger
 * /users/getAverage/{class}:
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
 *              description: A JSON of all the average grads of users
 */
router.route("/getAverage/:class").get(authMiddleware_1.authIfTeacher, actionController_1.getAverage);
/**
 * @swagger
 * /users/GetGrade/{id}:
 *  get:
 *      summary: Get all the users
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of the user
 *         schema:
 *           type: string
 *      responses:
 *          200:
 *              description: A JSON of average grad
 */
router.route("/GetGrade/:id").get(authMiddleware_1.authIfTeacher, actionController_1.GetGrad);
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
router.route("/addGrade/:id").put(authMiddleware_1.authIfTeacher, actionController_1.AddGrad);
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
router.route("/editGrade/:id").put(authMiddleware_1.authIfTeacher, actionController_1.editGrad);
exports.default = router;
