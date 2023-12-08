import express from "express";
import cluster from "cluster";
import os from "os";

const cores = os.cpus().length
// console.log(cores);

const port = 8080;
const app = express();

// console.log(cluster.isPrimary)
if(cluster.isPrimary){
    console.log(`proceso primario ${process.pid}`);
    //creamos los nodos del cluster
    for(let i=0;i<cores;i++){
        cluster.fork();//creamos cada nodo
    }

    cluster.on("exit",(worker)=>{
        console.log(`El proceso ${worker.process.pid} falló`);
        cluster.fork();//creamos cada nodo
    });
} else {
    // console.log(`nuevo proceso ${process.pid}`);
    app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port} en el proceso ${process.pid}`));

    app.get("/", (req,res)=>{
        res.send(`Peticion recibida ${process.pid}`);
    });
}