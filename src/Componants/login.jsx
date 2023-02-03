import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

function Login() {
const navigation = useNavigate()
  const [data,setdata]= useState({
    email:"",
    password:""
  })

  const OnchangeHandler=(event)=>{
    event.preventDefault()
    setdata({...data,[event.target.name]:event.target.value})
  }

  // Api call
  const SendData=async(req,res)=>{
    const {email,password} = data;
    await fetch("http://localhost:8080/api/user/login",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
    }).then((res)=>res.json())
    .then((data)=>{
      alert(data.msg)
      if(data.status==="success"){
        localStorage.setItem("token",data.token)
        navigation("/home")
      }
      
      console.log(data);
    })
  }

  return (
    <div className='login'>
      <label  htmlFor="">Enter Your Email</label>
      <input onChange={OnchangeHandler} name="email" type="text" />
      <label htmlFor="">Enter Your Password</label>
      <input onChange={OnchangeHandler} name="password" type="text" />
      <input type="submit" onClick={SendData}/>
    </div>
  )
}

export default Login