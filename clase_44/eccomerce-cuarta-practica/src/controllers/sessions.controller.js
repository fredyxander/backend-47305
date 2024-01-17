import { generateEmailToken, sendChangePasswordEmail, verifyEmailToken } from "../helpers/email.js";
import { UsersService } from "../services/users.service.js";
import { createHash, inValidPassword } from "../utils.js";

export class SessionsController{
    static redirectLogin = (req,res)=>{
        res.redirect("/login");
    };

    static failSignup = (req,res)=>{
        res.render("signup",{error:"No se pudo registrar al usuario"});
        // res.json({status:"error", message:"No se pudo registrar al usuario"});
    };

    static redirecProfile = (req,res)=>{
        // res.send("logueado");
        res.render("profileView",{user:req.user});
        // res.redirect("/profile")
    };

    static failLogin = (req,res)=>{
        res.render("login",{error:"No se pudo iniciar sesion para el usuario"});
        // res.json({status:"error", message:"No se pudo registrar al usuario"});
    };

    static forgotPassword = async(req,res)=>{
        const {email} = req.body;
        console.log(email);
        try {
            //Veificar que el usuario exista
            const user  = await UsersService.getUserByEmail(email);
            // console.log(user);
            const emailToken = generateEmailToken(email, 10 * 60)//5min
            await sendChangePasswordEmail(req,email,emailToken);
            res.send(`Se envio un enlace a su correo, <a href="/">Volver a la pagina de login</a>`);
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };

    static resetPassword = async(req,res)=>{
        try {
            const token = req.query.token;
            const {newPassword} = req.body;
            const validEmail = verifyEmailToken(token);
            if(!validEmail){
                return res.send(`El enlace ya no es valido, genera un nuevo <a href="/forgot-password">enlace</a>`);
            }
            const user = await UsersService.getUserByEmail(validEmail);
            console.log("user", user);
            if(!user){
                return res.send(`Esta operacion no es valida`);
            }
            if(inValidPassword(newPassword,user)){
                return res.render("resetPassView", {error:"contraseña invalida", token});
            }
            const userData = {
                ...user,
                password: createHash(newPassword)
            };
            // console.log("userData", userData);
            await UsersService.updateUser(user._id, userData);
            res.render("login",{message:"Contraseña actualizada"});
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };

    static logout = async(req,res)=>{
        console.log(req.user);
        const user = {...req.user};
        user.last_connection = new Date();
        await UsersService.updateUser(user._id, user);
        req.session.destroy((error)=>{
            res.send("sesion finalizada");
        });
    };
}