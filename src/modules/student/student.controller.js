import { StudentServices } from "./student.service.js";

const createStudent = async (req, res) => {
    try {
        const student = req.body;

        // will call sevice method
        const result = await StudentServices.createStudentIntoDB(student);

        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
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
