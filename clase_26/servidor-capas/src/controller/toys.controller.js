//importar la capa de servicio
import { ToysService } from "../service/toys.service.js";

export class ToysController{
    static getToys = (req,res)=>{
        const result = ToysService.getToys();
        res.json({status:"success", data:result});
    };

    static saveToy = (req,res)=>{
        const toyInfo = req.body;
        const result = ToysService.saveToy(toyInfo);
        res.json({status:"success", data:result});
    };
};