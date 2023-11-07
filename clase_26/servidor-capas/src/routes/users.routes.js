import {Router} from "express";
import { UsersController } from "../controller/users.controller.js";

const router = Router();

router.get("/", UsersController.getUsers);

export { router as usersRouter};