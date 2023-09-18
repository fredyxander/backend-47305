import { Router } from "express";
import { productsService } from "../persistence/index.js";

const router = Router();

router.get("/", async(req,res)=>{
    const products = await productsService.getProducts();
    console.log("products",products);
    res.render("home",{products:products});
});

router.get("/realtimeproducts", (req,res)=>{
    res.render("realTime");
});

export {router as viewsRouter}