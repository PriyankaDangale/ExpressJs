const http=require('http');
const bodyparser=require('body-parser');
const express=require('express');
const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use('/addproduct',(req,res,next)=>{
    console.log("In the middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"> <button type="submit">Add Product </form>');
    
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    console.log("In the other middleware");
    res.send('<h1>Helllo This is priyanka Dangale</h1>');
    
})
app.listen(4000);
