import mongoose from "mongoose";
import config from "./config.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(config.mongo.URL);
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        console.log(`Error conectando la base de datos ${error.message}`);
    }
};