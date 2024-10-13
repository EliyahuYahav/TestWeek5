import Classes, { Student, Teacher } from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const registerNewTeacher = async (teacher: Teacher): Promise<Teacher | void> => {
    if (teacher) {
        const correctTeacher = await Classes.findOne({"fullName" : teacher.fullName})
        if (correctTeacher) {
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
        const correctClass : Teacher | null = await Classes.findOne({"class" : student.class})
        if (!correctClass) {
            throw new Error('Cant find The Class')
        }
        const newStudent : Student = await Classes.create(student) as unknown as Student;
        correctClass.student.push(newStudent)
        await correctClass.save();

        return newStudent;
    }else{
        throw new Error("not found information")
    }
};

export const authenticateUser = async (fullName: string, email: string): Promise<Student | Teacher | null> => {
  const user: Teacher | null = await Classes.findOne({"fullName": fullName, "email": email})
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