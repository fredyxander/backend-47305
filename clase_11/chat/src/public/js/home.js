console.log("javascript en el frontend");
//socket del cliente
const socketClient = io();

const userName = document.getElementById("userName");
const inputMsg = document.getElementById("inputMsg");
const sendMsg = document.getElementById("sendMsg");
const chatPanel = document.getElementById("chatPanel");

let user;//variable de identidad del usuario
Swal.fire({
    title: 'chat',
    text: 'Por favor, ingresa tu nombre de usuario',
    input: 'text',
    inputValidator: (value)=>{
        return !value && 'Debes ingresar el nombre de usuario para continuar'
    },
    allowOutsideClick:false,
    allowEscapeKey:false
}).then((inputValue)=>{
    console.log(inputValue);
    user = inputValue.value;
    userName.innerHTML = user;
    socketClient.emit("authenticated", user);
});

sendMsg.addEventListener("click",()=>{
    const msg = {user:user, message:inputMsg.value};
    socketClient.emit("msgChat", msg);
    inputMsg.value="";
});

socketClient.on("chatHistory", (dataServer)=>{
    console.log(dataServer);
    let msgElements="";
    dataServer.forEach(elm=>{
        msgElements += `<p>Usuario: ${elm.user} >>>> ${elm.message}</p>`
    });
    chatPanel.innerHTML = msgElements;
});

socketClient.on("newUser", (data)=>{
    if(user){ //si el usuario ya se autentico
        Swal.fire({
            text:data,
            toast:true,
            position:"top-right"
        });
    }
});