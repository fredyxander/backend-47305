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

    static createProduct = async(req,res, next)=>{
        try {
            // console.log(req.user);
            const productInfo = req.body;
            productInfo.owner = req.user._id;
            const result = await ProductsService.createProduct(productInfo);
            res.json({status:"success",result});
        } catch (error) {
            // res.json({status:"error", message:error.message});
            next(error);
        } finally {

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

    static deleteProduct = async(req,res)=>{
        try {
            const productId = req.params.pid;
            const product = await ProductsService.getProduct(productId);
            if((req.user.role === "premium" && product.owner.toString() === req.user._id.toString()) || req.user.role === "admin"){
                await ProductsService.deleteProduct(productId);
                res.json({status:"success",message:"producto eliminado"});
            } else {
                res.json({status:"error",message:"No tienes permisos para eliminar este producto"});
            }
        } catch (error) {
            res.json({status:"error",message:error.message});
        }
    };
}