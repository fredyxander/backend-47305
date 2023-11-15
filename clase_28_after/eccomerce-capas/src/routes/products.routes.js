import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";
import { isAuth } from "../middlewares/auth.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.post("/", isAuth, ProductsController.createProduct);
router.get("/:pid", ProductsController.getProduct);

export {router as productsRouter};