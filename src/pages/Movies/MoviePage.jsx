import React from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import MovieCard from '../../common/MovieCard/MovieCard';

//경로 2가지
// nav바에서 클릭해서 온경우 => popularMovie를 보여주자
// keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q'); // navigate(`/movies?q=${keyword}`) / applayout페이지에서 이렇게 설정해놔서 url쿼리가 값이 q인것을 가져온것
  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });
  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: '5rem', height: '5rem' }}
        />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    // 첫번째 row는 sort, 카드 보여주는 부분, 두번째 row는 카드의 정렬을 위해
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          {' '}
          필터{' '}
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
