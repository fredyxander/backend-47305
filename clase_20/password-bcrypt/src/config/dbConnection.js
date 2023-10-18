import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/loginDB');
        console.log('base de datos conectada exitosamente');
    } catch (error) {
        console.log(`error al conectar la base de datos ${error.message}`);
    }
};