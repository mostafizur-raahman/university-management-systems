import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            default: "GUB123",
        },
        needPasswordChange: {
            type: Boolean,
            default: true,
        },
        role: {
            type: String,
            enum: ["student", "faculty", "admin"],
        },
        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active",
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const User = model("User", userSchema);

export default User;
