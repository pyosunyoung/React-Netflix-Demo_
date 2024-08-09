import React, { useState } from 'react';
import { useMovieReview } from '../../hooks/useMovieReviews';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

const MovieReviews = ({ id }) => {
  const { data, isLoading, isError, error } = useMovieReview(id);
  const [expandedReview, setExpandedReview] = useState({});

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const simplifiedResults = data.results.map(({ author, content, author_details }) => ({
    author,
    content,
    author_details,
  }));

  const toggleExpand = (index) => {
    setExpandedReview((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <div className="movie-reviews">
        {simplifiedResults.map(({ author, content, author_details }, index) => (
          <div key={index} className="review-item">
            <div className={`review-content ${expandedReview[index] ? 'expanded' : ''}`}>
              <div>
              ⭐{author_details.rating}점
              </div>
              
              <Badge bg="info" className="review-author">
                {author}
              </Badge> 
              : {content}
            </div>
            {content.length > 150 && (
              <button className="read-more" onClick={() => toggleExpand(index)}>
                {expandedReview[index] ? '접기' : '더보기'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieReviews;
