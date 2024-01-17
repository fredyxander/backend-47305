import { Router } from "express";
import passport from "passport";
import { SessionsController } from "../controllers/sessions.controller.js";
import { uploadProfile } from "../utils.js";

const router = Router();

router.post("/signup", uploadProfile.single("avatar") , passport.authenticate("signupLocalStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}) , SessionsController.redirectLogin);

router.get("/fail-signup", SessionsController.failSignup);

router.post("/login", passport.authenticate("loginLocalStrategy",{
    failureRedirect:"/api/sessions/fail-login"
}) , SessionsController.redirecProfile);

router.get("/fail-login", SessionsController.failLogin);

router.post("/forgot-password", SessionsController.forgotPassword);

router.post("/reset-password", SessionsController.resetPassword);

router.get("/logout", SessionsController.logout);

export {router as sessionsRouter};