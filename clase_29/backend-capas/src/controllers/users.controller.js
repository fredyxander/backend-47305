import { UsersService } from "../service/users.service.js";

export class UsersController{
    static getUser = async(req,res)=>{
        try {
            const userId = req.params.uid;
            const result = await UsersService.getUser(userId);
            res.json({status:"success", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };

    static createUser = async(req,res)=>{
        try {
            const user = req.body;
            const result = await UsersService.createUser(user);
            res.json({status:"success", data:result});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };
}