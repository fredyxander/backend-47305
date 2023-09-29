import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect('url mongo');
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(`hubo un error conectando la base de datos: ${error.message}`);
    }
};