import { Router } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/index.js";

export class AppRouter{
    #router;
    constructor(){
        this.#router = Router();
        this.init();
    };

    init(){
        //inicializacion del routes para que otros router puedan utillizar sus metodos
    };

    getRouter(){
        //funcion para retornar el router personalizado
        return this.#router;
    };

    //path (/users, /products/:id, /cart)
    //callback (req,res)=>{}
    get(path, policies, ...callbacks){
    //  router.get("/user", (req,res)=>{})
        this.#router.get(path , this.#addCustomResponses , this.#handlePolicies(policies), this.#applyCallbacks(callbacks));
    };
    post(path, ...callbacks){
        this.#router.post(path, this.#addCustomResponses, this.#applyCallbacks(callbacks));
    };
    put(path, ...callbacks){
        this.#router.put(path, this.#addCustomResponses, this.#applyCallbacks(callbacks));
    };
    delete(path, ...callbacks){
        this.#router.delete(path, this.#addCustomResponses, this.#applyCallbacks(callbacks));
    };

    //ejemplo de un callback de una ruta: (req,res)=>{}
    #applyCallbacks(callbacks){
        //params: [req,res,next]
        return callbacks.map((callback)=>async(...params)=>{
            try {
                //this hace referencia al router en especifico(productsRouter,usersRouter)
                await callback.apply(this, params);
            } catch (error) {
                console.log(error);
                params[1].status(500).send(error); // res.status(500).send(error);
            }
        })
    };

    //funcion que agrega respuestas estandarizadas
    #addCustomResponses(req,res,next){
        res.sendSuccess = (payload)=>res.json({status:"success", payload});
        res.sendServerError = (error)=>res.status(500).json({status:"error", message:error.message});
        res.sendClientError = (error)=>res.status(400).json({status:"error", message:error.message});
        next();
    };

    //funcion para gestionar politicas o roles de usuarios
    #handlePolicies(policies){ // /users  ["ADMIN","SUPERADMIN"]
        return (req,res,next)=>{
            if(policies.includes("PUBLIC")){
                return next();// cualquiera puede acceder
            }

            //verificar que el usuario este autenticado
            const authHeader = req.headers["authorization"]; //Bearer token ==> split = ["Bearer", "token"]
            if(!authHeader){
                return res.status(401).json({status:"error",message:"No autenticado"})
            }
            //obtener el token
            const token = authHeader.split(" ")[1];
            //extraer informacion del token
            const user = jwt.verify(token,config.secretToken);
            //verificar si el usuario tiene el role que cumpla con la politica de la ruta
            if(policies.includes(user.role.toUpperCase())){
                req.user = user;
                return next();
            } else {
                return res.status(403).json({status:"error",message:"No autorizado"})
            }
        }
    };
}
