const mongoose=require("mongoose");
const Joi=require("@hapi/joi");

let contactSchema=new mongoose.Schema({
    name:{type:String,required:true,min:3,max:50},
    subject:{type:String,required:true,min:3,max:100},
    email:{type:String,required:true,min:3,max:50,email:true},
    message:{type:String,required:true,min:5,max:100}
});
let contactModel=mongoose.model("contacts",contactSchema);

function contactValidation(msg){
    let schema=Joi.object({
        name:Joi.string().required().min(3).max(50),
        subject:Joi.string().required().min(3).max(100),
        email:Joi.string().required().min(3).max(50).email(),
        message:Joi.string().required().min(5).max(100)
    });
    return schema.validate(msg);
};
module.exports={contactModel,contactValidation};