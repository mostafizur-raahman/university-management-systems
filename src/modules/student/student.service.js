import Student from "./student.model.js";

const getAllStudentFromDB = async () => {
    const result = await Student.find({});

    return result;
};

const getSingleStudentFromDB = async (id) => {
    const result = await Student.findOne({ id: id });

    return result;
};

const deleteStudentFromDB = async (id) => {
    const result = await Student.updateOne(
        { _id: id },
        {
            isDeleted: true,
        }
    );

    return result;
};

export const StudentServices = {
    getAllStudentFromDB,
    getSingleStudentFromDB,
    deleteStudentFromDB,
};
