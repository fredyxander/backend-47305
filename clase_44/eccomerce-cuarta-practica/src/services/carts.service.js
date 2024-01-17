import { cartsDao } from "../dao/index.js"

export class CartsService{
    static getCarts = ()=>{
        return cartsDao.getCarts();
    };

    static getCartById = (cartId)=>{
        return cartsDao.getCartById(cartId)
    };

    static createCart = ()=>{
        return cartsDao.createCart();
    };

    static addProduct = (cartId, productId)=>{
        return cartsDao.addProduct(cartId,productId);
    };

    static deleteProduct = (cartId, productId)=>{
        return cartsDao.deleteProduct(cartId, productId);
    };

    static updateProductCart = (cartId, productId, newQuantity)=>{
        return cartsDao.updateProductCart(cartId, productId, newQuantity);
    };
}