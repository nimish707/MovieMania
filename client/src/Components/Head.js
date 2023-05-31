import React from 'react'

function Head({title}) {
  return (
    <div className='w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md'>
      <img src="/images/about.jpg" alt="Aboutus" className='w-full h-full object-cover' />
      <div className='absolute w-full top-16 lg:top-24 flex-colo'>
        <h1 className='text-2xl lg:text-h1 text-white text-center font-bold'>
          {title && title}
        </h1>
      </div>
    </div>
  )
}

export default Head
