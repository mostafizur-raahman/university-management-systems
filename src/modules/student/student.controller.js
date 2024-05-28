import sendResponse from "../../app/utils/sendResponse.js";
import { StudentServices } from "./student.service.js";

const getAllStudent = async (req, res, next) => {
    try {
        const result = await StudentServices.getAllStudentFromDB();
        console.log("all");
        res.status(200).json({
            success: true,
            message: "Student fetched successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getSingleStudent = async (req, res, next) => {
    try {
        const id = req.query.id;
        console.log("Student", id);

        const result = await StudentServices.getSingleStudentFromDB(id);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Student fetched successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const deleteStudent = async (req, res, next) => {
    try {
        const id = req.query.id;

        await StudentServices.deleteStudentFromDB(id);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Student delete successfully",
        });
    } catch (error) {
        next(error);
    }
};
export const StudentController = {
    getAllStudent,
    getSingleStudent,
    deleteStudent,
};
