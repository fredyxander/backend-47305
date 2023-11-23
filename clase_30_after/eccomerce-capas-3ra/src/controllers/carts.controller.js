import { ProductsService } from "../services/products.service.js";
import { CartsService } from "../services/carts.service.js";
import {v4 as uuidv4} from 'uuid';

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

    static purchaseCart = async(req,res)=>{
        try {
            const {cid: cartId} = req.params;
            const cart = await CartsService.getCartById(cartId);
            // console.log(cart);
            if(cart.products.length){
                const ticketProducts=[];
                const rejectedProducts=[];
                //verificar el stock de cada producto
                for(let i=0;i<cart.products.length;i++){
                    const cartProduct =cart.products[i];
                    const productInfo = cartProduct.productId;
                    // console.log(productInfo)
                    //por cada producto comparar quantity con el stock
                    if(cartProduct.quantity <= productInfo.stock){
                        ticketProducts.push(cartProduct);
                    } else {
                        rejectedProducts.push(cartProduct);
                    }
                };
                console.log("ticketProducts",ticketProducts);
                console.log("rejectedProducts",rejectedProducts);
                const newTicket = {
                    code:uuidv4(),
                    purchase_datetime: new Date(),
                    amount:100,
                    purchaser:req.user.email
                };
                console.log("newTicket",newTicket);
                //crear el ticket en base de datos.
                //actualizar el carrito del usuario con los productos rechazados
                res.json({status:"success", message:"Compra realizada, algunos productos no se pudieron comprar por falta de stock", rejectedProducts});
            } else {
                res.json({status:"error", message:"El carrito esta vacio"});
            }
        } catch (error) {
            res.json({error:error.message});
        }
    };
}