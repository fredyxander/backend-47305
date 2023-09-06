import {Router} from "express";

const router = Router();

// GET /api/users
// POST /api/users
// DELETE /api/users/:userId
// PUT /api/users/:userId

let users = [];

//midleware de router
router.use(function(req,res,next){
    console.log("peticion de router users recibida");
    // console.log(req)
    next();
});

// /api/users/
router.get("/",(req,res)=>{
    console.log("ruta get users");
    res.json({data:users});
});

router.post("/",(req,res)=>{
    console.log("ruta post users");
    res.json({message:"endpoint post users"});
});

router.delete("/:userId", (req,res)=>{
    res.json({message:"endpoint delete users"});
});

router.put("/:userId", (req,res)=>{
    res.json({message:"endpoint put users"});
});

export {router as usersRouter};