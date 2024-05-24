import Joi from "joi";

// Define Joi validation schema
const userValidationSchema = Joi.object({
    id: Joi.string().required().messages({
        "string.empty": "ID is required.",
        "any.required": "ID is a required field.",
    }),
    password: Joi.string().min(4),
    needPasswordChange: Joi.boolean().default(true),
    role: Joi.string()
        .valid("student", "faculty", "admin")
        .required()
        .messages({
            "any.only": "Role must be one of [student, faculty, admin].",
            "any.required": "Role is a required field.",
        }),
    status: Joi.string()
        .valid("Active", "Inactive")
        .default("Active")
        .messages({
            "any.only": "Status must be one of [Active, Inactive].",
        }),
    isDeleted: Joi.boolean().default(false),
});

export default userValidationSchema;
