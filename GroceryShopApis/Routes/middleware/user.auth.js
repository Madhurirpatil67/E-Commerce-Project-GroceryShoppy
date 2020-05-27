let jwt=require("jsonwebtoken");
let config=require("config");

function userauth(req,res,next){
    let token=req.header("x-auth-token");
    if(!token){
        return res.status(404).send({message:"Invalid Token"});
    }  
    try{
    const dcoded=jwt.verify(token,config.get("apitoken"));
        req.user=dcoded;
        next();
    }
    catch(ex)
    {
    res.status(404).send({message:"Access DENIED"})
    }
};
module.exports=userauth;