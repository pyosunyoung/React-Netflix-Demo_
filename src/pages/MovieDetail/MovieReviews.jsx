import React from 'react'
import { useMovieReview} from '../../hooks/useMovieReviews';
import Alert from 'react-bootstrap/Alert';

const MovieReviews = ({id}) => {
  
  const {data, isLoading, isError, error} = useMovieReview(id)
    if(isLoading) {
      return <h1>Loading...</h1>;
    }
    if(isError) {
      return <Alert variant='danger'>{error.message}</Alert>
    }
    
    const simplifiedResults = data.results.map(({ author, content }) => ({ author, content }));
    console.log(data);
  return (
    <div>
      <div className="movie-reviews">
      {simplifiedResults.map(({ author, content }, index) => (
        <div key={index} className="review-item">
          <div className="review-author">- {author}</div>
          <div className="review-content">{content}</div>
          
        </div>
      ))}
    </div>
    </div>
  )
}

export default MovieReviews
