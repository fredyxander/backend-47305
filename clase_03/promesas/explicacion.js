//crear un funcion que retorne una promesa.
//  4/8 --> dividendo=4, divisor=8
const dividir = (dividendo, divisor)=>{
    return new Promise((resolve,reject)=>{
        if(divisor === 0){
            //rechazar la operacion, porque no es posbile dividir por 0
            reject("no es posible dividir por 0");
        } else {
            //poder cumplir la promesa, hacer la division
            resolve(dividendo/divisor);
        }
    })
};

//.then obtiene el resultado que se pasa en el metodo resolve
//.catch obtiene el resultado que se pasa en el metodo reject
// dividir(10,2)
// .then((resultado)=>{
//     //resultado va a ser el valor devuelto por el metodo resolve
//     console.log(resultado);
// })
// .catch((error)=>{
//     //error va a ser el resultado devuelto por el metodo reject
//     console.log(error);
// });

//caso rechazado
dividir(10,0)
.then((resultado)=>{
    //resultado va a ser el valor devuelto por el metodo resolve
    console.log(resultado);
})
.catch((error)=>{
    //error va a ser el resultado devuelto por el metodo reject
    console.log(error);
});