"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registerStudent = exports.registerTeacher = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userService_js_1 = require("../services/userService.js");
const dotenv_1 = __importDefault(require("dotenv"));
const response_js_1 = require("../types/response.js");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
const registerTeacher = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const newUser = yield (0, userService_js_1.registerNewTeacher)(user);
        res.status(201).json(new response_js_1.ResponseStructure(true, newUser, "user created"));
    }
    catch (error) {
        next(error);
    }
});
exports.registerTeacher = registerTeacher;
const registerStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        if (!user.fullName || !user.password) {
            res.status(400).json({ error: "Username and password are required." });
            return;
        }
        const newUser = yield (0, userService_js_1.registerNewStudent)(user);
        res.status(201).json({ massage: "User is register", newUser: newUser });
    }
    catch (error) {
        next(error);
    }
});
exports.registerStudent = registerStudent;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, email } = req.body;
        if (!fullName || !email) {
            res.status(400).json({ error: "Username and password are required." });
            return;
        }
        const user = yield (0, userService_js_1.authenticateUser)(fullName, email);
        if (user) {
            const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600000,
                sameSite: 'strict',
            });
            res.json({ token });
        }
        else {
            res.status(401).json({ message: "Authentication failed" });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
