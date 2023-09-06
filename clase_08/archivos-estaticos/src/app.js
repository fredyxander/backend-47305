import express from "express";

import {usersRouter} from "./routes/users.routes.js";
import {petsRouter} from "./routes/pets.routes.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log("Server ok"));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/users",usersRouter);
app.use("/api/pets", petsRouter);