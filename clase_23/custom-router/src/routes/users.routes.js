import { AppRouter } from "./app.routes.js";

export class UsersRouter extends AppRouter{
    init(){
        this.get("/", ["ADMIN"] ,(req,res)=>{
            // res.send([{name:"pepe", email:"pepe@gmail.com"}])
            res.sendSuccess([{name:"pepe", email:"pepe@gmail.com"}]);
        });

        this.delete("/:userId",(req,res)=>{
            res.sendSuccess("usuario eliminado");
        });

        this.put("/:userId",(req,res)=>{
            res.sendClientError(new Error("No se pudo actualizar"));
        });
    }
};