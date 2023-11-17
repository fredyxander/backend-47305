import {Router} from "express";
import { OrdersController } from "../controllers/orders.controller.js";

const router = Router();

router.get("/:oid",OrdersController.getOrder);
router.post("/", OrdersController.createOrder);
router.put("/:oid", OrdersController.modifyStatusOrder);

export { router as ordersRouter };