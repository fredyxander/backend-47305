const fs = require("fs");

// const fileExist = fs.existsSync("./archivo.txt");
// console.log("fileExist",fileExist);

//verificar si un archivo existe
if(fs.existsSync("./archivo.txt")){
    try {
        console.log("El archivo existe");
        //escribir contenido dentro del archivo
        const rutaArchivo = "./archivo.txt";
        const contenidoArchivo = "Este es mi primer contenido"; //formato string
        fs.writeFileSync(rutaArchivo,contenidoArchivo);
        console.log("archivo escrito");
        //leer contenido de un archivo
        const contenido = fs.readFileSync("./archivo2.txt","utf-8");
        console.log("contenido: ", contenido);
        //eliminar un archivo
        fs.unlinkSync("./archivo3.txt");
        console.log("archivo eliminado");
    } catch (error) {
        console.log("error: ", error.message);
    }
} else {
    console.log("el archivo no existe");
}