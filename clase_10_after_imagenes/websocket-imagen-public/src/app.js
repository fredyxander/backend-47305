import express from "express";
import { __dirname } from "./utils.js";
import path from "path";
import {engine} from "express-handlebars";
import {Server} from "socket.io";
import { productsService } from "./persistence/index.js";
import fs from "fs";

import { viewsRouter } from "./routes/views.routes.js";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";

const port = 8080;
const app = express();

//middleare
app.use(express.static(path.join(__dirname,"/public")));

const httpServer = app.listen(port,()=>console.log(`Servidor ejecutandose en el puerto ${port}`));

//servidor de websocket
const io = new Server(httpServer);

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
    socket.on("addProduct",async(productFormData)=>{
        // console.log("productFormData", productFormData);
        //Definir la ruta donde se guarda el archivo
        const filePath = `${path.join(__dirname,`/public/images/${productFormData.imageName}`)}`;
        //Crear un nuevo objeto en base a la info del formulario, con las propiedades necesarias para guardar en products.json
        const productToSave = {
            "title": productFormData.title,
            "price": productFormData.price,
            "code": productFormData.code,
            "thumbnail": productFormData.imageName
        };
        // console.log('productToSave',productToSave);
        //Guardar la imagen en la carpeta public/images
        await fs.promises.writeFile(filePath, productFormData.thumbnail);
        //Guardar el objeto "productToSave" en el archivo products.json
        const result = await productsService.createProduct(productToSave);
        const products = await productsService.getProducts();
        io.emit("productsArray", products);
    });
});