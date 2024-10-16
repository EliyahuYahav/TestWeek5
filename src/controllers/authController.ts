import { NextFunction, Request, Response } from "express";
import { Student, Teacher } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { authenticateUser, registerNewStudent, registerNewTeacher } from "../services/userService.js";
import dotenv from "dotenv";
import { ResponseStructure } from "../types/response.js";

dotenv.config();

const JWT_SECRET: string = process.env.JWT_SECRET || "default_secret";

export const registerTeacher = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user: Teacher = req.body;    
    const newUser: Teacher = await registerNewTeacher(user);
    res.status(201).json(new ResponseStructure(true, newUser._id, "Teacher created"));
  } catch (error: any) {
    next(error)
  }
};

export const registerStudent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user: Student = req.body;
      const newUser = await registerNewStudent(user);
      res.status(201).json(new ResponseStructure(true, newUser, "Student created"));
    } catch (error: any) {
      next(error)
    }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { fullName, password } = req.body;
    if (!fullName || !password) {
      res.status(400).json({ error: "Username and password are required." });
      return;
    }

    const user: Teacher|Student | null = await authenticateUser(fullName, password);
    if (user) {
      const token = jwt.sign({ id : user._id, role : user.role},JWT_SECRET,{ expiresIn: "1h" });
      res.cookie('token', token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        maxAge: 3600000, 
        sameSite: 'strict',
      });
      res.json({ token });
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error: any) {
    next(error)
  }
};
