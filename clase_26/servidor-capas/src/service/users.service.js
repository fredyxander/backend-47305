import { usersDao } from "../dao/index.js";

export class UsersService{
    static getUsers(){
        return usersDao.get();
    };
}