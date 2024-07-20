import React from 'react'
import logoF from './logoF.png'
import './App.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logoF} alt="Company Logo"/>
        <div>
        <p>Home</p>
        <p>Blogs</p>
        <p>Discover Forker</p>
        </div>
    </nav>
  )
}

export default Navbar