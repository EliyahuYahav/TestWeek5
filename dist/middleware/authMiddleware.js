"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authIfStudent = exports.authIfTeacher = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
    if (!token) {
        res.status(401).json({ message: "Access token missing" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};
exports.authMiddleware = authMiddleware;
const authIfTeacher = (req, res, next) => {
    var _a;
    const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
    if (!token) {
        res.status(401).json({ message: "Access token missing" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded;
        if (decoded.role !== "teacher") {
            throw mongoose_1.Error;
        }
        next();
    }
    catch (error) {
        res.status(403).json({ message: "you do not have access to teacher space" });
    }
};
exports.authIfTeacher = authIfTeacher;
const authIfStudent = (req, res, next) => {
    var _a;
    const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
    if (!token) {
        res.status(401).json({ message: "Access token missing" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded;
        if (decoded.role !== "student") {
            throw mongoose_1.Error;
        }
        next();
    }
    catch (error) {
        res.status(403).json({ message: "you do not have access student space" });
    }
};
exports.authIfStudent = authIfStudent;
