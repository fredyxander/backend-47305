import { businessModel } from "../../models/business.model.js";

export class BusinessMongo{
    constructor(){
        this.model = businessModel;
    };

    async get(){
        try {
            const result = await this.model.find();
            return result;
        } catch (error) {
            throw error;
        }
    };

    async getById(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            throw error;
        }
    };

    async createBusiness(info){
        try {
            const result = await this.model.create(info);
            return result;
        } catch (error) {
            throw error;
        }
    };

    async addProduct(id,info){
        try {
            const result = await this.model.findByIdAndUpdate(id,info,{new:true});
            return result;
        } catch (error) {
            throw error;
        }
    };
}