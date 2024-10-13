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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editGradToStudent = exports.AddGradToStudent = exports.GetAverageUser = exports.GetAverageGrad = exports.GetGradesAverage = exports.GetAllOfTheStudent = void 0;
const userModel_js_1 = __importDefault(require("../models/userModel.js"));
const GetAllOfTheStudent = (classStudent) => __awaiter(void 0, void 0, void 0, function* () {
    if (!classStudent)
        throw new Error("not found name class");
    const allStudent = yield userModel_js_1.default.find({ "class": classStudent });
    if (!allStudent)
        throw new Error("not found Student");
    return allStudent;
});
exports.GetAllOfTheStudent = GetAllOfTheStudent;
const GetGradesAverage = (classStudent) => __awaiter(void 0, void 0, void 0, function* () {
    const allStudent = yield (0, exports.GetAllOfTheStudent)(classStudent);
    if (allStudent) {
        let sum = 0;
        let con = 0;
        allStudent.forEach(student => {
            sum += (0, exports.GetAverageUser)(student);
            con++;
        });
        return sum / con;
    }
    throw new Error("not found Students");
});
exports.GetGradesAverage = GetGradesAverage;
const GetAverageGrad = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id)
        throw new Error("not found id");
    const Student = yield userModel_js_1.default.findOne({ "_id": id });
    if (!Student)
        throw new Error("not found student");
    const average = (0, exports.GetAverageUser)(Student);
    return average;
});
exports.GetAverageGrad = GetAverageGrad;
const GetAverageUser = (user) => {
    if (user.grades) {
        let sum = 0;
        user.grades.forEach(grad => {
            sum += grad.grade;
        });
        return sum / user.grades.length;
    }
    else
        throw Error;
};
exports.GetAverageUser = GetAverageUser;
const AddGradToStudent = (theStudent, id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!theStudent)
        throw new Error("not found id");
    const Student = yield userModel_js_1.default.findOne({ "_id": id });
    if (!Student)
        throw new Error("not found student");
    (_a = Student.grades) === null || _a === void 0 ? void 0 : _a.push(theStudent);
    yield Student.save();
    return Student;
});
exports.AddGradToStudent = AddGradToStudent;
const editGradToStudent = (theStudent, id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!theStudent)
        throw new Error("not found id");
    const Student = yield userModel_js_1.default.findByIdAndUpdate({ _id: id, "grades.subject": theStudent.subject }, { $set: { grads: theStudent.grade } }, { new: true });
    if (!Student)
        throw new Error("not found student");
    yield Student.save();
    return Student;
});
exports.editGradToStudent = editGradToStudent;
