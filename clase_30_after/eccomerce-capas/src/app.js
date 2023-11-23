import express from "express";
import { __dirname } from "./utils.js";
import path from "path";
import {engine} from "express-handlebars";
import {Server} from "socket.io";
import { ProductsService } from "./services/products.service.js";
import { connectDB } from "./config/dbConnection.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import { initializePassport } from "./config/passport.config.js";
import { config } from "./config/config.js";

import { viewsRouter } from "./routes/views.routes.js";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
import { sessionsRouter } from "./routes/sessions.routes.js";

const port = 8080;
const app = express();

//middleare
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const httpServer = app.listen(port,()=>console.log(`Servidor ejecutandose en el puerto ${port}`));

//servidor de websocket
const io = new Server(httpServer);

//conexion a la db
connectDB();

//configuración de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//configuración de session
app.use(session({
    store:MongoStore.create({
        mongoUrl:config.mongo.url
    }),
    secret:"coderSecret",
    resave:true,
    saveUninitialized:true
}));

//configuracion de passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(viewsRouter);
app.use("/api/products",productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/sessions", sessionsRouter);

//socket server
io.on("connection", async(socket)=>{
    console.log("cliente conectado");
    const products = await ProductsService.getProducts();
    socket.emit("productsArray", products);

    //recibir el producto del socket del cliente
    socket.on("addProduct",async(productData)=>{
        const result = await ProductsService.createProduct(productData);
        const products = await ProductsService.getProducts();
        io.emit("productsArray", products);
    });
});

