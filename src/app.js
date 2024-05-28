import express from "express";
import cors from "cors";
import { StudentRoutes } from "./modules/student/student.route.js";
import { UserRoutes } from "./modules/User/user.route.js";
import globalError from "./app/middleware/globalError.js";
import notFound from "./app/middleware/notFound.js";

const app = express();

app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// not found routes
app.use(notFound);

// globel error handlers
app.use(globalError);
export default app;
