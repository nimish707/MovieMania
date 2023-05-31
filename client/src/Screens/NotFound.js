import React from 'react';
import { Link } from 'react-router-dom';
import {BiHomeAlt} from 'react-icons/bi';

function NotFound() {
  return (
    <div className='flex-colo w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img className='w-full h-96 object-contain' src='/images/404.png' alt='notfound' />
      <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
      <p className='font-medium text-border italic leading-6 mt-4'>
        The page you are looking for does not exist.
        Maybe your be aerching for an invalid URl
      </p>

      <Link to='/' className='w-60 bg-subMain transitions text-white flex-rows gap-4 mt-6 font-medium py-3 rounded-md hover:text-main'>
        <BiHomeAlt /> Back Home
        </Link>
    </div>
  )
}

export default NotFound
