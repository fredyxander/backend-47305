//string.trim(): eliminar espacios al inicio y al final de una cadena de caracteres

const correoEspacio = "          fredy@gmail.com     ";//->trim "fredy@gmail.com";
const correoSinEspacios = correoEspacio.trim();
if(correoSinEspacios === "fredy@gmail.com"){
    console.log("inicio sesion")
} else {
    console.log("sesion fallida")
};


//Array.flat [ [1,2,3], [4,5,6] ] -> [ 1,2,3,4,5,6 ];
const numeros = [ [1,2,3], [4,5,6], [7,8,[9,10]] ];
console.log(numeros.flat(2));
