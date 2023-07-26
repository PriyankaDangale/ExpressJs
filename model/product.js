const fs=require('fs');
const path=require('path');
const p=path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);
const getProductsfromFile=cb=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err)
        {
            cb([]);
        }
        else{
            cb(JSON.parse(fileContent));
        }
    });
};
module.exports=class Product{
    constructor(t)
    {
        this.title=t;
    }
    save()
    {
        getProductsfromFile(products=>{
            products.push(this);
            fs.writeFile(p,json.stringify(products),err=>{
                console.log(err);
            });
        });
    
    }
    static fetchAll()
    {
        getProductsfromFile(cb);
    }
};