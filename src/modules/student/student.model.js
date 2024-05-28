import { Schema, model, connect } from "mongoose";

const studentSchema = new Schema(
    {
        id: { type: String, unique: true },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "user id is required"],
            unique: true,
        },
        name: {
            firstName: { type: String, required: true },
            middleName: { type: String },
            lastName: { type: String, required: true },
        },
        gender: {
            type: String,
            enum: ["Male", "Female"],
            required: true,
        },
        dob: { type: String, required: true },
        email: { type: String, required: true },
        contactNo: { type: String, required: true },
        emergencyContactNo: { type: String, required: true },
        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: true,
        },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true },
        guardian: {
            fatherName: { type: String, required: true },
            motherName: { type: String, required: true },
            fatherContactNo: { type: String, required: true },
            motherContactNo: { type: String, required: true },
            fatherEmail: { type: String, required: true },
            motherEmail: { type: String, required: true },
        },
        profileImage: { type: String, required: true },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

studentSchema.pre("find", async function (next) {
    this.where({ isDeleted: false });
    next();
});

studentSchema.pre("findOne", async function (next) {
    this.where({ isDeleted: false });
    next();
});

studentSchema.pre("aggregate", async function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});

// static properties
studentSchema.statics.isUserExist = async function (id) {
    const result = await Student.findOne({ id: id });
    return result;
};

// instance properties
// studentSchema.methods.isUserExist = async function (id) {
//     const result = await Student.findOne({ id: id });
//     return result;
// };

const Student = model("Student", studentSchema);

export default Student;
