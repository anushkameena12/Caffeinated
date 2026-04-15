import React from 'react'

const About = () => {
  return (
    <div className='bg-[#3B3030] grid-cols-1 md:grid-cols-2 gap-4 h-screen w-full flex flex-col items-center justify-center text-white'>
      {/* first div  */}

    <div className='grid md:grid-cols-2 gap-2 w-full h-full items-center justify-center text-center px-4'>
      <div className='justify-center px-12'>

      <img src="/cafe.jpg" alt="cafe" className='rounded-lg' />
     
      </div>
      <div className='flex flex-col gap-4 justify-center items-center text-center px-4'>
         <h1 className='text-[#E9C46A] font-bold'>Handmade Just For You</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, mollitia accusantium nihil fuga dolorum quia maiores tenetur, alias quis, odio consequatur placeat voluptatibus voluptatum. Voluptas illo quam error nulla dolorum.</p>
      <button className='bg-[#E9C46A] text-[#3B3030] px-4 py-2 rounded-md font-bold'>View our Menu</button>

      </div>

    </div>

    {/* second div  */}
    <div>

    </div>
      

      
    </div>
  )
}

export default About
