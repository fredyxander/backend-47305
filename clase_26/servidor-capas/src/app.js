import express from "express";

import { toysRouter } from "./routes/toys.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

app.use(express.json());

app.listen(port,()=>console.log(`Servidor ok`));

app.use("/api/toys", toysRouter);
app.use("/api/users", usersRouter);