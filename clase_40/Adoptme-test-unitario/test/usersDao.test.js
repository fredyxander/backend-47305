import Users from "../src/dao/Users.dao.js";
import mongoose from "mongoose";
import Assert from "assert";
import userModel from "../src/dao/models/User.js";

const assert = Assert.strict;

try {
    await mongoose.connect("url mongo");
} catch (error) {
    console.log(error.message);
}

describe("Pruebas del modulo users dao", ()=>{

    beforeEach(async function(){
        await userModel.deleteMany({});
    });

    it("El dao de usuario permite obtener los usuarios en un arreglo",async function(){
        const usersDao = new Users();
        const result = await usersDao.get();
        // console.log("result", result);
        //comparacion valor actual, valor esperado
        assert.strictEqual(Array.isArray(result), true);
    });

    it("El dao permite crear un usuario", async function(){
        const usersDao = new Users();
        const user = {
            first_name:"Pepe",
            last_name:"Perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        const result = await usersDao.save(user);
        // console.log("result", result);
        assert.ok(result._id);
    });

});