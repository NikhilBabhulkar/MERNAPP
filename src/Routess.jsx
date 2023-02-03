import {Routes,Route} from "react-router-dom"
import Add from "./Componants/Add"
import Login from "./Componants/login"
import React from 'react'
import Home from "./Componants/Home"
import Signup from "./Componants/signup"
import Profile from "./Componants/profile"

function Routess() {
  return (
    <Routes>
        <Route path="/add" element={<Add/>}></Route>
        <Route exact path="home" element={<Home />}></Route>
        <Route exact path="login" element={<Login />}></Route>
        <Route exact path="signup" element={<Signup />}></Route>
        <Route exact path="about" element={<Profile />}></Route>
    </Routes>
  )
}

export default Routess;

