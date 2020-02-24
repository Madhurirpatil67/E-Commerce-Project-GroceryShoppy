let multer=require("multer");

let storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
     cb(null,"/GroceryShoppy/GroceryShopApis/uploads/");
    },
    filename:function(req,file,cb){
      cb(null,file.originalname);
    }
  });
  
  let fileFilter=function(req,file,cb){
    if(file.mimetype==="image/jpg"||file.mimetype==="image/png"||file.mimetype==="image/jpeg")
    {
      cb(null,true);
    }
    else{
      cb(null,false);
    }
  };
  
  let upload=multer({
    storage:storage,
    limits:{
      fileSize:1024*1024*5
    },
    fileFilter:fileFilter
  });

  module.exports=upload;