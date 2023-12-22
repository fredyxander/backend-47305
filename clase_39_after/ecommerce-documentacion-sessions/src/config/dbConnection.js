import mongoose from "mongoose";
import { config } from "./config.js";
import { logger } from "../helpers/logger.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(config.mongo.url);
        logger.informativo('base de datos conectada exitosamente');
    } catch (error) {
        logger.error(`error al conectar la base de datos ${error.message}`);
    }
};