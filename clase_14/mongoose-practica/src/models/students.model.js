import mongoose from "mongoose";

const studentsCollection = "students";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    dni:{
        type:Number,
        required:true,
        unique:true
    },
    course:{
        type:String,
        required:true
    },
    grade:{
        type:Number,
        required:true
    }
});

export const studentsModel = mongoose.model(studentsCollection, studentSchema);