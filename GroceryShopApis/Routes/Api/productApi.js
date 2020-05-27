let express=require("express");
let router=express.Router();
let port="http://localhost:5000";
let upload=require("./uploadimg");
let product=require("../../DBModels/product");

router.post("/addSubCategory",async(req,res)=>{
   let {error} =product.subCategoryValidation(req.body);
   if(error){return res.send(error.details[0].message)} 
   let subcat= product.subCategoryModel({
       name:req.body.name
   });
   let data=await subcat.save();
   res.send({message:"SubCategory Added",item:data});
});

router.post("/addCategory",async(req,res)=>{
    let {error}=product.categoryValidation(req.body);
    if(error){return res.send(error.details[0].message)}
    
    let subcats=await product.subCategoryModel.findById(req.body.subCat);
    let category=product.categoryModel({
        catName:req.body.catName,
        subCat:{
                 _id:subcats._id,
                 name:subcats.name
               }
    });
    let data=await category.save();
    res.send({message:"Category Added Successfully",item:data});
});

router.get("/allCategory",async(req,res)=>{
    let data=await product.categoryModel.find();
    res.send({item:data});
});

router.get("/findCategory/:id",async(req,res)=>{
    let data=await product.categoryModel.findById(req.params.id);
    if(!data){return res.status(404).send({message:"Invalid category Id"})}
    res.send({item:data});
});

router.delete("/deleteCategory/:id",async(req,res)=>{
    let data=await product.categoryModel.findByIdAndRemove(req.params.id);
    if(!data){
      res.status(404).send({message:"Invalid category Id"});
    }
    res.send({message:"Thank You....Come Back Again!!"})
});

router.post("/add",upload.single("image"),async(req,res)=>{
  let {error}=product.productValidation(req.body);
  if(error){res.send(error.details[0].message)}

  let products=product.productModel({
    name:req.body.name,
    image:port+"/uploads/"+req.file.filename,
    description:req.body.description,
    price:req.body.price,
    offerPrice:req.body.offerPrice,
    isAvailable:req.body.isAvailable,
    isTodayOffer:req.body.isTodayOffer,
    category:req.body.category,
    subCategory:req.body.subCategory,
    isAdmin:req.body.isAdmin,
    recordDate:req.body.recordDate,
    updateRecord:req.body.updateRecord
  });
  let data=await products.save();
  res.send({message:"Product Data Added Successfully...",item:data});
});

router.put("/updateProduct/:id",upload.single("image"),async(req,res)=>{
  let products=await product.productModel.findById(req.params.id);
  if(!products){
    res.status(403).send({message:"Invalid Product Id"});
  }
  let {error}=product.productValidation(req.body);
  if(error){res.send(error.details[0].message)}
  console.log(products);
  products.name=req.body.name,
  products.image=port+"/uploads/"+req.file.filename,
  products.description=req.body.description,
  products.price=req.body.price,
  products.offerPrice=req.body.offerPrice,
  products.isAvailable=req.body.isAvailable,
  products.isTodayOffer=req.body.isTodayOffer,
  products.category=req.body.category,
  products.subCategory=req.body.subCategory,
  products.isAdmin=req.body.isAdmin,
  products.recordDate=req.body.recordDate,
  products.updateRecord=req.body.updateRecord
  
  let data=await products.save();
  res.send({message:"Product Data Updated Successfully...",item:data});
});

router.get("/allProducts",async(req,res)=>{
  let data=await product.productModel.find();
  res.send({item:data});
});

router.delete("/removeProduct/:id",async(req,res)=>{
  let data=await product.productModel.findByIdAndRemove(req.params.id);
  if(!data){
    res.status(404).send({message:"Invalid Product Id"});
  }
  res.send({message:"Product Deleted..!!"});
});

router.get("/getProduct/:id",async(req,res)=>{
 let products=await product.productModel.findById(req.params.id);
  if(!products)
  {
    res.status(403).send({message:"Invalid Product Id"});
  }
   res.send({data:products});
});

router.get("/offerProduct",async(req,res)=>{
  let offerprod=await product.productModel.find({isTodayOffer:true}).limit(8);
  if(offerprod)
  {
    res.send({message:"Success",data:offerprod});
  }
  else{
    res.send({message:"Data Not Found"});
  }
});

router.get("/latestProduct",async(req,res)=>{
  let latestprod=await product.productModel.find().limit(8);
  if(!latestprod)
  {
    res.status(403).send({message:"Data Not Found"});
  }
  res.send({message:"Success",data:latestprod});
});

router.get("/category/:category/page/:pageIdx",async(req,res)=>{
 let pagesize=10;
 let page=parseInt(req.params.pageIdx);
 if(page < 0 || page===0)
 {
   res.status(403).send({message:"Invalid Page No,Should start with 1"});
 }
 let categoryWiseProduct=await product.productModel.find({category:req.params.category});
 if(!categoryWiseProduct){
   res.status(403).send({message:"Invalid Category.."});
 }
 let collectionSize=categoryWiseProduct.length;
 let products=await product.productModel
              .find({category:req.params.category})
              .skip(pagesize*(page-1))
              .limit(pagesize);
  if(!products)
  {
    res.status(403).send("Data Not Found");
  }            
  res.send(
    {
      message:"Success",
      Data:products,
      page:page,
      pagesize:pagesize,
      collectionSize:collectionSize
    }
  )
});

router.get("/category/:category/subcategory/:subcategory/page/:pageIdx",async(req,res)=>{
  let pagesize=10;
  let page=parseInt(req.params.pageIdx);
    if(page < 0 || page===0)
    {
      res.status(403).send({message:"Invalid Page No,Should start with 1"});
    }
    let subcategoryWiseProduct=await product.productModel
                            .find({category:req.params.category,subCategory:req.params.subcategory});
    if(!subcategoryWiseProduct){
      res.status(403).send({message:"Invalid Category.."});
    }
    let collectionSize=subcategoryWiseProduct.length;
    let products=await product.productModel
                .find({category:req.params.category,subCategory:req.params.subcategory})
                .skip(pagesize*(page-1))
                .limit(pagesize);
    if(!products)
    {
      res.status(403).send("Data Not Found");
    }            
    res.send(
      {
        message:"Success",
        Data:products,
        page:page,
        pagesize:pagesize,
        collectionSize:collectionSize
      }
    )
 });
 
router.get("/page/:pageIdx",async(req,res)=>{
  let pagesize=10;
  let page=parseInt(req.params.pageIdx);
  if(page < 0 || page===0)
  {
    res.status(403).send({message:"Invalid Page No,Should start with 1"});
  }
  let prodByPage=await product.productModel
                .find()
                .skip(pagesize*(page-1))
                .limit(pagesize);
    let pageCollection=prodByPage.length;
    if(!prodByPage)
    {
      res.status(403).send({message:"Data Not Found"});
    }
    res.send({
      message:"success",
      data:prodByPage,
      page:page,
      pagesize:pagesize,
      pageCollection:pageCollection
      });
});

module.exports=router;