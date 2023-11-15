import { ProductsService } from "../services/products.service.js";

export class ProductsController{
    static getProducts = async(req,res)=>{
        try {
            const products = await ProductsService.getProducts();
            res.json({message:"endpoint para obtener los productos", data:products});
        } catch (error) {
            res.json({status:"error",message:error.message});
        }
    };

    static createProduct = async(req,res)=>{
        try {
            const productInfo = req.body;
            const result = await ProductsService.createProduct(productInfo);
            res.json({status:"success",result});
        } catch (error) {
            res.json({status:"error",message:error.message});
        }
    };

    static getProduct = async(req,res)=>{
        try {
            const productId = req.params.pid;
            const product = await ProductsService.getProduct(productId);
            res.json({message:"endpoint para obtener un producto", data:product});
        } catch (error) {
            res.json({status:"error",message:error.message});
        }
    };
}