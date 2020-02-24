const mongoose=require("mongoose");
const Joi=require("@hapi/joi");

let cartItemSchema=new mongoose.Schema({
  prodId:{type:String,required:true,min:1,max:100},
  name:{type:String,required:true,min:3,max:100},
  image:{type:String,required:true,min:3,max:100},
  price:{type:Number,required:true,min:1},
  quantity:{type:Number,required:true,min:1},
  totalPrice:{type:Number,required:true,min:1},
  recoedDate:{type:Date,default:Date.now},
  updateRecord:{type:Date,default:Date.now}
});
let cartItemModel=mongoose.model("cartItemRecords",cartItemSchema);

function cartItemValidation(error)
{
    let Schema=Joi.object({
        prodId:Joi.string().required().min(1).max(100),
        name:Joi.string().required().min(3).max(100),
        image:Joi.string(),
        price:Joi.number().required().min(1),
        quantity:Joi.number().required().min(1),
        totalPrice:Joi.number().required().min(1),
        recoedDate:Joi.date().default(Date.now),
        updateRecord:Joi.date().default(Date.now)
    });
    return Schema.validate(error);
};

let userCartSchema=new mongoose.Schema({
   userEmail:{type:String,required:true,min:5,max:100,email:true},
   cartItem:[cartItemSchema]
});
let userCartModel=mongoose.model("userCartItem",userCartSchema);

function userCartItemValidation(msg)
{
 let Schema=Joi.object({
    userEmail:Joi.string().required().min(5).max(100).email(),
    cartItem:Joi.string().required().min(3).max(100)
 });
 return Schema.validate(msg);
};

module.exports={cartItemModel,cartItemValidation,
                userCartModel,userCartItemValidation};