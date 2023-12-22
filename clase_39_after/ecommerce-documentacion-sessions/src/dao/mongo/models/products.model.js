import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productsCollection = "products";

const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "El campo title es obligatorio"]
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    code:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true,
        enum:["Ropa","Deportes","Tecnología"]
    },
    stock:{
        type:Number,
        required:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
});
productsSchema.plugin(mongoosePaginate);

export const productsModel = mongoose.model(productsCollection,productsSchema);