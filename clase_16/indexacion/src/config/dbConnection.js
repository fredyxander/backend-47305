import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect("URL MONGO");
        console.log("base de datos conectada");
    } catch (error) {
        console.log(`Hubo un error al conectar la base de datos ${error.message}`);
    }
};