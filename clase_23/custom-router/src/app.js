import express from "express";

import { UsersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

//middleware
app.use(express.json());

app.listen(port,()=>console.log("Server is listening"));

//instancias de los routers
const usersRouter = new UsersRouter();

//routes
app.use("/api/users",usersRouter.getRouter());