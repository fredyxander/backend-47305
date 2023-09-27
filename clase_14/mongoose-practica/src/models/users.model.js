import mongoose from "mongoose";

const usersCollection = "users";//nombre de la colección

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true, //campo obligatorio
    },
    last_name:String, //campo opcional, de tipo String
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:String,
});

//el modelo nos sirve para realiza operaciones sobre la coleccion users
export const usersModel = mongoose.model(usersCollection,userSchema);