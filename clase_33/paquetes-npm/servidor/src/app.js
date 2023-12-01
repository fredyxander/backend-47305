import express from "express";
import { multiplicar } from "matematicas-coderhouse";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server on port ${port}`));

app.get("/operacion", (req,res)=>{
    const {num1, num2, num3} = req.query;
    const result = multiplicar(num1,num2, num3);
    res.json({status:"success", result});
});