import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

function Signup() {

  const navigation = useNavigate()
  const [data,setdata] = useState({
    name:"",
    email:"",
    password:"",
    c_password:""
  })

  const AddData=(e)=>{
    e.preventDefault()
    setdata({...data,[e.target.name]:e.target.value})
  }

  // Api call 
  const SendData=async()=>{
    const {name,email,password,c_password} = data;

    if(password===c_password){

      fetch("http://localhost:8080/api/user/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,password})
    }).then((res)=>res.json())
    .then((data)=>{
      alert(data.msg)
      navigation("/login")
    })

    }else{
      alert("Your Password is not matching to the current password")
    }

    
  }

  return (
    <div className='signup'>
      <label htmlFor="">Enter Your Name</label>
      <input onChange={AddData} name="name" type="text" />
      <label htmlFor="">Enter Your Email</label>
      <input onChange={AddData} name="email" type="text" />
      <label htmlFor="">Enter Your password</label>
      <input onChange={AddData} name="password" type="text" />
      <label htmlFor="">Enter Your confirm password</label>
      <input onChange={AddData} name="c_password" type="text" />
      <input onClick={SendData} type="submit" />
    </div>
  )
}

export default Signup