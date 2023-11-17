import { BusinessService } from "../service/business.service.js";

export class BusinessController{
    static getAllBusiness = async(req,res)=>{
        try {
            const result = await BusinessService.getAllBusiness();
            res.json({status:"success", data: result});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };

    static getOneBusiness = async(req,res)=>{
        try {
            const businessId = req.params.bid;
            const result = await BusinessService.getOneBusiness(businessId);
            res.json({status:"success", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };

    static createBusiness = async(req,res)=>{
        try {
            const businessInfo = req.body;
            const result = await BusinessService.createBusiness(businessInfo);
            res.json({status:"success", data: result});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };

    static addProduct = async(req,res)=>{
        try {
            const businessId = req.params.bid;
            const { productos } = req.body;
            const business = await BusinessService.getOneBusiness(businessId);
            if(!business){
                return res.json({status:"error", message:"Este negocio no existe"});
            }
            business.productos = productos;
            const result = await BusinessService.addProduct(businessId,business);
            res.json({status:"success", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };
};