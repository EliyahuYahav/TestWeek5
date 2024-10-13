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
router.route("/getAll/:class").get(authMiddleware_1.authIfTeacher, actionController_1.GetAllStudents);
exports.default = router;
