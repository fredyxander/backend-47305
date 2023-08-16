const persons = [
    {id:1,name:'pepe'},
    {id:2,name:'juan'},
    {id:3,name:'lucas'},
    {id:2,name:'maria'}
]
//typeof
console.log(typeof persons);
console.log(Array.isArray(persons));

//El metodo find devuelve un objeto
const person = persons.find(elm=>{
    if(elm.id === 2){
        return elm;
    }
});
console.log("person",person);

const numbers = [1,2,3,4];
const number = numbers.find((item)=>{
    if(item===3){
        return item
    }
});
console.log(number)