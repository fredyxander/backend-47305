import { productsModel } from "./models/products.model.js";

export class ProductsManagerMongo{
    constructor(){
        this.model = productsModel;
    };

    async createProduct(productInfo){
        try {
            const result = await this.model.create(productInfo);
            return result;
        } catch (error) {
            console.log("createProduct",error.message);
            throw new Error("No se pudo crear el producto");
        }
    };

    async getProducts(){
        try {
            const result = await this.model.find();
            return result;
        } catch (error) {
            console.log("getProducts",error.message);
            throw new Error("No se pudo obtener el listado de productos");
        }
    };

    async getProductById(productId){
        try {
            // const result = await this.model.findOne({_id:productId});
            const result = await this.model.findById(productId);
            return result;
        } catch (error) {
            console.log("getProductById",error.message);
            throw new Error("No se pudo obtener el producto");
        }
    };

    async updateProduct(productId, newProductInfo){
        try {
            // const result = await this.model.updateOne({_id:productId},newProductInfo);
            const result = await this.model.findByIdAndUpdate(productId,newProductInfo,{new:true});
            if(!result){
                throw new Error("No se pudo encontrar el producto a actualizar");
            }
            return result;
        } catch (error) {
            console.log("updateProduct",error.message);
            throw new Error("No se pudo actualizar el producto");
        }
    };

    async deleteProduct(productId){
        try {
            const result = await this.model.findByIdAndDelete(productId);
            if(!result){
                throw new Error("No se pudo encontrar el producto a eliminar");
            }
            return result;
        } catch (error) {
            console.log("deleteProduct",error.message);
            throw new Error("No se pudo eliminar el producto");
        }
    };
};