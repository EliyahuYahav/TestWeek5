import Classes, { Student, Teacher, User } from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const registerNewTeacher = async (teacher: Teacher): Promise<Teacher | void> => {
    if (teacher) {
        const allTeacher = await Classes.findOne({"fullName" : teacher.fullName})
        if (allTeacher) {
            throw new Error("this teacher have already class")
        }
        const newUser : Teacher = await Classes.create(teacher) as unknown as Teacher;
        if (newUser) {
            return newUser;
        }
    }else{
        throw new Error("not found information")
    }
};

export const registerNewStudent = async (student: Student): Promise<Student | void> => {
    if (student) {
        const newUser : Student = await Classes.create(student) as unknown as Student;
        if (newUser) {
            return newUser;
        }
    }else{
        throw new Error("not found information")
    }
};

export const authenticateUser = async (fullName: string, email: string): Promise<Student | Teacher | null> => {
  const user: Teacher | null = await Classes.findOne({"fullName": fullName, "email": fullName})
  if (user) {
    return user;
  }else{
    const user: Student | null = await Classes.findOne({"student": {"fullName" : fullName, "email": fullName}})
    if (user) {
        return user;
      }
  }
  throw new Error("User Not found ")
};