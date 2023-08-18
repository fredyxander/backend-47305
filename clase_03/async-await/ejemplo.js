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

//async-await
const operacionesAsincronas = async()=>{
    try {
        const estudiante = await obtenerEstudiante(91);
        const resultado = await aproboCurso(estudiante);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};
operacionesAsincronas();