"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const mongoose_1 = __importDefault(require("mongoose"));
const StudentSchema = new mongoose_1.default.Schema({
    fullName: { type: String, required: [true, "please add the full name"], unique: [true, "fullName already exists"], trim: true },
    email: { type: String, validate: [validator_1.default.isEmail, 'invalid email'], unique: [true, "email already exists"], trim: true, required: [true, "please add the email"] },
    password: { type: String, required: [true, "please add the password"], trim: true },
    grade: { type: String },
    role: { type: String, enum: ["student", "teacher"], default: "student" },
    class: { type: String, required: [true, "please add the class"] }
});
const TeacherSchema = new mongoose_1.default.Schema({
    fullName: { type: String, required: [true, "please add the full name"], unique: [true, "fullName already exists"], trim: true },
    email: { type: String, validate: [validator_1.default.isEmail, 'invalid email'], unique: [true, "email already exists"], trim: true, required: [true, "please add the email"] },
    password: { type: String, required: [true, "please add the password"], trim: true },
    student: [StudentSchema], default: [],
    role: { type: String, enum: ["student", "teacher"], default: "teacher" },
    class: { type: String, required: [true, "please add the class"] }
});
exports.default = mongoose_1.default.model("Classes", TeacherSchema);
