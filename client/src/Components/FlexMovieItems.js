import React from 'react';
// import {FaRegCalenderAlt} from 'react-icons/fa';

function FlexMovieItems({movie}) {
  return (
    <>
    <div className='flex items:center gap-2'>
        <span className='text-sm font-medium'>{movie.genre}</span>
    </div>
    <div className='flex items:center gap-2'>
        {/* <FaRegCalenderAlt className='text-subMain w-3 h-3' /> */}
        <span className='text-sm font-medium'>{movie.year}</span>
    </div>
    <div className='flex items:center gap-2'>
        {/* <FaRegCalenderAlt className='text-subMain w-3 h-3' /> */}
        <span className='text-sm font-medium'>{movie.duration}</span>
    </div>
    </>
  )
}

export default FlexMovieItems;
