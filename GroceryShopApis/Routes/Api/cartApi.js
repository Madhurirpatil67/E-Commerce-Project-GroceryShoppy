let express=require("express");
let router=express.Router();
let port="http://localhost:5000";
let upload=require("./uploadimg");
let cart=require("../../DBModels/cartItems");

router.post("/add-to-cart",upload.single("image"),async(req,res)=>{
    let {error}=cart.cartItemValidation(req.body);
    if(error){res.send(error.details[0].message)}
  
    let carts=cart.cartItemModel({
      prodId:req.body.prodId,
      name:req.body.name,
      image:port+"/uploads/"+req.file.filename,
      price:req.body.price,
      quantity:req.body.quantity,
      totalPrice:req.body.totalPrice,
      recordDate:req.body.recordDate,
      updateRecord:req.body.updateRecord
    });
    let data=await carts.save();
    res.send({message:"Cart Added Successfully...",item:data});
  });

  router.post("/cartByUser",async(req,res)=>{
   let {error}=cart.userCartItemValidation(req.body);
   if(error){res,status(403).send(error.details[0].message)}
   
   let cartdata=await cart.cartItemModel.findById(req.body.cartItem);
   if(!cartdata){res.status(403).send("Invalid Cart Id");}

   let userCart=await cart.userCartModel({
    userEmail:req.body.userEmail,
    cartItem:
            {
                prodId:cartdata.prodId,
                name:cartdata.name,
                image:cartdata.image,
                price:cartdata.price,
                quantity:cartdata.quantity,
                totalPrice:cartdata.totalPrice,
                recordDate:cartdata.recordDate,
                updateRecord:cartdata.updateRecord
            }
   });
   let data=await userCart.save();
   res.send({message:"UserCart Added Successfully",item:data});
  });

  router.get("/allUserCarts",async(req,res)=>{
    let data=await cart.userCartModel.find();
    if(!data)
    {
        res.send("Data Not Found");
    }
    res.send({item:data});
  });

  router.put("/update-to-cart",upload.single("image"),async(req,res)=>{
    let {error}=cart.cartItemValidation(req.body);
    if(error){res.send(error.details[0].message)}
  
    let carts=cart.cartItemModel({
      prodId:req.body.prodId,
      name:req.body.name,
      image:port+"/uploads/"+req.file.filename,
      price:req.body.price,
      quantity:req.body.quantity,
      totalPrice:req.body.totalPrice,
      recordDate:req.body.recordDate,
      updateRecord:req.body.updateRecord
    });
    let data=await carts.save();
    res.send({message:"Cart updated Successfully...",item:data});
  });

  router.delete("/remove-from-cart/:emailId",async(req,res)=>{
      let data=await cart.userCartModel.find({userEmail:req.params.emailId}).remove();
      if(!data)
      {
          res.status(403).send({message:"Invalid EmailId"});
      }
      res.send({message:"Cart Deleted Successfully"});
  });

  module.exports=router;