import { usersDao } from "../dao/index.js";

export class UsersService{
    static getUser = (id)=>{
        return usersDao.getById(id);
    };

    static createUser = (newUser)=>{
        return usersDao.create(newUser);
    };
}