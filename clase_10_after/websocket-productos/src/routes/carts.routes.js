import { Router } from "express";
import { cartsService } from "../persistence/index.js";

const router = Router();

//http://localhost:8080/api/carts
router.get("/", async(req,res)=>{
    try {
        const carts = await cartsService.getCarts();
        res.json({data:carts});
    } catch (error) {
        res.json({error:error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const cartCreated = await cartsService.createCart();
        res.json({data:cartCreated});
    } catch (error) {
        res.json({error:error.message});
    }
});

router.post("/:cid/product/:pid", async(req,res)=>{
    try {
        const cartId = parseInt(req.params.cid);
        const productId = parseInt(req.params.pid);
        
        res.json({message:"peticion recibida"});
    } catch (error) {
        res.json({error:error.message});
    }
});

export {router as cartsRouter};