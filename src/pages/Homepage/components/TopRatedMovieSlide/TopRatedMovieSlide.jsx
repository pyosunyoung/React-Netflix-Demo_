import React from 'react'
import Alert from 'react-bootstrap/Alert';
import 'react-multi-carousel/lib/styles.css';
import "./TopRatedMovieSlide.style.css"
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import { responsive } from '../../../../constances/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
const TopRatedMovieSlide = () => {

    const {data, isLoading, isError, error} = useTopRatedMoviesQuery()
    if(isLoading) {
      return <h1>Loading...</h1>;
    }
    if(isError) {
      return <Alert variant='danger'>{error.message}</Alert>
    }
  return (
    <div>
      <MovieSlider title='TopRated Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}
export default TopRatedMovieSlide
