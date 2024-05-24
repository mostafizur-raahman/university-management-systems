import Student from "./student.model.js";

const createStudentIntoDB = async (student) => {
    // static metthod
    const existingStudent = await Student.isUserExist(student.id);
    if (existingStudent) {
        throw new Error(`User already exists`);
    }
    const result = await Student.create(student);
    return result;

    // instance metthod
    // const user = new Student(student);
    // if (await user.isUserExist(student.id)) {
    //     throw new Error(`User already exists`);
    // }
    // const res = await user.save();
    // return res;
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
