import passport from "passport";
import LocalStrategy from "passport-local";
import { createHash, inValidPassword } from "../utils.js";
import { usersDao } from "../dao/index.js";

export const initializePassport = ()=>{
    //Estrategia para registrar a los usuarios
    passport.use("signupLocalStrategy", new LocalStrategy(
        {
            passReqToCallback:true,
            usernameField:"email", //ahora el campo username es igual al campo email
        },
        async (req,username,password,done)=>{
            const {first_name,last_name,age} = req.body;
            // console.log("req.file", req.file);
            try {
                const user = await usersDao.getUserByEmail(username);
                if(user){
                    //el usuario ya esta registrado
                    return done(null,false);
                }
                //El usuario no esta registrado
                const newUser = {
                    first_name,
                    last_name,
                    age,
                    email:username,
                    password:createHash(password),
                    avatar:req.file.filename
                };
                // console.log(newUser);
                const userCreated = await usersDao.createUser(newUser);
                return done(null,userCreated);
            } catch (error) {
                return done(error);
            }
        }
    ));

    //Estrategia para login a los usuarios
    passport.use("loginLocalStrategy", new LocalStrategy(
        {
            usernameField:"email", //ahora el campo username es igual al campo email
        },
        async (username,password,done)=>{
            try {
                const user = await usersDao.getUserByEmail(username);
                if(!user){
                    //el usuario no esta registrado
                    return done(null,false);
                }
                if(!inValidPassword(password,user)){
                    return done(null,false);
                }
                //validamos que el usuario esta registrado y que la contraseña es correcta
                user.last_connection = new Date();
                await usersDao.updateUser(user._id, user);
                return done(null,user);
            } catch (error) {
                return done(error);
            }
        }
    ));

    passport.serializeUser((user,done)=>{
        done(null, user._id);
    });

    passport.deserializeUser(async(id,done)=>{
        const user = await usersDao.getUserById(id);
        done(null,user);//req.user = informacion del usuario que traemos de la base de datos
    });
};
