import { ProductsManagerFiles } from "./files/productsManagerFiles.js";
import { CartsManagerFiles } from "./files/cartsManagerFiles.js";
import { __dirname } from "../utils.js";
import path from "path";
// console.log("dirname: ", path.join(__dirname,"/files"));//clase_08_after\apoyo-1ra-entrega\src\files

export const productsService = new ProductsManagerFiles(path.join(__dirname,"/files/products.json"));
export const cartsService = new CartsManagerFiles(path.join(__dirname,"/files/carts.json"));
