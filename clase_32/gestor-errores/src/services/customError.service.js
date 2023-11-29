export class CustomError{
    static createError({name="Error", cause, message, errorCode=1}){
        const error = new Error(message, {cause});
        error.name = name;
        error.code = errorCode;
        console.log("CustomError", error);
        throw error;
    };
};