const http=require('http');
const bodyparser=require('body-parser');
const express=require('express');
const app=express();
const adminroutes=require('./admin.js');
const shoproutes=require('./shop.js');
app.use(bodyparser.urlencoded({extended:false}));
app.use('/admin',adminroutes);
app.use(shoproutes);
app.use((req,res,next)=>{
    res.status(400).send('<h1>Page not found</h1>');
})

app.listen(4000);
