const mongoose=require("mongoose");
const Joi=require("@hapi/joi");

let subCategorySchema=new mongoose.Schema({
    name:{type:String,required:true,min:3,max:100}
});
let subCategoryModel=mongoose.model("subCategory",subCategorySchema);

function subCategoryValidation(error)
{
    let schema=Joi.object({
        name:Joi.string().required().min(3).max(100)
    });
    return schema.validate(error);
};

let categorySchema=new mongoose.Schema({
    catName:{type:String,required:true,min:3,max:100},
    subCat:[subCategorySchema]
});
let categoryModel=mongoose.model("category",categorySchema);

function categoryValidation(error)
{
   let Schema=Joi.object({
        catName:Joi.string().required().min(3).max(100),
        subCat:Joi.string().required().min(3).max(100)
   });
   return Schema.validate(error);
};

let productSchema=new mongoose.Schema({
  name:{type:String,required:true,min:3,max:100},
  image:{type:String},
  description:{type:String,required:true,min:3,max:100},
  price:{type:Number,required:true,min:1},
  offerPrice:{type:Number,required:true,min:1},
  isAvailable:{type:Boolean,required:true},
  isTodayOffer:{type:Boolean,required:true},
  category:{type:String,required:true,min:3,max:100},
  subCategory:{type:String,required:true,min:3,max:100},
  isAdmin:{type:Boolean},
  recordDate:{type:Date,default:Date.now},
  updateRecord:{type:Date,default:Date.now}
});
let productModel=mongoose.model("productRecord",productSchema);

function productValidation(msg)
{
   let Schema=Joi.object({
        name:Joi.string().required().min(3).max(100),
        image:Joi.string(),
        description:Joi.string().required().min(3).max(100),
        price:Joi.number().required().min(1),
        offerPrice:Joi.number().required().min(1),
        isAvailable:Joi.boolean().required(),
        isTodayOffer:Joi.boolean().required(),
        category:Joi.string().required().min(3).max(100),
        subCategory:Joi.string().required().min(3).max(100),
        isAdmin:Joi.boolean(),
        recordDate:Joi.date().default(Date.now),
        updateRecord:Joi.date().default(Date.now)
   });
   return Schema.validate(msg);
}

module.exports={subCategoryModel,subCategoryValidation,
                categoryModel,categoryValidation,
                productModel,productValidation};