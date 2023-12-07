import { ProductsService } from "../services/products.service.js";
import { EError } from "../enums/EError.js";
import { CustomError } from "../services/errors/customError.service.js";
import { productCreateError} from "../services/errors/productCreateError.service.js";

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
            const productInfo = req.body;
            const {title} = productInfo;
            // throw new Error("error de prueba");
            // if(!title){
            //     CustomError.createError({
            //         name:"Create product error",
            //         cause: productCreateError(productInfo),
            //         message:"Datos invalidos para crear el producto",
            //         errorCode: EError.INVALID_BODY_JSON
            //     });
            // }
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
}