import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect("URL MONGO");
        console.log("Base de datos conectada exitosamente");
    } catch (error) {
        console.log(`Hubo un error al conectar la base de datos ${error.message}`);
    }
};