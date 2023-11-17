import {Router} from "express";
import { UsersController } from "../controllers/users.controller.js";

const router = Router();

router.get("/:uid", UsersController.getUser);
router.post("/", UsersController.createUser);

export { router as usersRouter };