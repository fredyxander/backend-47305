import { productsDao } from "../dao/index.js";
import { CustomError } from "./errors/customError.service.js";
import { EError } from "../enums/EError.js";

export class ProductsService {
    static getProducts = ()=>{
        return productsDao.getProducts();
    };

    static createProduct = async(productInfo)=>{
        try {
            const result = await productsDao.createProduct(productInfo);
            if(result?.status === "error"){
                // console.log(result.error.message);
                // console.log(result.error.message.split(": "));
                CustomError.createError({
                    name:"Create product error",
                    cause: result.error.message.split(": ")[2],
                    message:"Datos invalidos para crear el producto",
                    errorCode: EError.INVALID_BODY_JSON
                });
            }else {
                return result;
            }
        } catch (error) {
            throw error;
        }
    };

    static getProduct = (productId)=>{
        return productsDao.getProductById(productId);
    };

    static getProductsPaginate = (query,options)=>{
        return productsDao.getProductsPaginate(query, options);
    };
}