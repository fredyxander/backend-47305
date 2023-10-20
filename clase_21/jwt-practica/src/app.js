import express from "express";
import { generateToken } from "./utils.js";

const port = 8080;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.get("/login", (req,res)=>{
    const user = req.body;
    const token = generateToken(user);
    res.json({status:"success", accessToken:token});
});