export const productCreateError = (product)=>{
    return `
        Todos los campos son obligatorios,
        Listado de campos obligatorios:
        title: Este campo debe ser de tipo string, y se recibio ${product.title},
    `
};