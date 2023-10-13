import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//configuración de session
app.use(session({
    //Agregar almacenamiento de session de mongo
    store:MongoStore.create({
        ttl:60,
        mongoUrl:"mongodb+srv://fredy:coder@coderbackend.d0kaklh.mongodb.net/2daPracticaDB?retryWrites=true&w=majority"
    }),
    secret:"secretCoder",
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