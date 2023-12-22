import { Router } from "express";
import { cartsService, productsService } from "../persistence/index.js";

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

router.get("/:cid", async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const cart = await cartsService.getCartById(cartId);
        res.json({status:"success", data: cart});
    } catch (error) {
        res.json({error:error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const cartCreated = await cartsService.createCart();
        res.json({status:"success",data: cartCreated});
    } catch (error) {
        res.json({status:"error",error:error.message});
    }
});

router.put("/:cid/product/:pid", async(req,res)=>{
    try {
        const {cid:cartId,pid:productId} = req.params;
        const cart = await cartsService.getCartById(cartId);
        // const product = await productsService.getProductById(productId);
        const result = await cartsService.addProduct(cartId,productId);
        res.json({status:"success", result});
    } catch (error) {
        res.json({error:error.message});
    }
});

router.delete("/:cid/products/:pid", async(req,res)=>{
    try {
        const {cid:cartId,pid:productId} = req.params;
        const cart = await cartsService.getCartById(cartId);
        const result = await cartsService.deleteProduct(cartId, productId);
        res.json({status:"success", result});
    } catch (error) {
        res.json({error:error.message});
    }
});

router.put("/:cid/products/:pid", async(req,res)=>{
    try {
        const {cid:cartId,pid:productId} = req.params;
        const {newQuantity} = req.body;
        const cart = await cartsService.getCartById(cartId);
        const result = await cartsService.updateProductCart(cartId,productId,newQuantity);
        res.json({status:"success", result});
    } catch (error) {
        res.json({error:error.message});
    }
});

export {router as cartsRouter};