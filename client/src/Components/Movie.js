import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

function Movie({ movie }) {
    return (
        <>
            <div className='border border-border p-1 hover:scale-95 transitions realtive rounded overflow-hidden'>
                <Link to={`/movie/${movie?.title}`} className='w-full'>
                    <img src={`/images/movie/${movie?.image}`} alt={movie?.title} className='w-full h-64 object-cover' />
                </Link>
                <div className='flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-2'>
                    <h3 className='font-semibold truncate'>{movie?.title}</h3> 
                    <button className='h-8 w-8 px-1.5 text-sm flex-colo transitions hover:bg-subMain border-2
                     border-subMain rounded-md bg-submain text-white'>
                        <FaHeart />
                      </button> 
                </div>
            </div>
            
        </>
    )
}

export default Movie
