const sumar = (num1,num2)=>{
    return new Promise((resolve,reject)=>{
        if(num1 === 0 || num2 === 0){
            return reject("Operación innecesaria")
        }
        if(num1<0 || num2<0){
            return reject("La calculadora sólo debe devolver valores positivos")
        }
        setTimeout(() => {
            resolve(num1+num2);
        }, 5000);
    });
};

const restar = (num1,num2)=>{
    return new Promise((resolve,reject)=>{
        if(num1 === 0 || num2 === 0){
            return reject("Operación innecesaria")
        }
        if(num1<0 || num2<0){
            return reject("La calculadora sólo debe devolver valores positivos")
        }
        resolve(num1-num2);
    });
};

const multiplicar = (num1,num2)=>{
    return new Promise((resolve,reject)=>{
        if(num1<0 || num2<0){
            return reject("La calculadora sólo debe devolver valores positivos")
        }
        resolve(num1*num2);
    });
};

const calculos = async()=>{
    try {
        const suma1 = await sumar(5,9);
        console.log(`El resultado de la suma es: ${suma1}`);
        const multiplicacion1 = await multiplicar(10,suma1);
        console.log(`El resultado de la multiplicación es: ${multiplicacion1}`);
        const resultadoFinal = multiplicacion1/5;
        console.log(`El resultado final es: ${resultadoFinal}`);
    } catch (error) {
        console.error(`Hubo un error: ${error}`);
    }
}
calculos();