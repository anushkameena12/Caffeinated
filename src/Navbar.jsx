import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav >
        <h1>CAFFIENATED</h1>
        <div className='flex justify-between items-center h-6 bg-gray-200 text-black relative shadow-sm font-mono' role='navigation'>
        <Link to = "/">Home</Link>
        <Link to = "/shop">Shop</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
        </div>
        
         
    </nav>
  )
}
    
export default Navbar
