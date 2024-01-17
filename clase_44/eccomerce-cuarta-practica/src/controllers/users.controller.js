import { UsersService } from "../services/users.service.js";

export class UsersController{
    static modifyRole = async(req,res)=>{
        try {
            const userId = req.params.uid;
            const user = await UsersService.getUserById(userId);
            console.log(user);
            //validar que el usuario haya subido todos los documentos
            if(user.status !== "completo"){
                return res.json({status:"error", message:"El usuario no ha subido todos los documentos"});
            }
            if(user.role === "premium"){
                user.role = "user";
            } else if(user.role === "user"){
                user.role = "premium";
            } else {
                res.json({status:"error", message:"No se puede cambiar el role del usuario"});
            }
            await UsersService.updateUser(user._id, user);
            res.json({status:"success", message:"rol de usuario modificado"});
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };

    static uploadUserDocuments = async(req,res)=>{
        try {
            const userId = req.params.uid;
            const user = await UsersService.getUserById(userId);
            // console.log("documentos", req.files);
            const identificacion = req.files['identificacion']?.[0] || null;
            const domicilio = req.files['domicilio']?.[0] || null;
            const estadoDeCuenta = req.files['estadoDeCuenta']?.[0] || null;
            const docs = [];
            if(identificacion){
                docs.push({name:"identificacion", reference: identificacion.filename});
            }
            if(domicilio){
                docs.push({name:"domicilio", reference: domicilio.filename});
            }
            if(estadoDeCuenta){
                docs.push({name:"estadoDeCuenta", reference: estadoDeCuenta.filename});
            }
            // console.log("docs", docs);
            user.documents = docs;
            if(docs.length<3){
                user.status = "incompleto";
            } else {
                user.status = "completo";
            }
            // console.log("user", user);
            await UsersService.updateUser(user._id, user);
            res.json({status:"success", message:"documentos actualizados"});
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };
}