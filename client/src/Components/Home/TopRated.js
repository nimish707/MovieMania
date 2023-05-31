import React, { useState } from 'react';
import Titles from './../Titles';
import { BsBookmarkStarFill,BsCaretLeftFill,BsCaretRightFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from 'swiper';
import { Movies } from '../../data/MoviesData';
import { FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Rating from './../Star';


function TopRated() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames="hover:bg-dry transitions text-sm rounded px-2 w-8 h-8 flex-colo bg-subMain text-White";

  return (
    <div className='my-16'>
      <Titles titles='Top Rated' Icon={BsBookmarkStarFill} />
      <div className='mt-10'>
        <Swiper navigation={{ nextEl, prevEl }} slidesPerView={4} spaceBetween={40} autoplay={true} speed={1000} loop={true} modules={[Navigation,Autoplay]}>
          {
            Movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
                  <img src={`/images/movie/${movie?.image}`} alt={movie.title} className='w-full h-full object-cover rounded-lg' />

                  <div className='px-4 hoveres absolute gap-6 text-center bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                    <button className='w-8 h-8 px-2 flex-colo transitions hover:bg-subMain
                     rounded-full bg-white bg-opacity-30 text-white'>
                      <FaHeart />
                     </button>
                     <Link  to={`/movie/${movie.title}`}  className='font-semibold text-xl truncate line-clamp-2'> {movie.title}</Link>
                     <div className='flex gap-2 text-star mx-12'>
                      <Rating value={movie.rate} />
                     </div>
                  </div>
                </div>
              </SwiperSlide>))
          }

        </Swiper>
        <div className='w-full px-1 flex-rows gap-6 pt-12'>
          <button className={classNames} ref={(node)=>setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node)=>setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRated
