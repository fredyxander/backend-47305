import { Router } from "express";
import { contactsDao } from "../dao/factory.js";

const router = Router();

router.get("/",async (req,res)=>{
    const result = await contactsDao.getAll();
    res.json({status:"success", data: result});
});

router.post("/", async(req,res)=>{
    const newContact = req.body;
    const result = await contactsDao.create(newContact);
    res.json({status:"success", data: result});
});

router.get("/:id", async(req,res)=>{
    const userId = req.params.id;
    const result = await contactsDao.getOne(userId);
    res.json({status:"success", data: result});
});

export {router as contactsRouter};