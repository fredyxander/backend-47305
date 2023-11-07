import { UsersService } from "../service/users.service.js";

export class UsersController{
    static getUsers = (req,res)=>{
        const result = UsersService.getUsers();
        res.json({status:"success", data:result});
    };
};