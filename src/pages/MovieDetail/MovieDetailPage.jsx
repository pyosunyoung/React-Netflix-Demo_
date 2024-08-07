import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../../hooks/useMovieDetail';
import MovieReviews from './MovieReviews';

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
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
      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.belongs_to_collection?.poster_path}`} alt=''/>
      <h1>{data?.title}</h1>
      <p>장르 : {data?.genres.map(({name}) => name)}</p>
      <p>인기도 : {data?.popularity}</p>
      <p>예산 : {data?.budget}</p>
      <p>수익 : {data?.revenue}</p>
      <p>줄거리 : {data?.overview}</p>
      <p className="OverviewContainer"></p>
      <p> 연령제한 : {data?.adult ? 'over 18' : 'under 18'}</p>
      <p> 개봉일자 : {data?.release_date}</p>
      <p> 상영시간 : {data?.runtime}분</p>
      <p> 평점 : {data?.vote_average} 점</p>
      <hr/>
      리뷰
      <MovieReviews id={id} />
    </div>
  );
};

export default MovieDetail;
