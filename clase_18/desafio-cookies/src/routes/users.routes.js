import { Router } from "express";

const router = Router();

router.post("/create-cookie", (req,res)=>{
    const info = req.body;
    res.cookie("user",info,{maxAge:10000}).send("Informacion recibida");
});

export {router as usersRouter}