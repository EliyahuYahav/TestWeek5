import Classes, { Student, Teacher } from "../models/userModel.js";


export const GetAllOfTheStudent = async (classStudent: string): Promise<Student[] | void>=>{
    if (!classStudent) throw new Error("not found name class")
    const allStudent: Student[] = await Classes.find({"class": classStudent})
    if (!allStudent) throw new Error("not found Student")
        return allStudent
}