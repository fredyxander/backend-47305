import { OrdersService } from "../service/orders.service.js";
import {UsersService} from "../service/users.service.js";
import { BusinessService } from "../service/business.service.js";

export class OrdersController{
    static getOrder = async(req,res)=>{
        try {
            const orderId = req.params.oid;
            const result = await OrdersService.getOrder(orderId);
            res.json({status:"success", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };

    static createOrder = async(req,res)=>{
        try {
            const { usuarioId, negocioId, productos} = req.body;
            const user = await UsersService.getUser(usuarioId);
            const business = await BusinessService.getOneBusiness(negocioId);
            //obtener los productos del negocio
            // "productos":[1,3]
            const productsOrder = business.productos.filter(p=>productos.includes(p.id));
            // console.log("productsOrder",productsOrder);
            const total = productsOrder.reduce((acc,i)=>acc+=i.precio,0);
            // console.log("total", total);
            const newOrder = {
                negocio:negocioId,
                usuario: usuarioId,
                productos:productsOrder,
                precioTotal:total,
            }
            const result = await OrdersService.createOrder(newOrder);
            res.json({status:"success", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };

    static modifyStatusOrder = async(req,res)=>{
        try {
            const orderId = req.params.oid;
            const {estado} = req.body;
            const order = OrdersService.getOrder(orderId);
            if(!order){
                return res.json({status:"error", message:"Esta orden no existe"});
            }
            order.estado = estado;
            const result = await OrdersService.modifyStatusOrder(orderId,order);
            res.json({status:"success", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };
}