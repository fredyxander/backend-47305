import Users from "../src/dao/Users.dao.js";
import mongoose from "mongoose";
import userModel from "../src/dao/models/User.js";
import chai from "chai";

try {
    await mongoose.connect("url mongo");
} catch (error) {
    console.log(error.message);
}

const expect = chai.expect;

describe("Pruebas del modulo users dao", ()=>{

    beforeEach(async function(){
        await userModel.deleteMany({});
    });

    before(function(){
        this.usersDao = new Users();
    });

    it("El dao de usuarios permite obtener los usuarios en un arreglo",async function(){
        const result = await this.usersDao.get();
        // console.log("result", result);
        //comparacion valor actual, valor esperado
        expect(result).to.be.deep.equal([]);
    });

    it("El dao permite crear un usuario", async function(){
        const user = {
            first_name:"Pepe",
            last_name:"Perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        const result = await this.usersDao.save(user);
        // console.log("result", result);
        // assert.ok(result._id);
        expect(result).to.have.property("_id");
    });

    it("El dao permite actualizar un usuario", async function(){
        const userOne = {
            first_name:"Pepe",
            last_name:"Perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        const resultSave = await this.usersDao.save(userOne);
        const userId = resultSave._id;
        userOne.last_name="Diaz";
        const resultUpdate = await this.usersDao.update(userId,userOne);
        expect(resultUpdate.last_name).to.be.equal("Perez");
    });

});