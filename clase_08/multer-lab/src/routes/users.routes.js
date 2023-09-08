import {Router} from "express";

const router = Router();

// GET /api/users
// POST /api/users
// DELETE /api/users/:userId
// PUT /api/users/:userId

let users = [];

// /api/users/
router.get("/",(req,res)=>{
    res.json({data:users});
});

router.post("/",(req,res)=>{
    res.json({message:"endpoint post users"});
});

router.delete("/:userId", (req,res)=>{
    res.json({message:"endpoint delete users"});
});

router.put("/:userId", (req,res)=>{
    res.json({message:"endpoint put users"});
});

export {router as usersRouter};