import Joi from "joi";

const studentValidationSchema = new Joi.object({
    id: Joi.string().required(),
    name: Joi.object({
        firstName: Joi.string().min(2).required(),
        middleName: Joi.string().optional(),
        lastName: Joi.string().min(2).required(),
    }).required(),
    gender: Joi.string().valid("Male", "Female").required(),
    dob: Joi.string().required(),
    email: Joi.string().email().required(),
    contactNo: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    bloodGroup: Joi.string()
        .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
        .required(),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: Joi.object({
        fatherName: Joi.string().required(),
        motherName: Joi.string().required(),
        fatherContactNo: Joi.string().required(),
        motherContactNo: Joi.string().required(),
        fatherEmail: Joi.string().email().required(),
        motherEmail: Joi.string().email().required(),
    }).required(),
    profileImage: Joi.string().required(),
    isActive: Joi.string().valid("Active", "Inactive").default("Active"),
    isDeleted: Joi.boolean().default(false),
});

export default studentValidationSchema;
