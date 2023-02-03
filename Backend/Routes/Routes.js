const express = require('express');
const Route = express.Router()
const {GetData, AddUser, LoginUser,} = require("../Controllers/controllers")
const AutrorisedUser = require("../Middlewares/Middleware")

Route.use("/about",AutrorisedUser)
Route.route("/user").get(GetData)
Route.route("/user/signup").post(AddUser)
Route.route("/user/login").post(LoginUser)
Route.route("about",GetData)

module.exports  = Route