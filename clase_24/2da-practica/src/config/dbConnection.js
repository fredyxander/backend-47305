import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect('url mongo');
        console.log('base de datos conectada exitosamente');
    } catch (error) {
        console.log(`error al conectar la base de datos ${error.message}`);
    }
};