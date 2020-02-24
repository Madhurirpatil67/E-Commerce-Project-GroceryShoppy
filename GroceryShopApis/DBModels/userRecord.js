const mongoose=require("mongoose");
const Joi=require("@hapi/joi");

let userSchema=new mongoose.Schema({
  firstName:{type:String,required:true,min:3,max:50},
  lastName:{type:String,required:true,min:3,max:50},
  newsLetterCheck:{type:Boolean},
  userLogin:{
      userEmail:{type:String,required:true,min:5,max:50,unique:true},
      userPassword:{type:String,required:true,min:5,max:25}
  },
  termsAcceptCheck:{type:Boolean,required:true},
  resetPasswordToken:{type:String},
  resetPasswordExpires:{type:Date},
  isAdmin:{type:Boolean},
  recordDate:{type:Date,default:Date.now},
  updateRecord:{type:Date,default:Date.now}
});
let userModel=mongoose.model("userRecord",userSchema);

function userValidation(msg){
  let schema=Joi.object({
    firstName:Joi.string().required().min(3).max(50),
    lastName:Joi.string().required().min(3).max(50),
    newsLetterCheck:Joi.boolean(),
    userLogin:{
        userEmail:Joi.string().required().min(5).max(50).email(),
        userPassword:Joi.string().required().min(5).max(25)
    },
    termsAcceptCheck:Joi.boolean().required(),
    resetPasswordToken:Joi.string(),
    resetPasswordExpires:Joi.date(),
    isAdmin:Joi.boolean(),
    recordDate:Joi.date().default(Date.now),
    updateRecord:Joi.date().default(Date.now)
  })
  return schema.validate(msg);
};
module.exports={userModel,userValidation};
