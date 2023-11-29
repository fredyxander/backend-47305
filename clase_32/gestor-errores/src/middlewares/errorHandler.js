import { EError } from "../enums/EError.js";

export const errorHandler = (error, req,res,next)=>{
    console.log(error.code);
    switch (error.code) {
        case EError.DATABASE_ERROR:
            res.json({status:"error", error:error.cause});
            break;

        case EError.INVALID_BODY_JSON:
            res.json({status:"error", error:error.message});
            break;

        case EError.INVALID_PARAM:
            res.json({status:"error", error:error.cause, message:error.message});
            break;

        default:
            break;
    }
};