import mongoose from "mongoose";

const businessCollection = "business";

const businessSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    productos:[]
});

export const businessModel = mongoose.model(businessCollection,businessSchema);