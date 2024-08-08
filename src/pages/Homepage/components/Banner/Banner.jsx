import React, { useState } from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';
import MyVerticallyCenteredModal from '../Modal/MyVerticallyCenteredModal';
import Button from 'react-bootstrap/esm/Button';

const Banner = () => {
  const [modalShow, setModalShow] = useState(false);
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  console.log(data);
  // 데이터가 로드되었을 때 처리
  const POPULAR_MOVIE_KEY = data.results[0].id

    return (
      <div style={{
        backgroundImage:"url(" + `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` + ")"
      }}
      className='banner'
      >
      <div className='text-white banner-text-area'>
        <h1>{data?.results[0].title}</h1> 
        <p>{data?.results[0].overview}</p>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        ▶재생
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={POPULAR_MOVIE_KEY}
      />
      </div>
      
    </div>
  );
};

export default Banner;
