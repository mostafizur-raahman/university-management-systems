import Student from "./student.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../app/config/index.js";

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

const loginStudent = async (email, password) => {
    const user = await Student.findOne({ email: email });

    if (!user) {
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: user._id }, config.jwt_secret_key, {
        expiresIn: config.jwt_expires_in,
    });

    return token;
};
export const StudentServices = {
    createStudentIntoDB,
    getAllStudentFromDB,
    getSingleStudentFromDB,
    deleteStudentFromDB,
    loginStudent,
};
