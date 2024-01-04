import { expect } from "chai";
import { createHash } from "../src/utils/index.js";
import UserDTO from "../src/dto/User.dto.js";

describe("Pruebas de bcrypt y dto", ()=>{

    it("El servicio debe realizar un hasheo efectivo de la contraseña (debe corroborarse que el resultado sea diferente a la contraseña original", async function(){
        const originalPass = "coder";
        const result = await createHash(originalPass);
        // console.log(result);
        const hashExp = /(?=[A-Za-z0-9@#$%/^.,{}&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/g;
        expect(hashExp.test(result)).to.be.equal(true);
        expect(originalPass).to.not.be.equal(result);
    });

    it("Por parte del DTO de usuario: Corroborar que el DTO unifique el nombre y apellido en una única propiedad.", async function(){
        const user = {
            first_name:"Pepe",
            last_name:"Perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        const result = UserDTO.getUserTokenFrom(user);
        console.log(result);
        expect(result).to.have.property("name");
        expect(result.name).to.be.equal(`${user.first_name} ${user.last_name}`);
    });

});
