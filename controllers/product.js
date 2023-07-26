exports.addproducts=(req,res,next)=>{
    console.log("In the middleware");
    //res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="title"><input type="text" name="size"> <button type="submit">Add Product </form>');
    res.sendFile(path.join(__dirname,'..','views','addproduct.html'));
};
exports.postproducts=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
};
exports.shop=(req,res,next)=>{
    console.log("In the other middleware");
    res.sendFile(path.join(__dirname,'views','shop.html'));
    
};
    
exports.contact=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','contact.html'));

};
exports.postcontact=(req,res,next)=>{
    res.redirect('/sucess');
    
    
    };
    exports.getsucess=(req,res,next)=>{
        res.send(`<h1>information saved suceesfully</h1>`);
        
        };