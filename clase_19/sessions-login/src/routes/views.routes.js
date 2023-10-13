import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/signup",(req,res)=>{
    res.render("signupView");
});

router.get("/login",(req,res)=>{
    res.render("loginView");
});

router.get("/profile",(req,res)=>{
    if(req.session.email){
        const userEmail = req.session.email;
        res.render("profileView",{userEmail});
    } else {
        res.redirect("/login");
    }
});

export { router as viewsRouter};