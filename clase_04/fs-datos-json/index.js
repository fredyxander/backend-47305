const fs = require("fs");

const operations = async()=>{
    try {
        //leer el archivo
        const contenido = await fs.promises.readFile("./package.json","utf-8");
        //transformar string a json => JSON.parse(objetoJson)
        const contenidoJson = JSON.parse(contenido);
        console.log(contenidoJson.name);
        contenidoJson.author = "Pepito";
        //tranformamos de json a string y sobreescribimos el archivo
        await fs.promises.writeFile("./package.json",JSON.stringify(contenidoJson,null,"\t"));
        console.log("archivo actualizado");
    } catch (error) {
        console.log(error.message);
    }
}
operations();