import express from "express";

import { petsRouter } from "./routes/pets.routes.js";

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>console.log("servidor ok"));

app.use("/api/pets", petsRouter);