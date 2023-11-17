import {ordersModel} from "../../models/orders.model.js";

export class OrdersMongo{
    constructor(){
        this.model = ordersModel;
    };

    async getById(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            throw error;
        }
    };

    async create(info){
        try {
            const result = await this.model.create(info);
            return result;
        } catch (error) {
            throw error;
        }
    };

    async update(id,info){
        try {
            const result = await this.model.findByIdAndUpdate(id,info,{new:true});
            return result;
        } catch (error) {
            throw error;
        }
    };
}