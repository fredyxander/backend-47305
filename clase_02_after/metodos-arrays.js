//map: Crea un nuevo arreglo apartir de otro arreglo, con el mismo numero de elementos, pero a cada elemento le aplicamos alguna operacion.
const numeros = [1,2,3,4];
const numerosDuplicados = numeros.map((elm)=>{return elm*2});
// console.log("numeros", numeros);
// console.log("numerosDuplicados", numerosDuplicados);

const users = [{name:"pepe", age:20},{name:"Ana", age:24},{name:"Juan", age:30}];
const usersNames = users.map((elm)=>elm.name);
// console.log("usersNames", usersNames);
const usersNames2 = users.map((elm)=>{return {nombre:elm.name}});
// console.log("usersNames2",usersNames2);


//find: Devolver el primer elemento del arreglo que cumpla un criterio.
const users2 = [{name:"pepe", age:20},{name:"Ana", age:24},{name:"Juan", age:30},{name:"Ana", age:34}];
const userAna = users2.find((elm)=>elm.name === "Ana");
// console.log("userAna", userAna);
//Nota: Si no encuentra el elemento find devuelve undefined


//filter: Devuelve todos los elementos dentro de un arreglo que cumplen una condicion
const usersAna = users2.filter((elm)=>elm.name === "Ana");
// console.log("usersAna",usersAna);

const usersWordN = users2.filter((elm)=>elm.name.includes("n"));
// console.log("usersWordN",usersWordN);

//some:devuelve true, si alguno de los elementos del arreglo cumple una condicion.Sino devuelve false.
const anaExists = users2.some((elm)=>elm.name === "Lucas");
console.log("anaExists",anaExists)

//reduce: Reduce todos los elementos de un array a un unico valor
const arreglo = [1,2,3,4,5];
// let total = 0;
// for(let i=0;i<arreglo.length;i++){
//     total += arreglo[i];
// }
// console.log(total);
const total = arreglo.reduce((acc,curr)=>acc+=curr,0);
// console.log(total);

const carrito = [
    {name:"Libro", price:200},
    {name:"Maleta", price:560},
    {name:"borrador", price:40},
    {name:"Libro universitario", price:890},
];
const totalCarrito = carrito.reduce((acc,curr)=>acc+=curr.price,0);
console.log("totalCarrito",totalCarrito)

const newCarrito = carrito.filter((elm)=>elm.name !== "Maleta");
console.log("newCarrito",newCarrito)