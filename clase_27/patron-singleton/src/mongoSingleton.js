import mongoose from "mongoose";

export class MongoSingleton{
    static #instance;

    static #connectDB(){
        const connection = mongoose.createConnection("url mongo");
        return connection;
    }

    static getInstance(){
        if(this.#instance){
            console.log("base de datos ya conectada");
            return this.#instance;
        } else {
            this.#instance = this.#connectDB();
            return this.#instance;
        }
    }
};