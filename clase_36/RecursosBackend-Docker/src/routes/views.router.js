import { Router } from "express";
import usersModel from "../models/User.js";

const router = Router();

router.get('/',(req,res)=>{
    res.render('home');
})

router.get('/users', async (req,res)=>{
    const result = await usersModel.find().lean();
    res.render('users',{users:result})
})

export default router;