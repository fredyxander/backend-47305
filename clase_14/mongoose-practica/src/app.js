import express from "express";
import { connectDB } from "./config/dbConnection.js";

import { usersRouter } from "./routes/users.routes.js";
import { studentsRouter } from "./routes/students.routes.js";

const port = 8080;
const app = express();

//middlewares
app.use(express.json());

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//conexión base de datos
connectDB();

//routes
app.use("/api/users", usersRouter);
app.use("/api/students", studentsRouter);