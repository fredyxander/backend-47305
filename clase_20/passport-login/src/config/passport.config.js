import passport from "passport";
import localStrategy from "passport-local";
import { createHash, inValidPassword } from "../utils.js";
import { usersModel } from "../persistence/mongo/models/users.model.js";

//localStrategy: username y password
export const initializePassport = ()=>{
    //Estrategia para registrar a los usuarios
    passport.use("signupLocalStrategy", new localStrategy(
        {
            passReqToCallback:true,
            usernameField:"email", //ahora el campo username es igual al campo email
        },
        async (req,username,password,done)=>{
            const {first_name} = req.body;
            try {
                const user = await usersModel.findOne({email:username});
                if(user){
                    //el usuario ya esta registrado
                    return done(null,false);
                }
                //El usuario no esta registrado
                const newUser = {
                    first_name,
                    email:username,
                    password:createHash(password)
                };
                console.log(newUser);
                const userCreated = await usersModel.create(newUser);
                return done(null,userCreated);
            } catch (error) {
                return done(error);
            }
        }
    ));

    //Estrategia para login a los usuarios
    passport.use("loginLocalStrategy", new localStrategy(
        {
            usernameField:"email", //ahora el campo username es igual al campo email
        },
        async (username,password,done)=>{
            try {
                const user = await usersModel.findOne({email:username});
                if(!user){
                    //el usuario no esta registrado
                    return done(null,false);
                }
                if(!inValidPassword(password,user)){
                    return done(null,false);
                }
                //validamos que el usuario esta registrado y que la contrase;a es correcta
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
        const user = await usersModel.findById(id);
        done(null,user);//req.user = informacion del usuario que traemos de la base de datos
    });
};