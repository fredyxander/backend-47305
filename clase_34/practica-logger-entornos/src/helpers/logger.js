import winston from "winston";
import {__dirname} from "../util.js";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const currentEnv = process.env.NODE_ENVIRONMENT || "development";
// console.log(process.env);
//logger para dev
const devLogger = winston.createLogger({
    //definimos transportes: sistemas de muestra o almacenamiento de logs
    transports:[
        new winston.transports.Console({level:"silly"}),
    ]
});

//logger para prod
const prodLogger = winston.createLogger({
    transports:[
        new winston.transports.File({filename:path.join(__dirname,"/logs/prod.log"), level:"info"})
    ]
});

let logger;
if(currentEnv === "development"){
    logger = devLogger;
} else {
    logger = prodLogger;
}

export {logger};