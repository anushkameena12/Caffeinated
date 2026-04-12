import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-[#E4C59E] flex-1 flex justify-center items-center gap-10' >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-10 items-center' >
        <div className='px-8 '>
        <h1 className='text-6xl text-[#4b2e2e]'>Brewed to Perfection, <br/> Served with Love</h1>
        <p className='text-[#4b2e2e] text-lg pt-5'>Indulge in handcrafted coffee, freshly baked pastries, and a welcoming atmosphere designed to inspire and unwind. </p>
        <div className='flex gap-5 mt-5' >
          <Link to="/order" className='text-white bg-[#4b2e2e] px-5 py-2 rounded-lg hover:bg-[#3a2323] transition'>Order Online</Link>
          <Link to="/location" className='text-[#4b2e2e] border-2 border-[#4b2e2e] px-5 py-2 rounded-lg hover:bg-[#4b2e2e] hover:text-white transition'>Find a Location</Link>
        </div>
        </div>
        <div>
          <img src="/coffee.png" alt="Coffee" className='w-full h-full object-cover' />
        </div>

      </div>
      
    </div>
  )
}

export default Home
