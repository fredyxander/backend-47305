import { Router } from "express";
import passport from "passport";

const router = Router();

router.post("/signup", passport.authenticate("signupLocalStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}) , (req,res)=>{
    res.redirect("/login");
});

router.get("/fail-signup", (req,res)=>{
    res.render("signup",{error:"No se pudo registrar al usuario"});
    // res.json({status:"error", message:"No se pudo registrar al usuario"});
});


router.post("/login", passport.authenticate("loginLocalStrategy",{
    failureRedirect:"/api/sessions/fail-login"
}) , (req,res)=>{
    res.redirect("/profile")
});

router.get("/fail-login", (req,res)=>{
    res.render("login",{error:"No se pudo iniciar sesion para el usuario"});
    // res.json({status:"error", message:"No se pudo registrar al usuario"});
});

export {router as sessionsRouter};