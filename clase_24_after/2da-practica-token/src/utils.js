import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

export const inValidPassword = (password,user)=>{
    return bcrypt.compareSync(password,user.password);
};

export const PRIVATE_KEY="coderSecretToken";

export const generateToken = (user)=>{
    const token = jwt.sign({first_name:user.first_name,email:user.email,role:user.role}, PRIVATE_KEY, {expiresIn:"24h"});
    return token;
};