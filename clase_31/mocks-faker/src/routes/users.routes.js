import { Router } from "express";
import { generateUser } from "../helpers/mock.js";

const router = Router();

router.get("/",(req,res)=>{
    const cant = parseInt(req.query.cant) || 10;
    let users = [];
    for(let i=0;i<cant;i++){
        const newUser = generateUser();
        users.push(newUser);
    };
    res.json({status:"success", data:users});
});

export {router as usersRouter};