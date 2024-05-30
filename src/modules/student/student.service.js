import Student from "./student.model.js";

const createStudentIntoDB = async (student) => {
    // static metthod
    const existingStudent = await Student.isUserExist(student.id);
    if (existingStudent) {
        throw new Error(`User already exists`);
    }

    //create user
    const newUser = await Student.create(student);

    return newUser;
    // instance metthod
    // const user = new Student(student);
    // if (await user.isUserExist(student.id)) {
    //     throw new Error(`User already exists`);
    // }
    // const res = await user.save();
    // return res;
};

const getAllStudentFromDB = async () => {
    const result = await Student.aggregate([
        {
            $lookup: {
                from: "roles",
                localField: "role",
                foreignField: "_id",
                as: "role",
            },
        },
        {
            $unwind: {
                path: "$role",
            },
        },
        {
            $addFields: {
                role: "$role.name",
            },
        },
        {
            $project: {
                _id: 1,
                name: 1,
                email: 1,
                role: 1,
            },
        },
    ]);

    return result;
};

const getSingleStudentFromDB = async (id) => {
    const result = await Student.findOne({ _id: id });

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
    createStudentIntoDB,
    getAllStudentFromDB,
    getSingleStudentFromDB,
    deleteStudentFromDB,
};
