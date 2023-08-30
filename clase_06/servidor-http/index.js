const http = require("http");

const port = 8080;

const server = http.createServer((request, response)=>{
    console.log("peticion recibida de un cliente");
    //repuesta del servidor
    response.end("Su peticion fue recibida en el servidor");
});

server.listen(port,()=>console.log("Servidor funcionando"));