function admin(req,res,next){
  if(!req.user.isAdmin){
      return res.status(404).send({message:"Access DENIED"});
  }
  next();
};

module.exports=admin; 