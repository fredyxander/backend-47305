import { usersDao } from "../dao/index.js";

export class UsersService{
    static getUserByEmail = (email)=>{
        return usersDao.getUserByEmail(email);
    };

    static getUserById = (id)=>{
        return usersDao.getUserById(id);
    };

    static createUser = (newUser)=>{
        return usersDao.createUser(newUser);
    };

    static updateUser = (id, user)=>{
        return usersDao.updateUser(id, user);
    };
};