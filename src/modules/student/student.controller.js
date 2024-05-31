import catchAsync from "../../app/utils/catchAsync.js";
import sendResponse from "../../app/utils/sendResponse.js";
import { StudentServices } from "./student.service.js";
import studentValidationSchema from "./student.validation.js";

const createStudent = async (req, res, next) => {
    try {
        //  validation schema
        const { error, value } = studentValidationSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        // will call sevice method
        const result = await StudentServices.createStudentIntoDB(value);

        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "Student created successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

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

const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const result = await StudentServices.loginStudent(email, password);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Login successfully",
        data: result,
    });
});
export const StudentController = {
    createStudent,
    getAllStudent,
    getSingleStudent,
    deleteStudent,
    login,
};
