import { CustomError } from "../services/customError.service.js";
import { EError } from "../enums/EError.js";
import { userCreateError } from "../services/userCreateError.service.js";
import { userIdParamError } from "../services/invalidParamError.service.js";

let users = [];

export class UsersController{
    static createUser = (req,res)=>{
        const {name, lastname, age, email} = req.body;
        if(!name || !lastname || !email){
            CustomError.createError({
                name:"Create user error",
                cause: userCreateError(req.body),
                message:"Datos invalidos para crear el usuario",
                errorCode: EError.INVALID_BODY_JSON
            });
        }
        const newUser = {
            id: users.length + 1,
            name,
            lastname,
            age,
            email
        };
        users.push(newUser);
        res.json({status:"success", message:"usuario creado", data: newUser});
    };

    static getUser = (req,res)=>{
        const userId = req.params.uid; //"palabra"
        if(Number.isNaN(parseInt(userId))){
            CustomError.createError({
                name:"Get user error",
                cause: userIdParamError(userId),
                message:"id invalido",
                errorCode: EError.INVALID_PARAM
            });
        }
        const user = users.find(u=>u.id === parseInt(userId));
        res.json({status:"success", message:"usuario encontrado", data: user});
    };
};