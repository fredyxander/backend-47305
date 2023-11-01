import { Router } from "express";
import { productsService } from "../persistence/index.js";

const router = Router();

router.get("/", async(req,res)=>{
    const {limit=3,page=1} = req.query;
    const query = {
        // category:"Deportes",
        // stock:5
    };
    const options = {
        limit,
        page,
        sort:{price:1},
        lean:true
    };
    const result = await productsService.getProductsPaginate(query, options);
    //                  http://localhost:8080/
    const baseUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
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
    prevLink: result.hasPrevPage ? `${baseUrl.replace(`page=${result.page}`, `page=${result.prevPage}`)}` : null,
    nextLink: result.hasNextPage ? baseUrl.includes("page") ?
    baseUrl.replace(`page=${result.page}`, `page=${result.nextPage}`) : baseUrl.concat(`?page=${result.nextPage}`) : null
    }
    console.log(dataProducts);//{status:"sucess", payload:[]}
    res.render("home",dataProducts);
});

router.get("/signup",(req,res)=>{
    res.render("signup");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/realtimeproducts", (req,res)=>{
    res.render("realTime");
});

router.get("/profile",(req,res)=>{
    console.log(req.user);
    res.render("profileView",{user:req.user})
});

export {router as viewsRouter}