import { ProductsManagerFiles } from "./files/productsManagerFiles.js";
import { CartsManagerFiles } from "./files/cartsManagerFiles.js";
import { __dirname } from "../utils.js";
import path from "path";
import { ProductsManagerMongo } from "./mongo/productsManagerMongo.js";
import { CartsManagerMongo } from "./mongo/cartsManager.mongo.js";
import { UsersManagerMongo } from "./mongo/usersManager.mongo.js";

// export const productsService = new ProductsManagerFiles(path.join(__dirname,"/files/products.json"));
// export const cartsService = new CartsManagerFiles(path.join(__dirname,"/files/carts.json"));

export const productsDao = new ProductsManagerMongo();
export const cartsDao = new CartsManagerMongo();
export const usersDao = new UsersManagerMongo();