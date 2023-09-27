import { Router } from "express";
import { studentsModel } from "../models/students.model.js";

const router = Router();

router.get("/", async(req,res)=>{
    try {
        const students = await studentsModel.find();
        res.json({status:"success", data:students});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message:"No se pudo obtener los estudiantes"})
    }
});

const studentsArray = [
    {name:"Pepe", last_name:"perez", age:20, dni:871623, course:"html", grade:4.0},
    {name:"Luis", last_name:"Diaz", age:24, dni:91236, course:"html", grade:4.3},
    {name:"Juan", last_name:"Morales", age:24, dni:9785687, course:"css", grade:4.3},
]

router.post("/", async(req,res)=>{
    try {
        const result = await studentsModel.insertMany(studentsArray);
        res.json({status:"success", data:result});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message:"No se pudo crear el estudiante"})
    }
});

export { router as studentsRouter};