//importamos la capa de persistencia
import { toysDao } from "../dao/index.js";

export class ToysService{
    static getToys(){
        return toysDao.get();
    };

    static saveToy(toy){
        return toysDao.save(toy)
    };
}