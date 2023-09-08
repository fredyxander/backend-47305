import path from 'path';
import { fileURLToPath } from 'url';
import multer from "multer";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));
// console.log("dirname: ", __dirname);

//indicar donde se guardan los archivos que se suben
//diskstorage significa almacenamiento en memoria
const storage = multer.diskStorage({
    //destination:carpeta donde se guardan los archivos
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../public/images"))
    },

    // filename:con que nombre vamos a guardar el archivo
    filename:function(req,file,cb){
        cb(null,`${req.body.name}-${file.originalname}`)
    }
});

//creamos la funcion middleware para subir las imagenes, que utilizaremos en las diferentes rutas
export const uploader = multer({storage});