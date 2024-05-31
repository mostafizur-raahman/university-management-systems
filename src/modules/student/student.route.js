import express from "express";
import { StudentController } from "./student.controller.js";
import auth from "../../app/middleware/auth.js";

const router = express.Router();

router.post("/create-user", StudentController.createUser);
router.post("/login", StudentController.login);

router.get("/all", auth, StudentController.getAllUser);
router.get("/single", StudentController.getSingleUser);
router.delete("/delete", StudentController.deleteUser);

export const StudentRoutes = router;
