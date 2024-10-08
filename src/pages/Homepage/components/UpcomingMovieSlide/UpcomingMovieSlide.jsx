import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import Alert from 'react-bootstrap/Alert';
import "./UpcomingMovieSlide.style.css"
import { responsive } from '../../../../constances/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
const UpcomingMovieSlide = () => {

    const {data, isLoading, isError, error} = useUpcomingMoviesQuery();
    if(isLoading) {
      return <h1>Loading...</h1>;
    }
    if(isError) {
      return <Alert variant='danger'>{error.message}</Alert>
    }
  return (
    <div>
      <MovieSlider title='Upcoming Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default UpcomingMovieSlide
