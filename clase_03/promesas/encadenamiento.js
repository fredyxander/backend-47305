const estudiantes = [
    {
        id:1,
        nombre:"Juan",
        calificacion:3.5
    },
    {
        id:2,
        nombre:"Ana",
        calificacion:2.0
    }
]




const obtenerEstudiante = (idEstudiante)=>{
    return new Promise((resolve, reject)=>{
        const estudianteEncontrado = estudiantes.find(estudiante=>estudiante.id === idEstudiante);
        // console.log(estudianteEncontrado)//si se encuentra find devuelve el elemento encontrado, sino devuelve undefined
        if(estudianteEncontrado){
            resolve(estudianteEncontrado)
        } else {
            reject("El estudiante no fue encontrado")
        }
    })
};


const aproboCurso=(estudiante)=>{
    return new Promise((resolve,reject)=>{
        if(estudiante.calificacion>=3){
            resolve(`el estudiante ${estudiante.nombre} aprobó el curso`);
        } else {
            reject(`El estudiante ${estudiante.nombre} no aprobó el curso`);
        }
    })
};

// Luego de crear las funciones, las ejecutamos para obtener el resultado de las promesas.
//Ejecutamos las funciones
obtenerEstudiante(1)
.then((resultado)=>{
    console.log(resultado);
    //retornamos la segunda promesa
    return aproboCurso(resultado);
})
//obtenemos el resultado de la segunda promesa
.then((resultado2daPromesa)=>{
    console.log(resultado2daPromesa);
})
.catch((error)=>{
    console.log(`Error: ${error}`)
})
.finally(()=>{
    console.log("Las promesas ya terminaron de ejecutarse");
});
