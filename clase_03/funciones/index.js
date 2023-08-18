//función declarada o función definida
function nombreFuncion(parametro1,parametro2){
    //las llaves son el bloque de la funcion
    //dentro del bloque van las instrucciones de la funcion
    const resultado = parametro1+parametro2;
    return resultado;
};
nombreFuncion(5,8);

//Funciones expresadas
const variableFn = function(parametro1,parametro2){
    const resultado = parametro1+parametro2;
    return resultado;
};
variableFn(5,6);

//funciones expresadas, arrow function
//Arrow function:
//*Si dentro del bloque de codigo va a tener mas de una linea de codigo agregamos llaves {}
const funcionFlecha1 = (parametro1,parametro2)=>{
    const resultado = parametro1+parametro2;
    return resultado;
};

//*Si dentro del bloque va a tener una sola linea de codigo, quitamos las llaves. El simbolo => es un return implicito
const funcionFlecha2 = (parametro1,parametro2)=>parametro1+parametro2;

//*Si la funcion recibe un solo parametro no son necesarios los parentesis
const funcionFlecha3 = parametro1=>parametro1*2;


//Funciones anonimas: No cuentan con nombre y usualmente no usan espacio en memoria.
const numeros = [1,2,3,4];
numeros.forEach((elm)=>console.log(`Elm: ${elm}`));