import TeacherModel, { Student, Teacher } from "../models/userModel.js";

export const registerNewTeacher = async (
  teacher: Teacher
): Promise<Teacher> => {
  if (teacher) {
    const correctTeacher = await TeacherModel.findOne({
      fullName: teacher.fullName,
    });
    if (correctTeacher) {
      throw new Error("this teacher have already class");
    }
    teacher.student=[];
    console.log(teacher);
    const newTeacher: Teacher | null = await TeacherModel.create({...teacher})
    // const newUser: any = await Classes.create(teacher);
    if (newTeacher) {
      return newTeacher;
    } else {
      throw new Error("Cannot create new teacher");
    }
  } else {
    throw new Error("not found information");
  }
};

export const registerNewStudent = async (
  student: Student
): Promise<Student | void> => {
  if (student) {
    const correctClass: Teacher | null = await TeacherModel.findOne({
      class: student.class,
    });
    if (!correctClass) {
      throw new Error("Cant find The Class");
    }
    student.role = "student"
    const newStudent: Student = (await TeacherModel.create(
      student
    ));
    console.log(newStudent)
    if (!correctClass.student) {
        correctClass.student=[];
    }
      correctClass.student.push(newStudent);
    
    await correctClass.save();

    return newStudent;
  } else {
    throw new Error("not found information");
  }
};

export const authenticateUser = async (
  fullName: string,
  password: string
): Promise<Student | Teacher | null> => {
  const user: Teacher | null = await TeacherModel.findOne({
    fullName: fullName,
    password: password,
  });
  if (user) {
    return user;
  } else {
    const user: Student | null = await TeacherModel.findOne({
      student: { fullName: fullName, password: password },
    });
    if (user) {
      return user;
    }
  }
  throw new Error("User Not found ");
};
