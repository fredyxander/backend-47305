import mongoose from "mongoose";

const ordersCollection = "orders";

const orderSchema = new mongoose.Schema({
    negocio:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"business"
    },
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    productos:[],
    precioTotal:{type:Number, required:true},
    estado:{type:String, enum:["completada", "cancelada", "en proceso"], default:"en proceso"}
});

export const ordersModel = mongoose.model(ordersCollection,orderSchema);