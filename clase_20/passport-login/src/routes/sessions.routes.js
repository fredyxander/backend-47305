import { Router } from "express";
import passport from "passport";

const router = Router();

router.post("/signup", passport.authenticate("signupLocalStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}) , async(req,res)=>{
    res.render("loginView",{message:"Usuario registrado correctamente"});
});

router.get("/fail-signup",(req,res)=>{
    res.render("signupView",{error:"No se pudo registrar el usuario"});
});

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