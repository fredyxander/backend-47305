import { Router } from "express";

const ongsRouter = Router();

ongsRouter.get("/",(req,res)=>{
    res.json({data:[]})
});

export {ongsRouter};