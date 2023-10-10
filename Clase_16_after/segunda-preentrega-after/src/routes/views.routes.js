import { Router } from "express";
import { productsService } from "../persistence/index.js";

const router = Router();

router.get("/", async(req,res)=>{
    const result = await productsService.getProductsPaginate();
    const dataProducts = {
        status:"success",
        payload: result.docs,
        totalPages: result.totalPages,
    // prevPage: Página anterior
    // nextPage: Página siguiente
    // page: Página actual
    // hasPrevPage: Indicador para saber si la página previa existe
    // hasNextPage: Indicador para saber si la página siguiente existe.
    // prevLink: Link directo a la página previa (null si hasPrevPage=false)
    // nextLink: Link directo a la página siguiente (null si hasNextPage=false)
    }
    console.log(dataProducts);//{status:"sucess", payload:[]}
    res.render("home",dataProducts);
});

router.get("/realtimeproducts", (req,res)=>{
    res.render("realTime");
});

export {router as viewsRouter}