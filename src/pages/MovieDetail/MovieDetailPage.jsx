import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../../hooks/useMovieDetail';
import MovieReviews from './MovieReviews';
import MovieRecommendations from './MovieRecommendations';
import DetailBanner from '../Homepage/components/Banner/DetailBanner';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col } from 'react-bootstrap';
import './MovieDetailPage.style.css';
import Badge from 'react-bootstrap/Badge';
import Footer1 from '../Homepage/components/Footer/Footer1';
const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetails(id);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  console.log(data);
  return (
    <div>
      <DetailBanner data={data} />
      <Container>
        <Row>
          <Col className="product-img">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
              alt=""
              className="product-img-size"
            />
          </Col>
          <Col className="product-detail">
            <div>
              <p>
                {data?.genres.map(({ name }) => (
                  <div className="movie-badge">
                    <Badge bg="primary" className="movie-badge1">
                      {name}
                    </Badge>
                  </div>
                ))}
              </p>
            </div>
            <h1 style={{ fontSize: `65px`, color: 'blue' }}>{data?.title}</h1>
            <h3 style={{ fontSize: `30px` }}>{data?.tagline}</h3>
            <div className="info-item">
              <span className="margin">⭐{data?.vote_average} 점</span>
              <span className="margin">
                <img
                  src="https://www.shutterstock.com/image-vector/people-icon-black-yellow-600w-598410440.jpg"
                  alt="Popularity"
                />
                {data?.popularity}
              </span>
              <span className="margin">
                {data?.adult ? (
                  'over 18'
                ) : (
                  <img
                    style={{ width: `20px` }}
                    src="https://noona-netflix-react-query.vercel.app/under18.svg"
                    alt=""
                  />
                )}
              </span>
            </div>
            <hr />
            <div>
              <p>{data?.overview}</p>
            </div>
            <hr />
            <div>
              <div className="badge-container">
                <Badge bg="primary" className="movie-badge2">
                  Budget
                </Badge>
                $ {data?.budget}
              </div>
              <div className="badge-container">
                <Badge bg="primary" className="movie-badge2">
                  Revenue
                </Badge>
                $ {data?.revenue}
              </div>
              <div className="badge-container">
                <Badge bg="primary" className="movie-badge2">
                  Release Date
                </Badge>
                {data?.release_date}
              </div>
              <div className="badge-container">
                <Badge bg="primary" className="movie-badge2">
                  Run time
                </Badge>
                {data?.runtime}분
              </div>
            </div>

            <p className="OverviewContainer"></p>
          </Col>
          <hr />
          <h3>Reviews</h3>
          <MovieReviews id={id} />
          <hr />
          
        </Row>
        
      </Container>
      
      <MovieRecommendations id={id} />
      <Footer1/>
    </div>
  );
};

export default MovieDetail;
