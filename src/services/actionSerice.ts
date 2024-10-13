import TeacherModel, { Grade, Student, Teacher } from "../models/userModel.js";


export const GetAllOfTheStudent = async (classStudent: string): Promise<Student[] | void>=>{
    if (!classStudent) throw new Error("not found name class")
    const allStudent: Student[] = await TeacherModel.find({"class": classStudent})
    if (!allStudent) throw new Error("not found Student")
        return allStudent
}

export const GetGradesAverage = async (classStudent: string): Promise<number>=>{
    const allStudent = await GetAllOfTheStudent(classStudent);
    if (allStudent) {
        let sum = 0
        let con = 0
        allStudent.forEach(student => {
            sum += GetAverageUser(student)
            con ++
        });
        return sum / con
    }throw new Error("not found Students")
}

export const GetAverageGrad = async (id: string): Promise<number>=>{
    if (!id) throw new Error("not found id")
        const Student: Student | null = await TeacherModel.findOne({"_id": id})
    if (!Student) throw new Error("not found student")
        const average:number = GetAverageUser(Student)
        return average
}

export const GetAverageUser = (user:Student): number =>{
    if (user.grades) {
        let sum: number = 0
        user.grades.forEach(grad => {
            sum += grad.grade
        });
        return sum / user.grades.length
    } else throw Error
} 

export const AddGradToStudent = async (theStudent : Grade , id: string):Promise<Student| void> =>{
    if (!theStudent) throw new Error("not found id")
        const Student: Student | null = await TeacherModel.findOne({"_id": id})
    if (!Student) throw new Error("not found student")
        Student.grades?.push(theStudent)
    await Student.save();
    return Student
}

export const editGradToStudent = async (theStudent : Grade , id: string):Promise<Student| void> =>{
  if (!theStudent) throw new Error("not found id");
  const Student: Student | null = await TeacherModel.findByIdAndUpdate(
    { _id: id, "grades.subject": theStudent.subject },
    { $set: { grads: theStudent.grade } },
    { new: true }
  );
  if (!Student) throw new Error("not found student");
  await Student.save();
  return Student;
}