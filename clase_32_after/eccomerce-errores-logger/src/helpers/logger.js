import winston from "winston";
import {__dirname} from "../utils.js";
import path from "path";
import { config } from "../config/config.js";

const currentEnv = config.server.env;
// console.log(process.env);

const customLevels = {
    levels:{
        error:0,
        advertencia:1,
        informativo:2,
        debbug:3
    },
    colors:{
        error:"red",
        advertencia:"yellow",
        informativo:"blue",
        debbug:"magenta"
    }
};

winston.addColors(customLevels.colors);
//logger para dev
const devLogger = winston.createLogger({
    levels:customLevels.levels,
    //definimos transportes: sistemas de muestra o almacenamiento de logs
    transports:[
        new winston.transports.Console({level:"debbug"}),
    ]
});

//logger para prod
const prodLogger = winston.createLogger({
    levels:customLevels.levels,
    transports:[
        new winston.transports.File({filename:path.join(__dirname,"/logs/prod.log"), level:"advertencia"})
    ]
});

let logger;
if(currentEnv === "development"){
    logger = devLogger;
} else {
    logger = prodLogger;
}

export {logger};