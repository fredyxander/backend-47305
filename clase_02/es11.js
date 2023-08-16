// const variable1 = 0;
// const resultado = variable1 || "valor por defecto";
// console.log(resultado);

// //nulish
let variable = 0; //valores falsy
const resultadoConNulish = variable ?? "valor vacio";
// console.log(resultadoConNulish);


// //variables privadas de las clases: variables solamente accesibles dentro de la clase
class Persona{
    #variablePrivada="soy una variable privada";
    constructor(nombre){
        this.nombre=nombre;
    }

    //metodo para acceder a la variable privada
    getVariablePrivada(){
        return this.#variablePrivada;
    };

    #metodoPrivado(){
        console.log("soy un metodo privado");
    }

    saludar(){
        this.#metodoPrivado()
    }
}

// //Crear instancia de una clase es crear un objeto a partir de la clase
const pepito = new Persona("pepe");
console.log(pepito);
// // console.log(pepito.#variablePrivada);//Error
// console.log(pepito.getVariablePrivada());
// pepito.#metodoPrivado();//Error
// pepito.saludar();//metodo publico accesible fuera de la clase