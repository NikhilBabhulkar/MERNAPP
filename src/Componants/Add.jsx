import React from 'react'
import { useState } from 'react'

function Add() {


  let [count,setcount]=useState(0)

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>Increment</button>
    </>
  )
}

export default Add