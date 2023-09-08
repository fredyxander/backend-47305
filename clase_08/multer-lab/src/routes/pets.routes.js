import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();

let pets = [];

//rutas para obtener mascotas
router.get("/",(req,res)=>{
    res.json({data:pets});
});

//rutas para crear mascota con imagen
router.post("/", uploader.single("file"), (req,res)=>{
    const petInfo = req.body;
    if(!petInfo.name){
        res.json({error:"Informacion incompleta"});
    } else {
        console.log("petInfo",petInfo);
        console.log('req.file', req.file);
        petInfo.thumbnail=req.file.filename;
        pets.push(petInfo);
        res.json({message:"mascota creada"});
    }
});

export { router as petsRouter};