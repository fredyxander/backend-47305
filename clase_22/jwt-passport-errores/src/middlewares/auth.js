import passport from "passport";

export const authenticate  = (strategy)=>{
    const passportAuthenticate = async(req,res,next)=>{
        passport.authenticate(strategy,{session:false},(err,user,info)=>{
            if(err) return next(err);
            if(!user){
                return res.status(401).json({error:info.toString()});
            }
            req.user=user;
            next();
        })(req,res,next)
    }
    return passportAuthenticate;
};

export const authorize = (role)=>{//role que tiene acceso a la ruta
    return async (req,res,next)=>{
        if(!req.user) return res.status(401).json({error:"Usuario no autenticado"});

        if(req.user.role !== role){
            return res.status(403).json({error:"El usuario no tiene permisos para acceder a este recurso"});
        };
        next();
    };
};