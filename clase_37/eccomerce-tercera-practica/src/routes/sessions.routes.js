import { Router } from "express";
import passport from "passport";
import { SessionsController } from "../controllers/sessions.controller.js";

const router = Router();

router.post("/signup", passport.authenticate("signupLocalStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}) , SessionsController.redirectLogin);

router.get("/fail-signup", SessionsController.failSignup);

router.post("/login", passport.authenticate("loginLocalStrategy",{
    failureRedirect:"/api/sessions/fail-login"
}) , SessionsController.redirecProfile);

router.get("/fail-login", SessionsController.failLogin);

router.post("/forgot-password", SessionsController.forgotPassword);

router.post("/reset-password", SessionsController.resetPassword);

export {router as sessionsRouter};