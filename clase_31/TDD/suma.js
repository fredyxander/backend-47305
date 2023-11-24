//Numero de pruebas realizadas y pasadas.
let testPasados=0;
let totalTest=4;

//A) Crear la funcion sumar
const sumar = (...nums)=>{
    if(nums.length===0) return 0;
    if(nums.some(i=>typeof i !== "number")) return null;
    return nums.reduce((acc,i)=>acc+=i,0);
};
// sumar(1,2,3,4,5,6);  ...rest

//B) Crear escenarios (Pruebas)
//Escenario 1.
console.log('1. La función debe devolver null si algún parámetro no es numérico.');
let resultado = sumar(1,"2");
if(resultado === null){
    console.log('--> Test1 pasó');
    testPasados++;
} else {
    console.log('-->Test1 NO pasó, se esperaba recibir dos parámetros numéricos');
};

//Escenario 2.
console.log('2. La función debe devolver 0 si no se pasó ningún parámetro');
let resultado2 = sumar();
if(resultado2 === 0){
    console.log('--> Test2 pasó');
    testPasados++;
} else {
    console.log('-->Test2 NO pasó, se esperaba un resultado igual a 0');
};

//Escenario 3.
console.log("3. La función debe poder realizar la suma correctamente.")
let resultado3 = sumar(3,5);
if(resultado3 === 8){
    console.log("--->Test 3 pasó");
    testPasados++;
} else {
    console.log("---3 prueba NO pasó, se esperaba recibir un resultado = a 8");
};

//Escenario 4.
console.log("4. La función debe poder hacer la suma con cualquier cantidad de números.");
let resultado4 = sumar(3,5,2,10);
if(resultado4 === 20){
    console.log("---4 prueba pasó")
    testPasados++;
} else {
    console.log("---4 prueba NO pasó, se esperaba recibir un resultado = a 20")
};

//Resultados pruebas.
if(testPasados===totalTest) console.log("Todos los test pasaron con éxito.");
else console.log(`Pasaron ${testPasados} de un total de ${totalTest} tests.`);
