import passport from "passport";
import jwt from "passport-jwt";
import {PRIVATE_KEY}from "../utils.js";

const JWTStrategy = jwt.Strategy;
const extractJwt = jwt.ExtractJwt; //Extraer el token (cookie,query params, body, headers)

export const initializePassport = ()=>{
    passport.use("jwtAuth", new JWTStrategy(
        {
            //Extraer la informacion del token
            jwtFromRequest:extractJwt.fromExtractors([cookieExtractor]),
            secretOrKey:PRIVATE_KEY
        },
        async (jwtPayload,done)=>{
            try {
                return done(null,jwtPayload); //req.user = info del token
            } catch (error) {
                return done(error);
            }
        }
    ));
}

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