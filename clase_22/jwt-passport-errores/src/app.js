import express from "express";
import cookieParser from  "cookie-parser";
import { __dirname } from "./utils.js";
import path from "path";
import { generateToken, validateToken } from "./utils.js";
import passport from "passport";
import { initializePassport } from "./config/passport.config.js";
import { authenticate, authorize } from "./middlewares/auth.js";

const port = 8080;
const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=>console.log(`Server listening on port ${port}`));

initializePassport();
app.use(passport.initialize());


app.post("/login", (req,res)=>{
    const user = req.body;
    user.role="user";
    const token = generateToken(user);
    res.cookie("cookieToken",token,{httpOnly:true}).json({status:"success", message:"login exitoso"});
});

app.get("/profile", authenticate("jwtAuth") , authorize("user") ,(req,res)=>{
    res.json({result:req.user});
});