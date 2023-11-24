let testPasados=0;
let totalTest=3;

//Función para testear.
const login = ()=>{};

//1 paso.crear las pruebas para los diferentes escenarios
//Escenario 1.
console.log('1.Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)');
let resultado1 = login("usuario1","");
if(resultado1 === "No se ha proporcionado un password"){
    console.log('-->Test1 paso')
} else {
    console.log('-->Test1 NO paso')
};

//Escenario 2.
console.log('2. Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)');
let resultado2 = login("","pass");
if(resultado2 === "No se ha proporcionado un usuario"){
    console.log('-->Test2 paso')
} else {
    console.log('-->Test2 NO paso')
};

//Escenario 3.
console.log("3. Si  el usuario y contraseña coinciden, consologuear (“logueado”)")
let resultado3 = login("coderUser","123");
if(resultado3 === "logueado"){
    console.log("-->Test3 paso")
} else {
    console.log('-->Test3 No paso')
};

//Resultados
if(testPasados===totalTest) console.log("Todos los test pasaron con éxito.");
else console.log(`Pasaron ${testPasados} de un total de ${totalTest} tests.`);