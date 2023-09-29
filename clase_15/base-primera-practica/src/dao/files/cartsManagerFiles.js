import fs from "fs";

export class CartsManagerFiles{
    constructor(path){
        this.pathFile = path;
    };

    fileExist(){
        return fs.existsSync(this.pathFile);
    };

    async getCarts(){
        try {
            if(this.fileExist()){
                const contenidoString = await fs.promises.readFile(this.pathFile,"utf-8");
                const carts = JSON.parse(contenidoString);
                return carts;
            } else {
                throw new Error("No se pudieron obtener los carritos");
            }
        } catch (error) {
            throw error;
        }
    };

    async createCart(){
        try {
            if(this.fileExist()){
                const contenidoString = await fs.promises.readFile(this.pathFile,"utf-8");
                const carts = JSON.parse(contenidoString);
                const newCart = {
                    id:1,
                    products:[]
                };
                carts.push(newCart);
                await fs.promises.writeFile(this.pathFile,JSON.stringify(carts,null, '\t'));
                return newCart;
            } else {
                throw new Error("No se pudieron obtener los carritos");
            }
        } catch (error) {
            throw error;
        }
    };

    async addProduct(cartId, productId){};
};