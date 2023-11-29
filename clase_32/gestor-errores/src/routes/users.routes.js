import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";

const router = Router();

router.post("/", UsersController.createUser);
router.get("/:uid", UsersController.getUser);

export {router as usersRouter};