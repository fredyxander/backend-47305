import { Router } from "express";

const router = Router();

let pets = [];

router.get("/",(req,res)=>{
    res.json({data:pets});
});

export { router as petsRouter};