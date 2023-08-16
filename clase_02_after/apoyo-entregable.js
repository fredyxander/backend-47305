class ProductManager{
    constructor(){
        this.products = []
    };

    addProduct(title, description){
        if(!title || !description){
            return console.log("Todos los campos son obligatorios")
        }
        // if(codeExist){
        //     return console.log("El producto ya existe")
        // }
        //crear producto
        const newProduct = {
            title,
            description
        }
        this.products.push(newProduct);
        console.log("producto agregado");
    }
}

const manager = new ProductManager();
// console.log(manager);
manager.addProduct(undefined,"juguete para niño");
manager.addProduct("Pelota",undefined);
manager.addProduct("libro", "libro de ciencia ficción")