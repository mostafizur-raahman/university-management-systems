import express from "express";
import { StudentController } from "./student.controller.js";

const router = express.Router();

router.get("/all", StudentController.getAllStudent);
router.get("/single", StudentController.getSingleStudent);
router.delete("/delete", StudentController.deleteStudent);

export const StudentRoutes = router;
