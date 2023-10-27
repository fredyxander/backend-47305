import { Router } from "express";

const router = Router();

let pets = [];

router.param("pet",(req,res,next,petName)=>{
    const regValidation = /^[a-zA-Z\s]+$/;
    if(regValidation.test(petName)){
        const petFound = pets.find(p=>p.name === petName);
        if(!petFound){
            req.pet=null;
        } else {
            req.pet = petFound;
        }
    } else {
        req.pet = null;
    }
    next();
});

router.post("/",(req,res)=>{
    const petInfo = req.body;
    pets.push(petInfo);
    res.send(pets);
});

router.get("/:pet", (req,res)=>{
    if(req.pet){
        res.send(req.pet)
    } else {
        res.json({message:"El parametro no es valido"});
    }
});

router.put("/:pet",(req,res)=>{
    if(req.pet){
        req.pet.adopted=true;
        res.send(req.pet)
    } else {
        res.send("El parametro no es valido");
    }
});

router.delete("/:pet",(req,res)=>{
    if(req.pet){
        const newPets = pets.filter(p=>p.name !== req.pet.name);
        pets=newPets;
        res.send("mascota eliminada");
    } else {
        res.send("El parametro no es valido");
    }
});

export {router as petsRouter}