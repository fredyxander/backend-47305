import mongoose from "mongoose";

const usersCollection = "users";

const userSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    correo:{type:String,required:true, unique:true},
    rol:{type:String},
    pedidos:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"orders"
            }
        ],
        default:[]
    }
});

export const usersModel = mongoose.model(usersCollection,userSchema);