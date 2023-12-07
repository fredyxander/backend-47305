import express from "express";
import { logger } from "./helpers/logger.js";

const port = 8080;
const app = express();

app.listen(port,()=>logger.info(`Server listening on port ${port}`));

app.get("/",(req,res)=>{
    logger.debug("Este es un mensaje de debug");
    logger.http("Este es un mensaje http");
    logger.warn("Este es un mensaje de advertencia");
    logger.error("Este es un mensaje de error");
    res.send("peticion recibida");
});