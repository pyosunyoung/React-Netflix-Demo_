import React from 'react'
import { useMovieRecommendation } from '../../hooks/useMovieRecommendations';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../common/MovieSlider/MovieSlider';
import { responsive } from '../../constances/responsive';

const MovieRecommendations = ({id}) => {
  console.log(id);
  const {data, isLoading, isError, error} = useMovieRecommendation(id)
    if(isLoading) {
      return <h1>Loading...</h1>;
    }
    if(isError) {
      return <Alert variant='danger'>{error.message}</Alert>
    }
    
  return (
    <div>
    
      {/* {data?.map((movie, index) => <MovieCard movie={movie} key={index}/>)} */}
      {<h3 className='Recommendations-text'>Recommendations</h3>}
      <MovieSlider  movies={data} responsive={responsive}/>
      
      </div>
  )
}

export default MovieRecommendations
