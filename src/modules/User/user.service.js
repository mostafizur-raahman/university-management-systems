import config from "../../app/config/index.js";
import Student from "../student/student.model.js";
import User from "./user.model.js";

const createStudentIntoDB = async (password, student) => {
    // static metthod
    // const existingStudent = await Student.isUserExist(student.id);
    // if (existingStudent) {
    //     throw new Error(`User already exists`);
    // }
    let user = {};

    user.password = password || config.default_pass;

    // set student role
    user.role = "student";
    user.id = "202510001";

    //create user
    const newUser = await User.create(user);

    // create student
    if (Object.keys(newUser)) {
        // set id , _id as user
        student.id = newUser.id;
        student.user = newUser._id;

        const newStudent = await Student.create(student);
        return newStudent;
    }

    // instance metthod
    // const user = new Student(student);
    // if (await user.isUserExist(student.id)) {
    //     throw new Error(`User already exists`);
    // }
    // const res = await user.save();
    // return res;
};

export const UserServices = {
    createStudentIntoDB,
};
