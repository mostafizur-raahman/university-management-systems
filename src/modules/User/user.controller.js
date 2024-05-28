import sendResponse from "../../app/utils/sendResponse.js";
import studentValidationSchema from "../student/student.validation.js";
import { UserServices } from "./user.service.js";

const createStudent = async (req, res, next) => {
    try {
        const { password, student } = req.body;

        //  validation schema
        const { error, value } = studentValidationSchema.validate(student);

        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        // will call sevice method
        const result = await UserServices.createStudentIntoDB(password, value);

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

export const UserController = {
    createStudent,
};
