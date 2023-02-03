import React from 'react'
import { Link } from 'react-router-dom'
import "../Static/CSS/navigation.css"

function Navigation(props) {
    // const d = props.access
  return (
    <div className='nav'>
        <Link className='text_link' to="/home">Home</Link>
        <Link className='text_link' to="/login">Login</Link>
        <Link className='text_link' to="/signup">Singup</Link>
        <Link className='text_link' to="/about">About</Link>
    </div>
  )
}

export default Navigation