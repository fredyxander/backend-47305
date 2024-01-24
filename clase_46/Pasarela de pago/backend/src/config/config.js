import dotenv from "dotenv";
dotenv.config();

export const config = {
    stripe:{
        secretKey:process.env.STRIPE_SECRET_KEY
    }
};