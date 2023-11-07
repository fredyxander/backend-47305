import { Router } from "express";
//importamos la capa del controlador
import { ToysController } from "../controller/toys.controller.js";

const router = Router();

router.get("/", ToysController.getToys);
router.post("/", ToysController.saveToy);

export {router as toysRouter}