// const person1 = {
//     name:"pedro",
//     edad:20
// };

// const person2 = {
//     name:"Lucas",
//     edad:30
// }

class Person{
    #course = "javascript";
    constructor(name,age,city){
        this.name=name;
        this.age=age;
        this.city=city;
    };

    saludar(){
        console.log(`Hola soy ${this.name}`)
    }

    getPrivateVariable(){
        console.log(this.#course);
    }
}

//crear objetos a partir de la clase
const person1 = new Person("Juan",20,"Valpariso");
person1.saludar();
person1.getPrivateVariable();
console.log(person1);

const person2 = new Person("Pedro", 30,"Ciudad de Mexico");
console.log(person2);
person2.saludar();