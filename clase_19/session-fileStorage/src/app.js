import express from "express";
import session from "express-session";
import FileStore from "session-file-store";
import path from "path";
import {__dirname} from "./utils.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//conectamos session con FileStore
const fileStorage = FileStore(session);

//configuración de  session
app.use(session({
    //ttl: tiempo de vida de la session
    //retries:Numero de veces que el servidor intenta leer el archivo con la session.
    //path: Ruta de la carpeta donde almacenaremos las sesiones.
    store: new fileStorage({
        ttl:60,
        retries:0,
        path:path.join(__dirname,"/sessions")
    }),
    secret:"claveSecretSession",
    resave:true,
    saveUninitialized:true
}));

//ruta para generar la sesion del usuario
app.get("/login", (req,res)=>{
    const {name} = req.query;
    req.session.user = name;
    res.send("login y sesión creada en archivos");
});

app.get("/profile", (req,res)=>{
    if(req.session.user){
        res.send(`Bienvenido ${req.session.user}`);
    } else {
        res.send("Debes iniciar sesion")
    }
});