import express from "express";
import { StudentController } from "./student.controller.js";

const router = express.Router();

router.post("/create-student", StudentController.createStudent);
router.get("/get-all-student", StudentController.getAllStudent);

export const StudentRoutes = router;
