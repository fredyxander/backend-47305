import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        persistence: process.env.PERSISTENCE,
    },
    mongo:{
        url:process.env.MONGO_URL
    },
    auth:{}
};