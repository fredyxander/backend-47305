import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productsCollection = "products";

const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
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
    }
});
productsSchema.plugin(mongoosePaginate);

export const productsModel = mongoose.model(productsCollection,productsSchema);