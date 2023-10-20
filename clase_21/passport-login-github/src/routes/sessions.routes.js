import { Router } from "express";
import passport from "passport";
import { config } from "../config/config.js";

const router = Router();

//Rutas de registro
router.post("/signup", passport.authenticate("signupLocalStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}) , async(req,res)=>{
    res.render("loginView",{message:"Usuario registrado correctamente"});
});

router.get("/fail-signup",(req,res)=>{
    res.render("signupView",{error:"No se pudo registrar el usuario"});
});

//Ruta de solicitud registro con github
router.get("/signup-github", passport.authenticate("signupGithubStrategy"));
//ruta del callback con github
router.get(config.github.callbackUrl, passport.authenticate("signupGithubStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}), (req,res)=>{
    res.redirect("/profile");
});

//Rutas de login
router.post("/login", passport.authenticate("loginLocalStrategy",{
    failureRedirect:"/api/sessions/fail-login"
}) , async(req,res)=>{
    res.redirect("/profile");
});

router.get("/fail-login",(req,res)=>{
    res.render("loginView",{error:"No se pudo iniciar sesion para este usuario"});
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