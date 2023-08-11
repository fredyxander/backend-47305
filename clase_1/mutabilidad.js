//la mutabilidad con datos primitivos declarados con const no es posible
const city = "Bogota";
// city = "Sao paulo";
// console.log(city);

//tipos objeto son mutables
const person = {
    name:"Pedro",
    edad:20
};
person.name="Laura";
console.log(person);

const numbers = [1,2,3,4];
numbers.push(5);
console.log(numbers)