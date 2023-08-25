// {
//     1:350,
//     2:450,
//     3:200,
//     ...
// }

//Numero aleatorio entre 1 y 20
//Math.random()*20 //0.01 - 19.99
//Math.ceil 0.2 = 1
//Math.floor 0.2 = 0
//Math.round 0.2=0 ; 0.6=1 ; 0.5=1
// console.log(Math.ceil(Math.random()*20));//1-20

//como evaluar si una propiedad existe dentro de un objeto?
const obj = {1:100,2:330, "location-city":"bogota"}
//1 forma: obj.hasOwnProperty("nombreProperty")
//2 forma: obj["nombreProperty"]
//3 forma: obj.nombreProperty => solo para prop con nombres tipo string sencilo

let aleatorios={};
for(let i=0;i<10000;i++){
    const numeroAleatorio = Math.ceil(Math.random()*20);
    // console.log(numeroAleatorio);
    if(aleatorios[numeroAleatorio]){ //si existe
        aleatorios[numeroAleatorio]++;
        // console.log(aleatorios)
    } else { //si no existe
        aleatorios[numeroAleatorio] = 1;
        // console.log(aleatorios)
    }
}
console.log(aleatorios);
// console.log(Object.values(aleatorios));
const total = Object.values(aleatorios).reduce((acc,curr)=>acc+=curr,0);
console.log(total);