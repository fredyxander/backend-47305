export class CartsManagerMemory{
    constructor(){
        this.carts = [];
    };

    async getCarts(){};
    async createCart(cart){};
    async addProduct(cartId, productId){};
};