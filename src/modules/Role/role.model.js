import { Schema, model } from "mongoose";

const roleSchema = new Schema(
    {
        name: {
            type: String,
            enum: ["student", "faculty", "admin"],
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Role = model("Role", roleSchema);

export default Role;
