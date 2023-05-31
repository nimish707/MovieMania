import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../../data/BannerMovies'
import FlexMovieItems from '../FlexMovieItems';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

function Banner() {
    return (
        <div className='relative w-full'>
            <Swiper
                direction='horizontal'
                slidesPerView={1}
                loop={true}
                speed={1000}
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className='w-full xl:h-96 bg-dry lg:h-64 h-48'>
                {
                    Movies.slice(0, 8).map((movie, index) => (
                        <SwiperSlide key={index} className='relative rounded overflow-hidden'>
                            <img src={`/images/movie/${movie.image}`} alt={movie.title} className='w-full h-full object-cover' />
                            <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 left-0 right-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                                <h1 className='xl:tetx-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                                    {movie.title}
                                </h1>
                                <div className='flex gap-5 items:center text-dryGray'>
                                    <FlexMovieItems movie={movie} />
                                </div>
                                <div className='flex gap-5 items:center'>
                                    <Link to={`/movie/${movie.title}`} className='bg-subMain hover:text-main transitions text-white px-2 py-1 rounded font-medium sm:text-sm text:xs'>
                                        Watch
                                    </Link>
                                    <button className='bg-dry hover:text-subMain
                                 transitions text-white px-3 py-2 rounded text-sm bgopacity-30'>
                                        <FaHeart />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Banner
