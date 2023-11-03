import express from "express";
import {fork} from "child_process";
import path from "path";
import {__dirname} from "./utils.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Servidor corriendo en el pueto ${port}`));

app.get("/",(req,res)=>{
    res.send("bienvenido");
});

app.get("/suma", (req,res)=>{
    const child = fork(path.join(__dirname,"/process/childProcess.js"));//creamos el proceso hijo
    child.send("start");//damos inicio al proceso hijo

    //obetenemos el resultado del proceso hijo
    child.on("message",(result)=>{
        res.send(`El resultado de la suma es ${result}`);
    });
});