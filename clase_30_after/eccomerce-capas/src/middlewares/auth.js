export const isAuth = (req,res,next)=>{
    console.log("middleware");
    next();
};

//roles = ["admin"]
export const checkRole = (roles)=>{
    return (req,res,next)=>{
        console.log(req.user);
        if(!roles.includes(req.user.role)){
            res.json({status:"error", message:"No tienes accesso"});
        } else {
            next();
        }
    }
};