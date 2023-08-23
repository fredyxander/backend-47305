const fs = require("fs");

class UsersManager{
    constructor(filePath){
        this.filePath = filePath;
    }

    fileExist(){
        return fs.existsSync(this.filePath);
    }

    async getUsers(){
        try {
            if(this.fileExist()){
                //leer el archivo
                const contenido = await fs.promises.readFile(this.filePath,"utf-8");
                //transformar string a json => JSON.parse(objetoJson)
                const contenidoJson = JSON.parse(contenido);
                return contenidoJson;
            } else {
                throw new Error("no es posible leer el archivo")
            }
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }

    async createUser(userInfo){
        try {
            if(this.fileExist()){
                //leer el archivo
                const contenido = await fs.promises.readFile(this.filePath,"utf-8");
                //transformar string a json => JSON.parse(objetoJson)
                const contenidoJson = JSON.parse(contenido);
                contenidoJson.push(userInfo);
                await fs.promises.writeFile(this.filePath,JSON.stringify(contenidoJson,null,"\t"));
                console.log("usuario agregado");
            } else {
                throw new Error("no es posible guardar el usuario")
            }
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
};

const operations = async ()=>{
    try {
        const manager = new UsersManager("./usuarios.json");
        const users = await manager.getUsers();
        console.log(users);
        await manager.createUser({nombre:"pepe", age:20})
        await manager.createUser({nombre:"Maria", age:25})
    } catch (error) {
        console.log(error.message);
    }
}
operations()