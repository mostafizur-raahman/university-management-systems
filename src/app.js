import express from "express";
import cors from "cors";
import { StudentRoutes } from "./modules/student/student.route.js";
import { UserRoutes } from "./modules/User/user.route.js";

const app = express();

app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app;
