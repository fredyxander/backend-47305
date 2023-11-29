import express from "express";
import { errorHandler } from "./middlewares/errorHandler.js";

import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

app.use(express.json());

app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.use("/api/users", usersRouter);
app.use(errorHandler);