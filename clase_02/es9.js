//destructuring-objetos
const userPepe = {
    name:"pepe",
    lastname:"perez",
    age:20,
    city:"Miami"
};

const cityPepe = userPepe.city; // userPepe['city']
const agePepe = userPepe.age;
// console.log("age", cityPepe);
// console.log("city", agePepe);

const {age, city:cityPepe2} = userPepe;
// console.log("age", age);
// console.log("city", cityPepe2);


//spread-operator
const userPepe2 = {
    name:"pepe",
    lastname:"perez",
    age:20,
    city:"Miami"
};

const pepeData={
    ...userPepe2,
    course:"javascript",
    level:"intermedio",
    grade:4.8
}
// console.log("pepeData", pepeData);


const arreglo1 = [1,2,3];
const arreglo2 = [...arreglo1];
arreglo2.push(4);
console.log("arreglo1", arreglo1);
console.log("arreglo2", arreglo2);

// const objeto2 = {...objeto1}


// //spread-operator-arreglos
const numerosA=[1,2,3,4];
const numerosB=[5,6,7,8];
const arregloCompleto = [...numerosA, ...numerosB,10,12,34];
console.log("arregloCompleto", arregloCompleto);

//operador rest
function sumar(num1,num2,...rest){
    console.log(rest)
};
sumar(1,2,5,4,3,6,78,7);