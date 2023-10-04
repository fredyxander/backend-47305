import mongoose from "mongoose";

const coursesCollection = "courses";

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    courseStudents:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"students", //nombre de la coleccion donde estan almacenados los estudiantes
            }
        ],
        default:[]
    }
});

// {
//     title:"html",
//     courseStudents:[{},{},{}]
// }

export const coursesModel = mongoose.model(coursesCollection, courseSchema);