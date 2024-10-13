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
exports.authenticateUser = exports.registerNewStudent = exports.registerNewTeacher = void 0;
const userModel_js_1 = __importDefault(require("../models/userModel.js"));
const registerNewTeacher = (teacher) => __awaiter(void 0, void 0, void 0, function* () {
    if (teacher) {
        const allTeacher = yield userModel_js_1.default.findOne({ "fullName": teacher.fullName });
        if (allTeacher) {
            throw new Error("this teacher have already class");
        }
        const newUser = yield userModel_js_1.default.create(teacher);
        if (newUser) {
            return newUser;
        }
    }
    else {
        throw new Error("not found information");
    }
});
exports.registerNewTeacher = registerNewTeacher;
const registerNewStudent = (student) => __awaiter(void 0, void 0, void 0, function* () {
    if (student) {
        const newUser = yield userModel_js_1.default.create(student);
        if (newUser) {
            return newUser;
        }
    }
    else {
        throw new Error("not found information");
    }
});
exports.registerNewStudent = registerNewStudent;
const authenticateUser = (fullName, email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_js_1.default.findOne({ "fullName": fullName, "email": fullName });
    if (user) {
        return user;
    }
    else {
        const user = yield userModel_js_1.default.findOne({ "student": { "fullName": fullName, "email": fullName } });
        if (user) {
            return user;
        }
    }
    throw new Error("User Not found ");
});
exports.authenticateUser = authenticateUser;
