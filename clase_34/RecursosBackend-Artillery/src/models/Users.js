import mongoose from 'mongoose';

const collection = "Users";

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String
})

const usersModel = mongoose.model(collection,schema);

export default usersModel;