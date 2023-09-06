import { Router } from "express";

const router = Router();

let pets = [];

router.get("/",(req,res)=>{
    res.json({data:pets});
});

router.post("/",(req,res)=>{
    const petInfo = req.body;
    if(!petInfo.name){
        res.json({error:"Informacion incompleta"});
    } else {
        console.log("petInfo",petInfo);
        pets.push(petInfo);
        res.json({message:"mascota creada"});
    }
});

export { router as petsRouter};