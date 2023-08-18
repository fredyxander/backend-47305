const funcionCallback = (error, resultado)=>{
    if(error){
        console.log(`hubo un error ${error}`);
    } else {
        console.log(`Este es el resultado: ${resultado}`)
    }
};

const funcionPrincipal = (numero1, numero2, callback)=>{
    if(typeof numero1 !== "number"){
        callback("El parametro 1 debe ser un numero");
    } else {
        const resultadoSuma = numero1+numero2;
        callback(null,resultadoSuma);
    }
}

funcionPrincipal(1,2,funcionCallback);
// funcionPrincipal("pepe",2,funcionCallback);