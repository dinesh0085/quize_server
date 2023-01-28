const express=require("express");
const quizeModel=require("../Model/quizedata.model");

const app=express.Router()

app.get("/",async(req,res)=>{
    let {cat,difficulty,count} =req.query;
    if(!count){
        count=10
    }
    const quize_data=await quizeModel.find({category:cat,difficulty:difficulty}).limit(count).skip()
    res.send(quize_data)
})


module.exports=app