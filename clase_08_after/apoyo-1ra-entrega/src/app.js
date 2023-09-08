import express from "express";

import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Servidor ejecutandose en el puerto ${port}`));

//routes
app.use("/api/products",productsRouter);
app.use("/api/carts", cartsRouter);