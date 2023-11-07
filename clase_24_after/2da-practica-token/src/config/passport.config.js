import passport from "passport";
import LocalStrategy from "passport-local";
import { createHash, inValidPassword } from "../utils.js";
import { usersService } from "../persistence/index.js";
import { PRIVATE_KEY } from "../utils.js";
import jwt from "passport-jwt";

const JWTStrategy = jwt.Strategy;
const extractJwt = jwt.ExtractJwt; //Extraer el token (cookie,query params, body, headers)

export const initializePassport = ()=>{
    //Estrategia para registrar a los usuarios
    passport.use("signupLocalStrategy", new LocalStrategy(
        {
            passReqToCallback:true,
            usernameField:"email", //ahora el campo username es igual al campo email
        },
        async (req,username,password,done)=>{
            const {first_name,last_name,age} = req.body;
            try {
                const user = await usersService.getUserByEmail(username);
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
                    password:createHash(password)
                };
                console.log(newUser);
                const userCreated = await usersService.createUser(newUser);
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
                const user = await usersService.getUserByEmail(username);
                if(!user){
                    //el usuario no esta registrado
                    return done(null,false);
                }
                if(!inValidPassword(password,user)){
                    return done(null,false);
                }
                //validamos que el usuario esta registrado y que la contraseña es correcta
                return done(null,user);//req.user
            } catch (error) {
                return done(error);
            }
        }
    ));

    passport.use("jwtAuth", new JWTStrategy(
        {
            //Extraer la informacion del token
            jwtFromRequest:extractJwt.fromExtractors([cookieExtractor]),
            secretOrKey:PRIVATE_KEY
        },
        async (jwtPayload,done)=>{
            // console.log("jwtPayload",jwtPayload);
            try {
                return done(null,jwtPayload); //req.user = info del token
            } catch (error) {
                return done(error);
            }
        }
    ));
};

//funcion para extraer el token de la cookie
const cookieExtractor = (req)=>{
    let token;
    if(req && req.cookies){ //req?.cookies
        token = req.cookies["cookieToken"];
    } else {
        token = null;
    }
    return token;
};