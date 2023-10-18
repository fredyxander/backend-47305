import { Router } from "express";
import { usersModel } from "../persistence/mongo/models/users.model.js";
import { createHash, inValidPassword } from "../utils.js";

const router = Router();

router.post("/signup", async(req,res)=>{
    try {
        const signupForm = req.body;
        signupForm.password = createHash(signupForm.password);
        // console.log(signupForm);
        const result = await usersModel.create(signupForm);
        res.render("loginView",{message:"Usuario registrado correctamente"});
    } catch (error) {
        res.render("signupView",{error:"No se pudo registrar el usuario"});
    }
});

router.post("/login", async(req,res)=>{
    try {
        const loginForm = req.body;
        const user = await usersModel.findOne({email:loginForm.email});
        if(!user){
            return res.render("loginView",{error:"Este usuario no esta registrado"});
        }
        //verificar contraseña
        if(!inValidPassword(loginForm.password,user)){
            return res.render("loginView",{error:"Credenciales invalidas"});
        }
        //ususario existe y contraseña valida, entonces creamos la session del usuario
        req.session.email = user.email;
        res.redirect("/profile");
    } catch (error) {
        res.render("loginView",{error:"No se pudo iniciar sesion para este usuario"});
    }
});

router.get("/logout", async(req,res)=>{
    try {
        req.session.destroy(err=>{
            if(err) return res.render("profileView",{error:"No se pudo cerrar la sesion"});
            res.redirect("/");
        })
    } catch (error) {
        res.render("signupView",{error:"No se pudo registrar el usuario"});
    }
});

export {router as sessionsRouter};