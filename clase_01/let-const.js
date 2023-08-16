//var una variable reasignada y redeclarada
// var nombre = 'pedro';

// if(true){
//     var nombre = "juan";
//     var edad = 20;
//     console.log(edad);
// }
// console.log(nombre);
// console.log(edad);

//let y const
let nombre = "pedro";
// let edad;
if(true){
    let nombre = "juan";
    console.log(nombre);
    let edad = 20;
    // console.log(edad);
    if(true){
        console.log(edad);
    }
}
console.log(nombre);
// console.log(edad);

//let podemos reasignar pero const no se puede reasignar
let city = "Buenos aires";
city="Bogota";
console.log(city);

const course = "javascript";
course = "html";
console.log(course);