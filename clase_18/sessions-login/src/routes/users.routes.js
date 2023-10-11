import { Router } from "express";

const router = Router();

router.post("/login", (req,res)=>{
    console.log(req.session);
    const loginForm = req.body;
    req.session.email = loginForm.email;
    console.log(req.session);
    res.send("login exitoso");
});

router.get("/profile", (req,res)=>{
    console.log(req.session);
    if(req.session.email){
        res.send(`Bienvenido ${req.session.email}`);
    } else {
        res.send("Necesitas iniciar sesion");
    }
});

router.get("/logout", (req,res)=>{
    req.session.destroy((err)=>{
        if(err) return res.send("No se pudo cerrar la sesion");
        res.send("sesion finalizada");
    })
});

export {router as usersRouter}