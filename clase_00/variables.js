// Definir variables que almacenen datos (nombre, edad, precio, nombres de series y películas), mostrar esos valores por consola, incrementar la edad en 1, una serie a la lista y volver a mostrarlas. Compartir la definición en el Visual Studio Code.

var nombre = "Pepe";//string
var edad = 20;//number
var precio = 20.5;//number
var series = ["Stranger things","the office","breaking bad","loki"];//array
var peliculas = [//array
    {
        titulo:"Los vengadores",
        year:2010,
        autores:["Captian america","tony stark"]
    },
    {
        titulo:"Interstelar",
        year:2008,
        autores:["Jhon","Ana"]
    }
];
console.log(nombre);
console.log(edad);
console.log(precio);
console.log(series);
console.log(peliculas);

// edad += 1;
// edad = edad + 1;
edad++;
console.log(edad);

//push:insertar un nuevo elemento al final del arreglo
series.push("Bety la fea");
console.log(series);
console.table(series);
console.log(series[3]);