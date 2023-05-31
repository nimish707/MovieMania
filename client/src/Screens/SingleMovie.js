import React from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import {Movies} from '../data/MoviesData';
import MovieInfo from'../Components/Single/MovieInfo';
// import MovieCasts from'../Components/Single/MovieCasts';

function SingleMovie() {
    const {id}=useParams()
    const movie=Movies.find((movie)=>movie.title===id)

  return (
    <Layout>
        <MovieInfo movie={movie} />
        {/* <div className='conatiner mx-auto min-h-screen px-2 my-6'> */}
            {/* <MovieCasts/> */}
        {/* </div> */}
    </Layout>
  )
}

export default SingleMovie
