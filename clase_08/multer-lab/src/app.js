import express from "express";

//importamos los routers
import {usersRouter} from "./routes/users.routes.js";
import {petsRouter} from "./routes/pets.routes.js";

//Servidor de express
const port = 8080;
const app = express();
app.listen(port,()=>console.log("Server ok"));

//midlewares de aplicación
app.use(express.json());//intepretar el formato json del cuerpo de las peticiones.
app.use(express.urlencoded({extended:true})); //interpreta formato json de un formulario
app.use(express.static("public"));

//routes
//Que ruta principal vamos a utilizar para acceder a las rutas de los usuarios.
app.use("/api/users",usersRouter);
app.use("/api/pets", petsRouter);