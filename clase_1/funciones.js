// let num1 = 1;
// let num2 = 2;
// let result = num1 + num2;
// console.log(result);

function sumar(num1,num2){
    const altNumber = num1;
    let result = num1 + num2;
    // console.log(result);//no retorno
    return result;
};

//ejecutar la funcion
const res = sumar(4,3);
console.log(res*10);
// sumar(1787,982);

//funcion flecha - arrow functions ()=>{}
const sumarFlecha = (num1,num2)=>{
    let result = num1 + num2;
    let result2 = result *10;
    result2 / 5;
    // console.log(result);//no retorno
    return result2;
}
const res2 = sumarFlecha(3,6);
console.log(res2);

//funcion flecha tiene una sola instruccion y devuleve un resultado
const multiplicar = (num1,num2) => num1*num2;
multiplicar(10,6);

//funcion flecha recibe solo un parametro
// const mostrarNombre =     nombre => "hola "+nombre;
const mostrarNombre =     nombre => `hola ${nombre}`;
console.log(mostrarNombre("Juan"));