const fs = require("fs");

const rutaArchivo = "./ejemploPromesas.txt";

const operaciones = async()=>{
    try {
        //escribir contenido en el archivo
        await fs.promises.writeFile(rutaArchivo, "contenido del archivo");
        console.log("Archivo escrito");
        //leer el archivo
        const contenido = await fs.promises.readFile(rutaArchivo,"utf-8");
        console.log("contenido: ", contenido);
        //eliminar archivo
        await fs.promises.unlink(rutaArchivo);
        console.log("Archivo eliminado");
    } catch (error) {
        console.log("error: ", error.message);
    }
}
operaciones();