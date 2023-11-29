export const userCreateError = (user)=>{
    return `
        Todos los campos son obligatorios,
        Listado de campos obligatorios:
        name: Este campo debe ser de tipo string, y se recibio ${user.name},
        lastname: Este campo debe ser de tipo string, y se recibio ${user.lastname},
        email: Este campo debe ser tipo string, y se recibio ${user.email},
        Listado campos opcionales:
        age: Este campo debe ser tipo numerico, y se recibio ${user.age},
    `
};