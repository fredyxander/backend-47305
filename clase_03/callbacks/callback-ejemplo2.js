//funciones que vamos a pasar como argumentos: callbacks
const saludar = ()=>{
    console.log("buenos dias")
};

const despedir = ()=>{
    console.log("adios!")
}

//Crear funcion receptora.
const funcionReceptora = ( nombre, funcionAEjecutar ) => {
    console.log("iniciando...");
    console.log("verificacion de variables");
    console.log(`Hola soy ${nombre}`);
    funcionAEjecutar();
};

//ejecutamos la funcion principal, y le pasamos el callback
funcionReceptora("pepito",saludar);
// console.log("----------------")
funcionReceptora("Ana",despedir);