export class ProductsManagerMemory{
    constructor(){
        this.products = [];
    };

    async createProduct(productInfo){};
    async getProducts(){};
    async getProductById(productId){};
    async updateProduct(productId, productInfo){};
    async deleteProduct(productId){};
};
