const numeros = [1,2,3,4];

//map:Crea un nuevo arreglo apartir de un arreglo original, con el mismo numero de elementos, pero cada elemento modificado

const sumar = (num)=>num+1;

const nuevoArreglo1 = numeros.map((elm)=>sumar(elm)); //output: [2,3,4,5];
console.log("nuevoArreglo1: ", nuevoArreglo1);

const nuevoArreglo2 = numeros.map((numero)=>numero*2); //output: [ 2, 4, 6, 8 ];
console.log("nuevoArreglo2: ", nuevoArreglo2);