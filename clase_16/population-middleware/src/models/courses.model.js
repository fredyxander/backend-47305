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

courseSchema.pre(["find", "findOne"], function(next){
    this.populate("courseStudents");
    // this.populate({ path: 'courseStudents', select: 'email' }); //seleccionando solo ciertos campos del documento
    next();
});

export const coursesModel = mongoose.model(coursesCollection, courseSchema);