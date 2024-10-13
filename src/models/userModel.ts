import { Schema } from "mongoose";
import validator from "validator";
import mongoose, { Document } from "mongoose";

const NewGrade: Schema = new mongoose.Schema<Grade>({
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

const StudentSchema: Schema = new mongoose.Schema<Student>({
  fullName: {
    type: String,
    required: [true, "please add the full name"],
    trim: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "invalid email"],
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

const TeacherSchema: Schema = new mongoose.Schema<Teacher>({
  fullName: {
    type: String,
    required: [true, "please add the full name"],
    trim: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "invalid email"],
    trim: true,
    required: [true, "please add the email"],
  },
  password: {
    type: String,
    required: [true, "please add the password"],
    trim: true,
  },
  student:  [StudentSchema],
  role: { type: String, enum: ["student", "teacher"], default: "teacher" },
  class: {
    type: String,
    required: [true, "please add the class"],
  },
});

export interface Student extends Document {
  fullName: string;
  email: string;
  password: string;
  class?: string;
  grades?: Grade[];
  role?: string;
  _id: string;
}

export interface Grade {
  id?: string;
  subject: string;
  grade: number;
}

export interface Teacher extends Document {
  fullName: string;
  email: string;
  password: string;
  student?: Student[];
  role?: string;
  class: string;
  _id: string;
}

export default mongoose.model<Teacher>("TeacherModel", TeacherSchema);
