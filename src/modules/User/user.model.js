import { Schema, model } from "mongoose";
import config from "../../app/config/index.js";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        password: {
            type: String,
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

userSchema.pre("save", async function (next) {
    const user = this;
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_SALT_ROUNDS)
    );
    next();
});

// post save middleware
userSchema.post("save", function (doc, next) {
    doc.password = "";
    next();
});

const User = model("User", userSchema);

export default User;
