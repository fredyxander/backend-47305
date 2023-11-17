import { ordersDao } from "../dao/index.js";

export class OrdersService{
    static getOrder = (id)=>{
        return ordersDao.getById(id)
    };

    static createOrder = (order)=>{
        return ordersDao.create(order);
    };

    static modifyStatusOrder = (id, order)=>{
        return ordersDao.update(id, order);
    };
}