export const isAuth = (req,res,next)=>{
    console.log("middleware");
    if(!req.user){
        return res.json({status:"error", message:"Debes estar autenticado"});
    }
    next();
};

//optional chainning
// if(req.user?.role){

// } else {

// }

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