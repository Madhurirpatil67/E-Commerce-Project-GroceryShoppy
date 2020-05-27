let express=require("express");
let router=express.Router();
let bcrypt=require("bcrypt");
let Joi=require("@hapi/joi");
let user=require("../../DBModels/userRecord");
let auth=require("../middleware/user.auth");
let admin=require("../middleware/admin");

router.get("/me",auth,async(req,res)=>{
  let data=await user.userModel.findById(req.user._id)
  .select("-userLogin.userPassword -isAdmin");
  res.send(data);
});

router.get("/users",auth,async(req,res)=>{
    let data=await user.userModel.find();
    res.send({item:data});
});

router.post("/login",async(req,res)=>{
  let {error}=loginValidation(req.body);
  if(error){
    return res.send(error.details[0].message)
  }

  let users=await user.userModel.findOne({"userLogin.userEmail":req.body.userLogin.userEmail});
  if(!users){return res.status(403).send({message:"Invalid Email Id"})}
  let password=await bcrypt.compare(req.body.userLogin.userPassword,users.userLogin.userPassword);
  if(!password){return res.status(403).send({message:"Invalid Password"})}
  let token=users.UserToken();
  res.header("x-auth-token",token).send({message:"Login Successfully",token:token});
});

router.post("/register",async(req,res)=>{
  let email=await user.userModel.findOne({"userLogin.userEmail":req.body.userLogin.userEmail});
    if(email)
    {
        return res.status(403).send("User Already Exist.....");
    }  
  let {error}=user.userValidation(req.body);
    if(error)
    {
        return res.send(error.details[0].message)
    }
  let users=user.userModel({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      newsLetterCheck:req.body.newsLetterCheck,
      userLogin:req.body.userLogin,
      termsAcceptCheck:req.body.termsAcceptCheck,
      resetPasswordToken:req.body.resetPasswordToken,
      resetPasswordExpires:req.body.resetPasswordExpires,
      isAdmin:req.body.isAdmin,
      recordDate:req.body.recordDate,
      updateRecord:req.body.updateRecord
  });
  let salt=await bcrypt.genSalt(10);
  users.userLogin.userPassword=await bcrypt.hash(users.userLogin.userPassword,salt);
  let data=await users.save();
  res.send({message:"Registration Done....!",item:data});
});

function loginValidation(msg)
{
   let Schemas=Joi.object({
    userLogin:{
                userEmail:Joi.string().required(),
                userPassword:Joi.string().required()
               }
   });
   return Schemas.validate(msg);
};

module.exports=router;