const express=require("express");
const app=express();
const register = require("./router/register");

app.get("/",(req,res)=>{
    res.send("Welcome");
})

app.post("/register",(req,res)=>{
    register.CreateUser(req.body);
})

app.listen(5000,()=>{
    console.log("Server Is Running")
})