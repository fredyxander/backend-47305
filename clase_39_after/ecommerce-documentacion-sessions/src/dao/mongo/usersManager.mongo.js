import { usersModel } from "./models/users.model.js";

export class UsersManagerMongo{
    constructor(){
        this.model=usersModel;
    };

    async createUser(userInfo){
        try {
            const result = await this.model.create(userInfo);
            return result;
        } catch (error) {
            console.log("createUser: ", error.message);
            throw new Error("Se produjo un error creando el usuario");
        }
    };

    async getUserById(userId){
        try {
            const result = await this.model.findById(userId).lean();
            return result;
        } catch (error) {
            console.log("getUserById: ", error.message);
            throw new Error("Se produjo un error obteniendo el usuario");
        }
    };

    async getUserByEmail(userEmail){
        try {
            const result = await this.model.findOne({email:userEmail}).lean();
            return result;
        } catch (error) {
            console.log("getUserByEmail: ", error.message);
            throw new Error("Se produjo un error obteniendo el usuario");
        }
    };

    async updateUser(id, user){
        try {
            const result = await this.model.findByIdAndUpdate(id, user, {new:true});
            return result;
        } catch (error) {
            console.log("updateUser: ", error.message);
            throw new Error("Se produjo un error actualizando el usuario");
        }
    };
}