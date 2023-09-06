import { Router } from "express";

const router = Router();

let pets = [];

const userRole = 'admin';
//middleware de endpoint
const IsAdmin = (req,res,next)=>{
    console.log("middlewares de endpoint");
    if(userRole === "user"){
        res.send('No tienes permisos');
    } else {
        req.IsAdmin=true;
        next();
    }
};

router.get("/",(req,res)=>{
    res.json({data:pets});
});

router.post("/", IsAdmin , (req,res)=>{
    console.log("post pets", req);
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