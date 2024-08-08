import React from 'react'
import { useMovieRecommendation } from '../../hooks/useMovieRecommendations';
import Alert from 'react-bootstrap/Alert';
import MovieCard from '../../common/MovieCard/MovieCard';
import Container from 'react-bootstrap/esm/Container';
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
    <Container>
    
      {/* {data?.map((movie, index) => <MovieCard movie={movie} key={index}/>)} */}
      <MovieSlider title='Recommendations' movies={data} responsive={responsive}/>
      
    </Container>
  )
}

export default MovieRecommendations
