import React from 'react'

const Bar = () => {
  return (
    <div className='bg-secondary dark:bg-[#0d1205] w-full h-52 mx-0 flex items-center  justify-center'>
     <div className='text-white text-5xl mx-9 font-extrabold grid grid-cols-1
     '>
      <span className='text-center'>200K</span>
      <span className='text-sm font-semibold text-center'>Visitors</span>
      </div>
     <div className='text-white text-5xl mx-9 font-extrabold  grid grid-cols-1
     '> <span className='text-center'>5000+</span>
      <span className='text-sm font-semibold text-center'>Subscribers</span></div>
     <div className='text-white text-5xl mx-9 font-extrabold  grid grid-cols-1
     '> <span className='text-center'>3000+</span>
      <span className='text-sm font-semibold text-center'>Students</span></div>
     <div className='text-white text-5xl mx-9 font-extrabold  grid grid-cols-1
     '> <span className='text-center'>100%</span>
      <span className='text-sm text-center font-semibold'>Success stories</span></div>
    
    </div>
  )
}

export default Bar
