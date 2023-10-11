import express from "express";
import cookieParser from "cookie-parser";

const port = 8080;
const app = express();

//middleware
app.use(cookieParser("claveCookiesCoder"));

app.listen(port,()=>console.log("Server ok"));

//Ruta para crear una cookie
app.get("/set-cookie",(req,res)=>{
    //cookie(nombreCookie,valorCookie,options)
    // res.cookie("galleta1","oreo",{maxAge:10000}).send("cookie creada");
    res.cookie("galleta1","oreo").send("cookie creada");
});

app.get("/set-cookie2",(req,res)=>{
    res.cookie("galleta2","Ritz").send("cookie creada");
});

//Ruta para leer las cookies que vienen del cliente
app.get("/get-cookies", (req,res)=>{
    console.log(req.cookies);
    res.send("cookies recibidas");
});

//Ruta para eliminar las cookies
app.get("/delete-cookie", (req,res)=>{
    res.clearCookie("galleta2").send("la cookie se elimino");
});

//Ruta cookie firmada
app.get("/set-signedCookie", (req,res)=>{
    res.cookie("userData",{email:"pepe@gmail.com", role:"user"},{signed:true}).send("cookie creada");
});

//Ruta para lectura de cookies firmadas
app.get("/get-signedCookies", (req,res)=>{
    console.log(req.signedCookies);
    res.send("cookies recibidas");
});