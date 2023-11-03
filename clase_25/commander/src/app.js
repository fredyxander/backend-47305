import {Command} from "commander";

const program = new Command();

program
.option("-p <port>","argumento para definir el puerto","8080")
.option("--base <base>","tipo de base de datos","mongo")
.requiredOption(
    "-u <user>",
    "Usuario que utiliza la aplicacion",
    "El argumento de usuario es obligatorio"
)

program.parse();

console.log("argumentos", program.opts());