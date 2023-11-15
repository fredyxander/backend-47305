import mongoose from "mongoose";

const contactsCollection = "contacts";

const contactSchema = new mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    }
});

export const contactsModel = mongoose.model(contactsCollection,contactSchema);