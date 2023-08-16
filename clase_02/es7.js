//exponential operator -> Math.pow(base,potencia)
const exponencial = 2**4;
// console.log(exponencial);//2*2*2*2 = 16

// console.log("Este es el curso de node".includes("node"));

//array.includes
//Poder determinar si un elemento existe dentro de un arreglo
const numeros = [1,2,3,4,5];
// console.log(numeros.includes(9));//output:false
// console.log(numeros.includes(3));//output:true

const usuarios = ["pepe","Ana","Juan"];

if(usuarios.includes("Juan")){
    console.log("Juan hace parte de los usuarios")
} else{
    console.log("Juan no hace parte de los usuarios")
}