import { usersModel } from "../../models/users.model.js";

export class UsersMongo{
    constructor(){
        this.model = usersModel;
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
}