import express from "express";
import cors from "cors";
import { ProductManagerFiles } from "./persistence/productManagerFiles.js";

const managerProductService = new ProductManagerFiles("./src/files/products.json");
console.log(managerProductService);

const port = 8080;
const app = express();

app.use(cors());

app.listen(port,()=>console.log("Servidor Funcionando"));

//rutas del servidor
app.get("/products", async(req,res)=>{
    try {
        // const limit = req.query.limit;
        const { limit } = req.query;
        const limitNumber = parseInt(limit);
        const products = await managerProductService.getProducts();
        if(limit){
            // [1,2,3,4,5] => slice [1,2,3]
            const productsLimit = products.slice(0,limitNumber);
            res.send(productsLimit);
        } else {
            res.send(products);
        }
    } catch (error) {
        res.send(error.message);
    }
});