import usersModel from "../models/Users.js";
import { createHash, passwordValidation } from "../utils.js";

const registerUser = async(req,res) =>{
    const {first_name,last_name,email,password} = req.body;
    console.log(`Registering ${first_name} ${last_name} email: ${email} and pwd: ${password}`)
    if(!first_name||!last_name||!email||!password) return res.status(400).send({status:"error",error:"Incomplete values"})
    const exists = await usersModel.findOne({email});
    if(exists) return res.status(400).send({status:"error",error:"User already exists"});
    const hashedPassword = await createHash(password);
    const user = {
        first_name,
        last_name,
        email,
        password: hashedPassword
    }
    await usersModel.create(user);
    res.send({status:"success",message:"Registered"})
}

const loginUser = async(req,res) =>{
    const {email,password} = req.body;
    if(!email||!password) return res.status(400).send({status:"error",error:"Incomplete vlaues"});
    const user = await usersModel.findOne({email});
    if(!user) return res.status(404).send({status:"error",error:"User not found"});
    const isValidPassword = await passwordValidation(user,password);
    if(!isValidPassword) return res.status(400).send({status:"error",error:"Incorrect password"});
    console.log(`El ingreso de ${email} fue satisfactorio`)
    res.send({status:"success",message:"logged in"})
}

export default {
    loginUser,
    registerUser
}