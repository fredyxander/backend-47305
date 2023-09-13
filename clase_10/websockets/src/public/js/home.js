console.log("archivo js para la vista home");
//creacion del socket del lado del cliente
const socketClient = io();

const inputElm = document.getElementById("inputField");

//captura de cada tecla
inputElm.addEventListener("keydown",(e)=>{
    // console.log(e.key);
    // socketClient.emit("msgKey",e.key);
    if(e.key === "Enter"){
        socketClient.emit("msgInput",inputElm.value);
    }
});

//cliente recibe el historial de mensajes
socketClient.on("messages", (historyData)=>{
    console.log(historyData);
});




//emitir msg del cliente al servidor
socketClient.emit("clientMessage", "Primer mensaje desde el cliente con websocket");

//recibir desde el servidor
socketClient.on("msgServer", (data)=>{
    console.log("data desde el servidor: ", data)
});

// socketClient.on("msgAllFromServer",(data)=>{
//     console.log("mensaje general del servidor:", data);
// });