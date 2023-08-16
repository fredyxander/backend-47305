const cursoUsuarios = {
//  key:  value
    pepe: "Javascript",
    maria: "Html",
    Daniel: "Node",
    Pablo: "css"
};


//Object.entries:
const parLlaveValor = Object.entries(cursoUsuarios);
// console.log(parLlaveValor); //output: [ [propiedad:valor], [], [] ]

//Object.keys
const propiedadesObjeto = Object.keys(cursoUsuarios);
// console.log(propiedadesObjeto); //output:[ 'pepe', 'maria', 'Daniel', 'Pablo' ]


//Object.values
const valoresObjeto = Object.values(cursoUsuarios);
// console.log(valoresObjeto);//[ 'Javascript', 'Html', 'Node', 'css' ]