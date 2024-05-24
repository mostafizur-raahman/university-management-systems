import Student from "./student.model.js";

const createStudentIntoDB = async (student) => {
    const result = await Student.create(student);

    return result;
};

const getAllStudentFromDB = async () => {
    const result = await Student.find({});

    return result;
};

const getSingleStudentFromDB = async (id) => {
    const result = await Student.findOne({ id: id });

    return result;
};

export const StudentServices = {
    createStudentIntoDB,
    getAllStudentFromDB,
    getSingleStudentFromDB,
};
