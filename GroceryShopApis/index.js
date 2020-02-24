let express=require("express");
let app=express();
let mongoose=require("mongoose");
let PORT=5000||process.env.PORT;
let contact=require("./Routes/Api/contactApi");
let user=require("./Routes/Api/userAuthApi");
let product=require("./Routes/Api/productApi");
let cart=require("./Routes/Api/cartApi");
app.use(express.json());
app.use("/uploads",express.static("uploads"));


mongoose
        .connect("mongodb://localhost/GROCERYSHOP",{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>console.log("Connected to DB"))
        .catch(error=>console.log(`something went to wrong ${error.message}`));

app.listen(PORT,()=>console.log(`Connected To Port ${PORT}`));  

app.use("/api",contact);
app.use("/api",user);
app.use("/api",product);
app.use("/api",cart);