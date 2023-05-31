import React, { useState } from 'react';
import Titles from './../Components/Titles';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { RiMovieFill } from 'react-icons/ri';
import { FaPlay} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { Movies } from '../data/MoviesData';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';



function MoviesPage() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames="hover:bg-dry transitions text-sm rounded px-2 w-8 h-8 flex-colo bg-subMain text-White";

  return (
    <Layout>
      {/* English */}
       <div className='my-16'>
      <Titles titles='English' Icon={RiMovieFill} />
      <div className='mt-10'>
        <Swiper navigation={{ nextEl, prevEl }} slidesPerView={4} spaceBetween={40} autoplay={true} speed={1000} loop={true} modules={[Navigation,Autoplay]}>
          {
            Movies.slice(20,40).map((movie, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 pb-8 h-rate border border-border bg-dry rounded-lg overflow-hidden'>
                  <img src={`/images/movie/${movie?.image}`} alt={movie.title} className='w-full h-full object-cover rounded-lg' />

                  <div className='px-1 pt-1 gap-6 text-center bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                    <button className='w-8 h-6 px-2 py-1 flex-colo transitions hover:bg-subMain
                     rounded-full bg-white bg-opacity-30 text-white'>
                      
                     <Link  to={`/movie/${movie.title}`}  className='font-normaltext-xl truncate line-clamp-2'><FaPlay /></Link>
                     </button>
                     {movie.title}
                     <div className='flex gap-2 text-star mx-12'>
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

          {/* Hindi */}
       <div className='my-16'>
      <Titles titles='Hindi' Icon={RiMovieFill} />
      <div className='mt-10'>
        <Swiper navigation={{ nextEl, prevEl }} slidesPerView={4} spaceBetween={40} autoplay={true} speed={1000} loop={true} modules={[Navigation,Autoplay]}>
          {
            Movies.slice(0,9).map((movie, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 pb-8 h-rate border border-border bg-dry rounded-lg overflow-hidden'>
                  <img src={`/images/movie/${movie?.image}`} alt={movie.title} className='w-full h-full object-cover rounded-lg' />

                  <div className='px-1 pt-1 gap-6 text-center bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                    <button className='w-8 h-6 px-2 py-1 flex-colo transitions hover:bg-subMain
                     rounded-full bg-white bg-opacity-30 text-white'>
                      
                     <Link  to={`/movie/${movie.title}`}  className='font-normaltext-xl truncate line-clamp-2'><FaPlay /></Link>
                     </button>
                     {movie.title}
                     <div className='flex gap-2 text-star mx-12'>
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

    {/* Punjabi */}
     
       <div className='my-16'>
      <Titles titles='Punjabi' Icon={RiMovieFill} />
      <div className='mt-10'>
        <Swiper navigation={{ nextEl, prevEl }} slidesPerView={4} spaceBetween={40} autoplay={true} speed={1000} loop={true} modules={[Navigation,Autoplay]}>
          {
            Movies.slice(10,19).map((movie, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 pb-8 h-rate border border-border bg-dry rounded-lg overflow-hidden'>
                  <img src={`/images/movie/${movie?.image}`} alt={movie.title} className='w-full h-full object-cover rounded-lg' />

                  <div className='px-1 pt-1 gap-6 text-center bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                    <button className='w-8 h-6 px-2 py-1 flex-colo transitions hover:bg-subMain
                     rounded-full bg-white bg-opacity-30 text-white'>
                      
                     <Link  to={`/movie/${movie.title}`}  className='font-normaltext-xl truncate line-clamp-2'><FaPlay /></Link>
                     </button>
                     {movie.title}
                     <div className='flex gap-2 text-star mx-12'>
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
     
    </Layout>
  );
  
  
}

export default MoviesPage
