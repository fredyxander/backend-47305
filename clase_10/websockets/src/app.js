import express from "express";
import { engine } from 'express-handlebars';
import { __dirname } from "./utils.js";
import path from "path";
import {Server} from "socket.io";

import { viewsRouter } from "./routes/views.routes.js";

//Servidor de express
const port = 8080;
const app = express();
//servidor de express con el protocolo http
const httpServer = app.listen(port,()=>console.log("Server ok"));

//servidor de websocket para el backend
const socketServer = new Server(httpServer);

//midlewares
app.use(express.static(path.join(__dirname,"/public")));

//configuracion del motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views")); //=> /src/views

//routes
app.use(viewsRouter);


let msgHistory=[];
//confiuración socket server
socketServer.on("connection",(socket)=>{
    console.log("cliente conectado", socket.id);

    //recibir mgs del cliente
    socket.on("clientMessage", (data)=>{
        console.log("data desde le cliente", data);
    });

    setTimeout(()=>{
        //enviar msg del servidor al cliente
        socket.emit("msgServer", "canal abierto")
    },4000);

    socket.on("msgInput", (data)=>{
        const msgItem = {socketid: socket.id, mensaje: data};
        msgHistory.push(msgItem);
        // console.log("msgItem",msgItem);
    });

    //enviar msg con el historial del chat
    socket.emit("messages", msgHistory);

    // socket.on("msgKey", (data)=>{
    //     console.log("tecla desde el cliente:", data);
    // });

    // setTimeout(()=>{
    //     //enviar msg del servidor al cliente
    //     socketServer.emit("msgAllFromServer", "nueva promoción")
    // },8000);
});