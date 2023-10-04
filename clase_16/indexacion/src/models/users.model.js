import mongoose from "mongoose";

const usersCollection = "users";

const userSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:{
        type:String,
        index:true
    },
    gender:String
});

export const usersModel = mongoose.model(usersCollection,userSchema);