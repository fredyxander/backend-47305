import express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import path from "path";
import { __dirname } from "./utils.js";

import { viewsRouter } from "./routes/views.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser("claveCookies"));

//configuracion handlebars
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//routes
app.use(viewsRouter);
app.use("/api/users", usersRouter);