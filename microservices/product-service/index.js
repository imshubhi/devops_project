const express=require('express');
const app=express();
app.get('/product',(req,res)=>res.json({id:1,name:"Laptop"}));
app.listen(5000,()=>console.log("Product service on 5000"));
