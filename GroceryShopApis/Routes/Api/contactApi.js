let express=require('express');
let router=express.Router();
let nodemailer=require("nodemailer");
let contact=require("../../DBModels/contact");

router.post("/sendMail",async(req,res)=>{
    let {error}=contact.contactValidation(req.body);
    if(error){return res.send(error.details[0].message)}

    let contacts=contact.contactModel({
        name:req.body.name,
        subject:req.body.subject,
        email:req.body.email,
        message:req.body.message
    });
    console.log("bfkg:",contacts);
    let data=await contacts.save();
    res.send({message:"Contacts Saved Successfully",item:data});
});

module.exports=router;