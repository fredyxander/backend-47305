import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        port: process.env.PORT,
        sessionKey:process.env.SECRET_SESSION
    },
    mongo:{},
    github:{},
    gmail:{
        account:process.env.GMAIL_ACCOUNT,
        password:process.env.GMAIL_PASSWORD
    }
};
