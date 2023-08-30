import express from "express";

const port = 8080;

const app = express();

app.listen(port,()=>console.log("servidor funcionando"));

app.use(express.urlencoded({extended:true}));

app.get("/bienvenido",(request, response)=>{
    response.send("Bienvenido al sitio web");
});

app.get("/ruta2",(req,res)=>{
    res.send("<h1 style='color:blue'>Respuesta con html</h1>")
});

app.get("/user",(req,res)=>{
    res.send({name:"pepe", age:20});
});

const users = [
    {id:1, name:"pedro", age:20, gender:"Masculino"},
    {id:2, name:"Lucas", age:30,gender:"Masculino"},
    {id:3, name:"Ana", age:40,gender:"Femenino"},
]

// /users
// /users?gender=femenino
app.get("/users", (req,res)=>{
    console.log(req.query)
    const gender = req.query.gender;
    if(gender){
        const result = users.filter(u=>u.gender === gender);
        res.send(result);
    } else {
        res.send(users);
    }
});

//peticion del usuario /users/1   /users/2   /users/3 ...
app.get("/users/:userId", (req,res)=>{ //los params siempre son de tipo string
    const id = parseInt(req.params.userId);
    const user = users.find(u=>u.id === id);
    if(user){
        res.send(user);
    } else {
        res.send("El usuario no existe");
    }
});

