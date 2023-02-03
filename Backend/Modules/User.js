const mongoose = require("mongoose")


const User = mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isadmin:{
        type:Boolean,
    }
})

const Users = mongoose.model("user",User)

module.exports = Users