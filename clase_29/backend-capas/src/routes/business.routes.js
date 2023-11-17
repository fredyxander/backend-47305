import {Router} from "express";
import { BusinessController } from "../controllers/business.controller.js";

const router = Router();

router.get("/", BusinessController.getAllBusiness);
router.get("/:bid", BusinessController.getOneBusiness);
router.post("/", BusinessController.createBusiness);
router.put("/:bid/products", BusinessController.addProduct);


export { router as businessRouter };