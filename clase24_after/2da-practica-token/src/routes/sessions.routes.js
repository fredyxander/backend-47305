import { Router } from "express";
import passport from "passport";
import { generateToken } from "../utils.js";

const router = Router();

router.post("/signup", passport.authenticate("signupLocalStrategy",{
    session:false,
    failureRedirect:"/api/sessions/fail-signup"
}) , (req,res)=>{
    res.redirect("/login");
});

router.get("/fail-signup", (req,res)=>{
    res.render("signup",{error:"No se pudo registrar al usuario"});
});

router.post("/login", passport.authenticate("loginLocalStrategy", {
    session:false,
    failureRedirect:"/api/sessions/fail-login"
}) , (req,res)=>{
    console.log("login-user", req.user);
    //generamos el token del usuario
    const token = generateToken(req.user);
    //enviamos el token al cliente
    res.cookie("cookieToken",token).json({status:"success", message:"login exitoso"});
    // res.redirect("/profile")
});

router.get("/fail-login", (req,res)=>{
    res.render("login",{error:"No se pudo iniciar sesion para el usuario"});
});

router.post("/profile", passport.authenticate("jwtAuth", {
    session:false,
    failureRedirect:"/api/sessions/fail-auth"
}) , (req,res)=>{
    // console.log("profile-user",req.user);
    res.json({status:"success",message:"Peticion valida", data:req.user});
});

router.get("/fail-auth",(req,res)=>{
    res.json({status:"error", message:"token invalido"});
});

export {router as sessionsRouter};