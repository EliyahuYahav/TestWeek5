"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editGrad = exports.AddGrad = exports.GetGrad = exports.getAverage = exports.GetAllStudents = void 0;
const response_js_1 = require("../types/response.js");
const actionSerice_js_1 = require("../services/actionSerice.js");
const GetAllStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const theClass = req.params.class;
        const allStudent = yield (0, actionSerice_js_1.GetAllOfTheStudent)(theClass);
        res.status(200).json(new response_js_1.ResponseStructure(true, allStudent));
    }
    catch (error) {
        next(error);
    }
});
exports.GetAllStudents = GetAllStudents;
const getAverage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const theClass = req.params.class;
        const allStudentAverage = yield (0, actionSerice_js_1.GetGradesAverage)(theClass);
        res.status(200).json(new response_js_1.ResponseStructure(true, allStudentAverage, "there is the Average of all the class"));
    }
    catch (error) {
        next(error);
    }
});
exports.getAverage = getAverage;
const GetGrad = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const theClass = req.params.id;
        const StudentAverage = yield (0, actionSerice_js_1.GetAverageGrad)(theClass);
        res.status(200).json(new response_js_1.ResponseStructure(true, StudentAverage, "there is the Average of the student"));
    }
    catch (error) {
        next(error);
    }
});
exports.GetGrad = GetGrad;
const AddGrad = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const theStudent = req.body;
        const student = yield (0, actionSerice_js_1.AddGradToStudent)(theStudent, req.params.id);
        res.status(200).json(new response_js_1.ResponseStructure(true, student));
    }
    catch (error) {
        next(error);
    }
});
exports.AddGrad = AddGrad;
const editGrad = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const theStudent = req.body;
        const student = yield (0, actionSerice_js_1.editGradToStudent)(theStudent, req.params.id);
        res.status(200).json(new response_js_1.ResponseStructure(true, student));
    }
    catch (error) {
        next(error);
    }
});
exports.editGrad = editGrad;
