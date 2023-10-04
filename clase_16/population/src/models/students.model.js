import mongoose from "mongoose";

const studentsCollection = "students"; //nombre de la collecion

const studenSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    }
});

export const studentsModel = mongoose.model(studentsCollection, studenSchema);