const fs = require("fs");
const crypto = require("crypto");

class UserManager{
    #secret = "coderSecretHash";
    constructor(path){
        this.path=path;
    }

    fileExits(){
        return fs.existsSync(this.path);
    }

    async createUser(userInfo){
        try {
            if(this.fileExits()){
                const contenido = await fs.promises.readFile(this.path,"utf-8");
                const users = JSON.parse(contenido);
                userInfo.password = crypto.createHmac('sha256', this.#secret)
                    .update(userInfo.password)
                    .digest('hex');
                users.push(userInfo);
                await fs.promises.writeFile(this.path,JSON.stringify(users, null, '\t'));
                console.log("usuario creado");
            } else {
                throw new Error("No es posible crear el usuario");
            }
        } catch (error) {
            throw error;
        }
    };

    async validateUser(userLogin){ //{email:"email@gmail.com", password:"coder"}
        try {
            if(this.fileExits()){
                const contenido = await fs.promises.readFile(this.path,"utf-8");
                const users = JSON.parse(contenido);
                const user = users.find(elm=>elm.email === userLogin.email);
                if(user){//usuario registrado
                    const hassNewPass = crypto.createHmac('sha256', this.#secret)
                        .update(userLogin.password)
                        .digest('hex');
                    if(user.password === hassNewPass){
                        console.log("Logueado");
                    } else {
                        throw new Error("credenciales invalidas");
                    }
                } else {
                    throw new Error("El usuario no esta registrado");
                }
            } else {
                throw new Error("No es posible loguear el usuario");
            }
        } catch (error) {
            throw error;
        }
    }
};

const operations = async()=>{
    try {
        const manager = new UserManager("usuarios.json");
        // await manager.createUser({name:"pepe", email:"pepe@gmail.com", password:"coder"});
        await manager.validateUser({email:"pepe@gmail.com", password:"coder"});
    } catch (error) {
        console.log(error.message);
    }
}
operations();