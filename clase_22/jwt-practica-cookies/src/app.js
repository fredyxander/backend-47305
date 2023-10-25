import express from "express";
import cookieParser from  "cookie-parser";
import { __dirname } from "./utils.js";
import path from "path";
import { generateToken, validateToken } from "./utils.js";

const port = 8080;
const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.post("/login", (req,res)=>{
    const user = req.body;
    const token = generateToken(user);
    res.cookie("cookieToken",token,{httpOnly:true}).json({status:"success", message:"login exitoso"});
});

app.get("/profile", validateToken , (req,res)=>{
    res.json({result:req.user});
});