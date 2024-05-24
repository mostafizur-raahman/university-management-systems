import { StudentServices } from "./student.service.js";

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

const deleteStudent = async (req, res) => {
    try {
        const id = req.query.id;

        await StudentServices.deleteStudentFromDB(id);

        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
        });
    } catch (error) {
        console.log(error);
    }
};
export const StudentController = {
    getAllStudent,
    getSingleStudent,
    deleteStudent,
};
