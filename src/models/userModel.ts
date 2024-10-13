import { Schema } from "mongoose";
import validator from "validator";
import mongoose, {Document} from "mongoose";

const StudentSchema:Schema = new mongoose.Schema({
    fullName: { type: String, required: [true, "please add the full name"], unique: [true, "fullName already exists"], trim: true } as object,
    email:{type: String, validate: [ validator.isEmail, 'invalid email' ], unique: [true, "email already exists"], trim: true, required: [true, "please add the email"] } as object,
    password: { type: String, required: [true, "please add the password"], trim: true} as object,
    grade: {type:String}  as object,
    role: { type: String, enum: ["student", "teacher"], default: "student" },
    class: { type: String, unique: [true, "class already exists"], required: [true, "please add the class"] } as object
});

const TeacherSchema:Schema = new mongoose.Schema({
    fullName: { type: String, required: [true, "please add the full name"], unique: [true, "fullName already exists"], trim: true } as object,
    email:{type: String, validate: [ validator.isEmail, 'invalid email' ], unique: [true, "email already exists"], trim: true, required: [true, "please add the email"] } as object,
    password: { type: String, required: [true, "please add the password"], trim: true} as object,
    student: [StudentSchema], default:[]  as object,
    role: { type: String, enum: ["student", "teacher"], default: "teacher" },
    class: { type: String, unique: [true, "class already exists"], required: [true, "please add the class"] } as object
});

export interface Student extends Document{
    fullName: string;
    email: string;
    password: string;
    class?: string;
    grade?: string;
    role?: string;
    _id:string;
}

export interface Teacher extends Document{
    fullName: string;
    email: string;
    password: string;
    student: Student[];
    role?: string;
    class: string;
    _id:string;
}

export default mongoose.model("Classes", TeacherSchema);