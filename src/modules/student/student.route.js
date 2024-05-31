import express from "express";
import { StudentController } from "./student.controller.js";
import auth from "../../app/middleware/auth.js";

const router = express.Router();

router.post("/create-student", StudentController.createStudent);
router.post("/login", StudentController.login);

router.get("/all", auth, StudentController.getAllStudent);
router.get("/single", StudentController.getSingleStudent);
router.delete("/delete", StudentController.deleteStudent);

export const StudentRoutes = router;
