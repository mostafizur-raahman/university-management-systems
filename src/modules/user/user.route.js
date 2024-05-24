import express from "express";

const router = express.Router();

router.post("/create-student", StudentController.createStudent);

export const UserRoutes = router;
