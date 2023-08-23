//Escribir un archivo
//importamos el módulo
// const fs = require('fs');
//escritura archivo: Si el archivo no existe lo crea, y si existe lo sobreescribe.
// fs.writeFile('./ejemploCallback.txt','contenido callback',(error)=>{
//     if(error){
//         return console.log('Error al escribir el archivo')
//     }
//     console.log('Archivo escrito');
// });

// //Escribir archivo y luego leerlo
// const fs = require('fs');
// fs.writeFile('./ejemploCallback.txt','contenido callback',(error)=>{
//     if(error){
//         return console.log('Error al escribir el archivo')
//     }
//     console.log('Archivo escrito');
//     //leemos el archivo
//     fs.readFile('./ejemploCallback.txt',"utf-8",(err,contenido)=>{
//         if(err){
//             return console.log('Error al leer el archivo');
//         }
//         console.log('contenido: ', contenido);
//     })
// });


//Escribir archivo, leerlo, y luego eliminarlo.
const fs = require('fs');
fs.writeFile('./ejemploCallback.txt','contenido callback',(error)=>{
    if(error){
        return console.log('Error al escribir el archivo')
    }
    console.log('Archivo escrito');
    //leemos el archivo
    fs.readFile('./ejemploCallback.txt','utf8',(err,resultado)=>{
        if(err){
            return console.log('Error al leer el archivo');
        }
        console.log('contenido: ', resultado);
        //eliminamos el archivo
        fs.unlink('./ejemploCallback.txt',(err)=>{
            if(err){
                return console.log('Error al eliminar archivo');
            }
            console.log('Archivo eliminado');
        })
    })
});
