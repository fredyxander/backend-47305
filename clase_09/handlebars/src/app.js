import express from "express";
import { engine } from 'express-handlebars';
import { __dirname } from "./utils.js";
import path from "path";

import { viewsRouter } from "./routes/views.routes.js";

//Servidor de express
const port = 8080;
const app = express();
app.listen(port,()=>console.log("Server ok"));

//configuracion del motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views")); //=> /src/views

//routes
app.use(viewsRouter);