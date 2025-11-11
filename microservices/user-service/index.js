const express=require('express');
const app=express();
app.get('/user',(req,res)=>res.json({name:"Boss",role:"Admin"}));
app.listen(4000,()=>console.log("User service on 4000"));
