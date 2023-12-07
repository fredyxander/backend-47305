import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        env:process.env.NODE_ENVIRONMENT || "development"
    },
    mongo:{
        url:process.env.MONGO_URL
    }
};