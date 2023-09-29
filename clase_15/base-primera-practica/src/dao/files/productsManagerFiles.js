import fs from "fs";

export class ProductsManagerFiles{
    constructor(path){
        this.pathFile = path;
    };

    fileExist(){
        return fs.existsSync(this.pathFile);
    }

    async createProduct(productInfo){
        try {
            if(this.fileExist()){
                const contenidoString = await fs.promises.readFile(this.pathFile,"utf-8");
                const products = JSON.parse(contenidoString);
                let newId=1;
                if(products.length>0){
                    newId=products[products.length-1].id+1;
                }
                productInfo.id=newId;
                products.push(productInfo);
                await fs.promises.writeFile(this.pathFile, JSON.stringify(products, null, 2));
                return "Producto agregado";
            } else {
                throw new Error("No se pudieron obtener los productos");
            }
        } catch (error) {
            throw error;
        }
    };

    async getProducts(){
        try {
            if(this.fileExist()){
                const contenidoString = await fs.promises.readFile(this.pathFile,"utf-8");
                const products = JSON.parse(contenidoString);
                return products;
            } else {
                throw new Error("No se pudieron obtener los productos");
            }
        } catch (error) {
            throw error;
        }
    };

    async getProductById(productId){
        try {
            if(this.fileExist()){
                const contenidoString = await fs.promises.readFile(this.pathFile,"utf-8");
                const products = JSON.parse(contenidoString);
                const product = products.find(p=>p.id === productId);
                if(!product){
                    throw new Error("El producto no existe");
                }
                return product;
            } else {
                throw new Error("No se pubo obtener el producto");
            }
        } catch (error) {
            throw error;
        }
    };

    updateProduct(){};
    deleteProduct(){};
};
