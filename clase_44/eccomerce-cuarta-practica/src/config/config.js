import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        env:process.env.NODE_ENVIRONMENT || "development"
    },
    mongo:{
        url:process.env.MONGO_URL
    },
    gmail:{
        account: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASS,
        secretToken: process.env.TOKEN_EMAIL
    }
};