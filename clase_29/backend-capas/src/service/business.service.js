import { businessDao } from "../dao/index.js";

export class BusinessService{
    static getAllBusiness = ()=>{
        return businessDao.get();
    };

    static getOneBusiness = (id)=>{
        return  businessDao.getById(id);
    };

    static createBusiness = (newBusiness)=>{
        return businessDao.createBusiness(newBusiness);
    };

    static addProduct = (id, info)=>{
        return businessDao.addProduct(id,info);
    };
}