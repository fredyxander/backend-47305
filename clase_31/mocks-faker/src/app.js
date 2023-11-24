import express from "express";

import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.use("/api/users", usersRouter);