import { Router } from "express";
import { CartsController } from "../controllers/carts.controller.js";
import { isAuth, checkRole } from "../middlewares/auth.js";

const router = Router();

//http://localhost:8080/api/carts
router.get("/", CartsController.getcarts);
router.get("/:cid", CartsController.getCart);
router.post("/", CartsController.createCart);
router.put("/:cid/product/:pid", CartsController.addProductToCart);
router.delete("/:cid/products/:pid", CartsController.deleteProductCart);
router.put("/:cid/products/:pid", CartsController.updateProductCart);
router.post("/:cid/purchase", isAuth, checkRole(["user","premium"]) , CartsController.purchaseCart);

export {router as cartsRouter};