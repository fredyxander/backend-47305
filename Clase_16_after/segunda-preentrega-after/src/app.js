import express from "express";
import { __dirname } from "./utils.js";
import path from "path";
import {engine} from "express-handlebars";
import {Server} from "socket.io";
import { productsService } from "./persistence/index.js";
import { connectDB } from "./config/dbConnection.js";

import { viewsRouter } from "./routes/views.routes.js";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";

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

//routes
app.use(viewsRouter);
app.use("/api/products",productsRouter);
app.use("/api/carts", cartsRouter);

//socket server
io.on("connection", async(socket)=>{
    console.log("cliente conectado");
    const products = await productsService.getProducts();
    socket.emit("productsArray", products);

    //recibir el producto del socket del cliente
    socket.on("addProduct",async(productData)=>{
        const result = await productsService.createProduct(productData);
        const products = await productsService.getProducts();
        io.emit("productsArray", products);
    });
});