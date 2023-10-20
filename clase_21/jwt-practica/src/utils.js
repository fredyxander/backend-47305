import jwt from "jsonwebtoken";

const PRIVATE_KEY="coderSecretToken";

export const generateToken = (user)=>{
    const token = jwt.sign({name:user.name,email:user.email},PRIVATE_KEY,{expiresIn:"24h"});
    return token;
};

