import { Router} from 'express';
import sessionsController from "../controllers/sessions.controller.js";

const router = Router();

router.post('/login',sessionsController.loginUser)
router.post('/register',sessionsController.registerUser);


export default router;