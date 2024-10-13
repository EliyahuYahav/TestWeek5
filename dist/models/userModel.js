"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const mongoose_1 = __importDefault(require("mongoose"));
const NewGrade = new mongoose_1.default.Schema({
    subject: {
        type: String,
        required: [true, "please add the subject"],
    },
    grade: {
        type: Number,
        required: [true, "please add the grade"],
        MAX: 100,
    },
});
const StudentSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        required: [true, "please add the full name"],
        trim: true,
    },
    email: {
        type: String,
        validate: [validator_1.default.isEmail, "invalid email"],
        trim: true,
        required: [true, "please add the email"],
    },
    password: {
        type: String,
        required: [true, "please add the password"],
        trim: true,
    },
    grades: [NewGrade],
    role: { type: String, enum: ["student", "teacher"], default: "student" },
    class: {
        type: String,
        required: [true, "please add the class"],
    },
});
const TeacherSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        required: [true, "please add the full name"],
        trim: true,
    },
    email: {
        type: String,
        validate: [validator_1.default.isEmail, "invalid email"],
        trim: true,
        required: [true, "please add the email"],
    },
    password: {
        type: String,
        required: [true, "please add the password"],
        trim: true,
    },
    student: [StudentSchema],
    role: { type: String, enum: ["student", "teacher"], default: "teacher" },
    class: {
        type: String,
        required: [true, "please add the class"],
    },
});
exports.default = mongoose_1.default.model("TeacherModel", TeacherSchema);
