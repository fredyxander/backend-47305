import { productsModel } from "./models/products.model.js";

export class ProductsManagerMongo{
    constructor(){
        this.model=productsModel;
    };

    async createProduct(productInfo){
        try {
            const result = await this.model.create(productInfo);
            return result;
        } catch (error) {
            console.log("createProduct: ", error.message);
            throw new Error("Se produjo un error al crear el producto");
        }
    };

    async getProducts(){
        try {
            const result = await this.model.find().lean();
            return result;
        } catch (error) {
            console.log("getProducts: ", error.message);
            throw new Error("Se produjo un error al crear el producto");
        }
    };

    async getProductsPaginate(query, options){
        try {
            const result = await this.model.paginate(query, options);
            return result;
        } catch (error) {
            console.log("getProducts: ", error.message);
            throw new Error("Se produjo un error al crear el producto");
        }
    };

    async getProductById(productId){};

    async updateProduct(productId, newProductInfo){};

    async deleteProduct(productId){};
}