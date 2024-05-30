import { Router } from "express";
import { StudentRoutes } from "../../modules/student/student.route.js";
import { RoleRoutes } from "../../modules/Role/role.route.js";

const router = Router();

router.use("/students", StudentRoutes);
router.use("/roles", RoleRoutes);

export default router;
