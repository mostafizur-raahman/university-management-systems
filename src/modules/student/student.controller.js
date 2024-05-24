import { StudentServices } from "./student.service.js";
import studentValidationSchema from "./student.validation.js";

const createStudent = async (req, res) => {
    try {
        const student = req.body;

        //  validation schema
        const { error, value } = studentValidationSchema.validate(student);

        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        // will call sevice method
        const result = await StudentServices.createStudentIntoDB(value);

        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllStudent = async (req, res) => {
    try {
        const result = await StudentServices.getAllStudentFromDB();
        console.log("all");
        res.status(200).json({
            success: true,
            message: "Student fetched successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const getSingleStudent = async (req, res) => {
    try {
        const id = req.query.id;
        console.log("Student", id);

        const result = await StudentServices.getSingleStudentFromDB(id);

        res.status(200).json({
            success: true,
            message: "Student fetched successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

export const StudentController = {
    createStudent,
    getAllStudent,
    getSingleStudent,
};
