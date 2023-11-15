import { Router } from "express";
import { contactsDao } from "../dao/factory.js";
import { CreateContactDto } from "../dao/dto/createContact.dto.js";

const router = Router();

router.get("/",async (req,res)=>{
    const result = await contactsDao.getAll();
    res.json({status:"success", data: result});
});

router.post("/", async(req,res)=>{
    try {
        const newContact = req.body;
        const contactDto = new CreateContactDto(newContact);
        console.log("contactDto",contactDto);
        const result = await contactsDao.create(contactDto);
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