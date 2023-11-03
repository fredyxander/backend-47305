import dotenv from "dotenv";
import path from "path";
import {__dirname} from "../utils.js";
import {Command} from "commander";

const program = new Command();

//especificamos los argumentos
program
.option("--mode <modo>","Modo o entorno de trabajo","development");

program.parse();
const args = program.opts();//valores de los argumentos
// console.log("args", args);
const envMode = args.mode;

const pathEnv = envMode === "production" ? path.join(__dirname,"../.env.production") : path.join(__dirname,"../.env.development");

dotenv.config({
    path:pathEnv
}); //process.env

export const config = {
    server:{
        port:process.env.PORT,
        secretToken:process.env.SECRET_TOKEN,
        store:process.env.STORE
    },
    mongo:{},
    github:{}
};
console.log("config", config);