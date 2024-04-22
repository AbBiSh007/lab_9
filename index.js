const express=require("express");

let app=express();
app.get ("/",(req,res)=>{
    res.send("hello world!");

});
app.get ("/about",(req,res)=>{
    res.send("about api");

});
let PORT=6000;
app.listen(PORT,()=>{
    console.log(app is running on ${PORT});
})
