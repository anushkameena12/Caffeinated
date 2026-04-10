import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-[#E4C59E] w-full px-10 py-5 flex justify-between items-center' >
        
        <Link to= "/" className='text-xl font-semibold tracking-wide'>☕︎ CAFFIENATED</Link>
        <div className='flex gap-8 items-center text-[#4b2e2e]'>
        <Link to = "/shop">Shop</Link>
        <Link to = "/about">About</Link>
        <Link to = "/shop">Blog</Link>
        <Link to = "/location">Location</Link>
        <Link to = "/contact">Contact</Link>        
        </div>

        <button className='text-white bg-[#4b2e2e] px-5 py-2 rounded-lg hover:bg-[#3a2323] transition'>Order Online</button>
        
         
    </nav>
  )
}
    
export default Navbar
