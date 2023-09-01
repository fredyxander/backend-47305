import express from "express";

const port = 8080;

const app = express();

app.use(express.json());

app.listen(port,()=>console.log("Server working"));

//routes
let users = [];

app.get("/api/users",(req,res)=>{
    res.json({data:users});
});

//crear un usuario
app.post("/api/users",(req,res)=>{
    const newUser = req.body;
    // console.log(newUser);
    users.push(newUser);
    res.json({message:"Usuario creado"});
});

//actualizar un usuario
app.put("/api/users/:userId", (req,res)=>{
    const userId = parseInt(req.params.userId);
    const newInfo = req.body;
    const userIndex = users.findIndex(u=>u.id === userId);
    if(userIndex>=0){
        const newUsers = [...users];
        newUsers[userIndex] = newInfo;
        users = newUsers;
        res.json({message:"usuario actualizado"});
    } else {
        res.status(404).json({message:"El usuario no existe"})
    }
});

//eliminar un usuario
app.delete("/api/users/:userId",(req,res)=>{
    const userId = parseInt(req.params.userId);
    const userIndex = users.findIndex(u=>u.id === userId);
    if(userIndex>=0){
        const newUsers = users.filter(u=>u.id !== userId);
        users = newUsers;
        res.json({message:"usuario eliminado"});
    } else {
        res.status(404).json({message:"El usuario no existe"});
    }
});