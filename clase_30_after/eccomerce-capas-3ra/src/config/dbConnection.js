import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(config.mongo.url);
        console.log('base de datos conectada exitosamente');
    } catch (error) {
        console.log(`error al conectar la base de datos ${error.message}`);
    }
};