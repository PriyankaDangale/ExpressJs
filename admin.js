const express=require('express');
const path=require('path');
const router=express.Router();
router.get('/addproduct',(req,res,next)=>{
    console.log("In the middleware");
    //res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="title"><input type="text" name="size"> <button type="submit">Add Product </form>');
    res.sendFile(path.join(__dirname,'views','addproduct.html'));
    

})
router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','contact.html'));

})
router.post('/contactus',(req,res,next)=>{
res.redirect('/sucess');
   // res.sendFile(path.join(__dirname,'views','contact.html'));

})
router.post('/sucess',(req,res,next)=>{
    res.send(`<h1>information saved suceesfully</h1>`);
    
    })
router.post('/addproduct',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
module.exports=router;