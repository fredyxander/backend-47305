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
    // console.log(req.user);
    if(req.user?.email){
        const userEmail = req.user.email;
        res.render("profileView",{userEmail});
    } else {
        res.redirect("/login");
    }
});

export { router as viewsRouter};