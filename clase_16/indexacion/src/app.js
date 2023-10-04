import express from "express";
import { connectDB } from "./config/dbConnection.js";
import { usersModel } from "./models/users.model.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log('Servidor ejecutandose'));
connectDB();

app.get("/", async(req,res)=>{
    try {
        const result = await usersModel.find({email:"kaudeniscn@prlog.org"}).explain("executionStats");
        res.json({status:"success", data:result});
    } catch (error) {
        res.json({status:"error", message:"No se pudo hacer la consulta"});
    }
});