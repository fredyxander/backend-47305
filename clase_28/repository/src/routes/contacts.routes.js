import { Router } from "express";
import { contactsService } from "../repository/index.js";

const router = Router();

router.get("/",async (req,res)=>{
    const result = await contactsService.getContacts();
    res.json({status:"success", data: result});
});

router.post("/", async(req,res)=>{
    try {
        const newContact = req.body;
        const result = await contactsService.createContact(newContact);
        res.json({status:"success", data: result});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.get("/:id", async(req,res)=>{
    const userId = req.params.id;
    const result = await contactsDao.getOne(userId);
    res.json({status:"success", data: result});
    // const resultDto = new GetContactDto(result);
    // res.json({status:"success", data: resultDto});
});

export {router as contactsRouter};