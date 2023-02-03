const express = require('express');
const mongoose = require("mongoose")

const URL = process.env.URL

const connect =async()=>{
    try{
        const con = await mongoose.connect("mongodb+srv://nikhil:nikhil@cluster0.x7p2hfa.mongodb.net/DB?retryWrites=true&w=majority"
        ,()=>{
        console.log("You Are successfully connected with the mongodb database name DB");
    })
}catch(err){
        console.log(err);
    }
    
}

module.exports = connect