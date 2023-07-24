const http=require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("In the middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("In the other middleware");
    res.send('<h1>Helllo This is priyanka Dangale</h1>');
    
})
app.listen(4000);
