import { NextFunction, Request, Response } from "express";
import Classes, { Grade, Student, Teacher } from "../models/userModel.js";
import { ResponseStructure } from "../types/response.js";
import { AddGradToStudent, editGradToStudent, GetAllOfTheStudent, GetAverageGrad, GetGradesAverage } from "../services/actionSerice.js";


export const GetAllStudents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const theClass :string = req.params.class
        const allStudent = await GetAllOfTheStudent(theClass);
        res.status(200).json(new ResponseStructure(true, allStudent))
    } catch (error) {
        next(error)
    }
}

export const getAverage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const theClass :string = req.params.class
        const allStudentAverage: number | null = await GetGradesAverage(theClass);
        res.status(200).json(new ResponseStructure(true, allStudentAverage, "there is the Average of all the class"))
    } catch (error) {
        next(error)
    }
}

export const GetGrad = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const theClass :string = req.params.id
        const StudentAverage: number | null = await GetAverageGrad(theClass);
        res.status(200).json(new ResponseStructure(true, StudentAverage, "there is the Average of the student"))
    } catch (error) {
        next(error)
    }
}

export const AddGrad = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const theStudent :Grade = req.body
        const student = await AddGradToStudent(theStudent, req.params.id);
        res.status(200).json(new ResponseStructure(true, student))
    } catch (error) {
        next(error)
    }
}


export const editGrad = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const theStudent :Grade = req.body
        const student = await editGradToStudent(theStudent, req.params.id);
        res.status(200).json(new ResponseStructure(true, student))
    } catch (error) {
        next(error)
    }
}