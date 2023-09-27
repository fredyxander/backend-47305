import { Router } from "express";
import { usersModel } from "../models/users.model.js";

const router = Router();

router.get("/", async(req,res)=>{
    try {
        const users = await usersModel.find();
        res.json({status:"success", data:users});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message:"No se pudo obtener los usuarios"})
    }
});

router.post("/", async(req,res)=>{
    try {
        const userInfo = req.body;
        const userCreated = await usersModel.create(userInfo);
        res.json({status:"success", data:userCreated});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message:"No se pudo crear el usuario"})
    }
});

export { router as usersRouter};