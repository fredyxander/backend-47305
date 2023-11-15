import { ProductsService } from "../services/products.service.js";
import { CartsService } from "../services/carts.service.js";

export class CartsController{
    static getcarts = async(req,res)=>{
        try {
            const carts = await CartsService.getCarts();
            res.json({status:"success", data:carts});
        } catch (error) {
            res.json({error:error.message});
        }
    };

    static getCart = async(req,res)=>{
        try {
            const cartId = req.params.cid;
            const cart = await CartsService.getCartById(cartId);
            res.json({status:"success", data: cart});
        } catch (error) {
            res.json({error:error.message});
        }
    };

    static createCart = async(req,res)=>{
        try {
            const cartCreated = await CartsService.createCart();
            res.json({status:"success",data: cartCreated});
        } catch (error) {
            res.json({status:"error",error:error.message});
        }
    };

    static addProductToCart = async(req,res)=>{
        try {
            const {cid:cartId,pid:productId} = req.params;
            const cart = await CartsService.getCartById(cartId);
            const product = await ProductsService.getProduct(productId);
            const result = await CartsService.addProduct(cartId,productId);
            res.json({status:"success", result});
        } catch (error) {
            res.json({error:error.message});
        }
    };

    static deleteProductCart = async(req,res)=>{
        try {
            const {cid:cartId,pid:productId} = req.params;
            const cart = await CartsService.getCartById(cartId);
            const result = await CartsService.deleteProduct(cartId, productId);
            res.json({status:"success", result});
        } catch (error) {
            res.json({error:error.message});
        }
    };

    static updateProductCart = async(req,res)=>{
        try {
            const {cid:cartId,pid:productId} = req.params;
            const {newQuantity} = req.body;
            const cart = await CartsService.getCartById(cartId);
            const result = await CartsService.updateProductCart(cartId,productId,newQuantity);
            res.json({status:"success", result});
        } catch (error) {
            res.json({error:error.message});
        }
    };
}