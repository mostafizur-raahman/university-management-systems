import express from "express";
import { StudentController } from "./student.controller.js";

const router = express.Router();

router.post("/create-student", StudentController.createStudent);
router.get("/all", StudentController.getAllStudent);
router.get("/single", StudentController.getSingleStudent);

export const StudentRoutes = router;
