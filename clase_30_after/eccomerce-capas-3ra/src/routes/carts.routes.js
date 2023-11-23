import { Router } from "express";
import { CartsController } from "../controllers/carts.controller.js";

const router = Router();

//http://localhost:8080/api/carts
router.get("/", CartsController.getcarts);
router.get("/:cid", CartsController.getCart);
router.post("/", CartsController.createCart);
router.put("/:cid/product/:pid", CartsController.addProductToCart);
router.delete("/:cid/products/:pid", CartsController.deleteProductCart);
router.put("/:cid/products/:pid", CartsController.updateProductCart);
router.post("/:cid/purchase", CartsController.purchaseCart);

export {router as cartsRouter};