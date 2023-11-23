import { productsDao } from "../dao/index.js";

export class ProductsService {
    static getProducts = ()=>{
        return productsDao.getProducts();
    };

    static createProduct = (productInfo)=>{
        return productsDao.createProduct(productInfo);
    };

    static getProduct = (productId)=>{
        return productsDao.getProductById(productId);
    };

    static getProductsPaginate = (query,options)=>{
        return productsDao.getProductsPaginate(query, options);
    };
}