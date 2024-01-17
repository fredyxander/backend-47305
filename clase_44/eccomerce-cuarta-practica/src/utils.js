import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import bcrypt from "bcrypt";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

export const inValidPassword = (password,user)=>{
    return bcrypt.compareSync(password,user.password);
};

//multer
const checkValidFields = (user)=>{
    const {first_name, email, password} = user;
    if(!first_name || !email || !password){
        return false;
    } else {
        return true;
    }
};
//filtro para subir imagenes de usuarios
const profileMulterFilter = (req,file,cb)=>{
    if(!checkValidFields(req.body)){
        cb(null, false);
    } else {
        cb(null, true);
    }
};
//configurar multer para guardar las imagenes de los usuarios
const profileStorage = multer.diskStorage({
    //donde vamos a guardar las imagenes
    destination: function(req,file,cb){
        cb(null, path.join(__dirname,"/multer/users/img") )
    },

    //con que nombre vamos a guardar la imagen
    filename: function(req,file,cb){
        cb(null,`${req.body.email}-perfil-${file.originalname}`)
    }
});
//creamos el uploader de las imagenes de perfil
const uploadProfile = multer({storage:profileStorage, fileFilter:profileMulterFilter});


//configurar multer para guardar los documentos de los usuarios
const documentsStorage = multer.diskStorage({
    //donde vamos a guardar las imagenes
    destination: function(req,file,cb){
        cb(null, path.join(__dirname,"/multer/users/documents") )
    },

    //con que nombre vamos a guardar la imagen
    filename: function(req,file,cb){
        cb(null,`${req.user.email}-document-${file.originalname}`)
    }
});
//creamos el uploader de las imagenes de perfil
const uploadDocuments = multer({storage:documentsStorage});


//configurar multer para guardar las imaneges de los productos
const imgProductsStorage = multer.diskStorage({
    //donde vamos a guardar las imagenes
    destination: function(req,file,cb){
        cb(null, path.join(__dirname,"/multer/products/img") )
    },

    //con que nombre vamos a guardar la imagen
    filename: function(req,file,cb){
        cb(null,`${req.body.code}-product-${file.originalname}`)
    }
});
//creamos el uploader de las imagenes de perfil
const uploadImgProducts = multer({storage:imgProductsStorage});

export {uploadProfile, uploadDocuments, uploadImgProducts};
