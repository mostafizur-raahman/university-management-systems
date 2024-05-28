import catchAsync from "../../app/utils/catchAsync.js";
import sendResponse from "../../app/utils/sendResponse.js";
import { StudentServices } from "./student.service.js";

const getAllStudent = catchAsync(async (req, res, next) => {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
        success: true,
        message: "Student fetched successfully",
        data: result,
    });
});

const getSingleStudent = catchAsync(async (req, res, next) => {
    const id = req.query.id;
    console.log("Student", id);

    const result = await StudentServices.getSingleStudentFromDB(id);
    console.log("Student", result);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Student fetched successfully",
        data: result,
    });
});

const deleteStudent = catchAsync(async (req, res, next) => {
    const id = req.query.id;

    await StudentServices.deleteStudentFromDB(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Student delete successfully",
    });
});
export const StudentController = {
    getAllStudent,
    getSingleStudent,
    deleteStudent,
};
