const express=require("express");
const fs=require("fs");
const route=express.Router();
//const data=require('./data');
route.get('/login',(req,res,next)=>{
   
        res.send(`<form action="/" onsubmit="localStorage.setItem('username', document.getElementById('username').value)" method="POST">
        <input type="text" name="name" id="username">
        <button type="submit">login</form>`);
})
   
    
route.get('/',(req,res,next)=>{
    fs.readFile("username.txt",(err,data)=>{
        if(err)
        {
        console.log(err);
        data='no data exists';
        }
        res.send(`${data} <form action="/" method="POST">
        <input type="text" name="message" id="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">send</form>`);

    })
    
})
route.post('/',(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>err?console.log(err):res.redirect('/'));
});
module.exports=route;