import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-transparent' >
      <div className='flex justify-between items-center px-8 py-4'>
        
        <Link to= "/" className='text-xl font-semibold tracking-wide px-8'>☕︎ CAFFIENATED</Link>
        <div className='flex gap-8 items-center px-12 text-[#4b2e2e] '>
        <Link to = "/shop">Shop</Link>
        <Link to = "/about">About</Link>
        <Link to = "/shop">Blog</Link>
        <Link to = "/location">Location</Link>
        <Link to = "/contact">Contact</Link>        
        <Link to="/order" className='text-white bg-[#4b2e2e] px-5 py-2 rounded-lg hover:bg-[#3a2323] transition'>Order Online</Link>
        </div>

      </div>
        
         
    </nav>
  )
}
    
export default Navbar
