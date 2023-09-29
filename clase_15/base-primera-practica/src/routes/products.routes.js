import { Router } from "express";
import { productsService } from "../dao/index.js";

const router = Router();

router.get("/",async(req,res)=>{
    try {
        const result = await productsService.getProducts();
        res.json({status:"success", data:result});
    } catch (error) {
        res.status(500).json({status:"error", message:error.message});
    }
});

router.post("/", async(req,res)=>{
    try {
        const product = req.body;
        const result = await productsService.createProduct(product);
        res.json({status:"success", data:result});
    } catch (error) {
        res.status(500).json({status:"error", message:error.message});
    }
});

router.put("/:productId", async(req,res)=>{
    try {
        const product = req.body;
        const productId = req.params.productId;
        const result = await productsService.updateProduct(productId,product);
        res.json({status:"success", data:result});
    } catch (error) {
        res.status(500).json({status:"error", message:error.message});
    }
});

router.delete("/:productId", async(req,res)=>{
    try {
        const productId = req.params.productId;
        const result = await productsService.deleteProduct(productId);
        res.json({status:"success", data:result});
    } catch (error) {
        res.status(500).json({status:"error", message:error.message});
    }
});

export { router as productsRouter};