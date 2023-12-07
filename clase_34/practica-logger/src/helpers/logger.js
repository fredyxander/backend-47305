import winston from "winston";
import {__dirname} from "../util.js";
import path from "path";

const logger = winston.createLogger({
    //definimos transportes: sistemas de muestra o almacenamiento de logs
    transports:[
        new winston.transports.Console({level:"silly"}),
        new winston.transports.File({filename:path.join(__dirname,"/logs/warnings.log"), level:"warn"})
    ]
});

export {logger};