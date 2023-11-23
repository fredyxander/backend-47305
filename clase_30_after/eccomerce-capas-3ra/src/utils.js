import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from "bcrypt";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

export const inValidPassword = (password,user)=>{
    return bcrypt.compareSync(password,user.password);
};