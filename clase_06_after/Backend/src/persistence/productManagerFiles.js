import fs from "fs";

export class ProductManagerFiles{
    constructor(path){
        this.pathFile = path;
    };

    fileExist(){
        return fs.existsSync(this.pathFile);
    }

    addProduct(){};

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

    getProductById(){};

    updateProduct(){};

    deleteProduct(){};
};

export const variable = "valor";

// export {ProductManagerFiles}