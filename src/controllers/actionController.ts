import { NextFunction, Request, Response } from "express";
import Classes, { Student, Teacher } from "../models/userModel.js";
import { ResponseStructure } from "../types/response.js";
import { GetAllOfTheStudent } from "../services/actionSerice.js";


export const GetAllStudents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const theClass :string = req.params.class
        const allStudent = await GetAllOfTheStudent(theClass);
        res.status(200).json(new ResponseStructure(true, allStudent))
    } catch (error) {
        next(error)
    }
}