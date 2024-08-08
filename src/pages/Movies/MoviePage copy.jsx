import React, { useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';
//경로 2가지
// nav바에서 클릭해서 온경우 => popularMovie를 보여주자
// keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q'); // navigate(`/movies?q=${keyword}`) / applayout페이지에서 이렇게 설정해놔서 url쿼리가 값이 q인것을 가져온것
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  const handlePageClick = ({ selected }) => {
    // console.log("page", page); //  페이지네이션 페이지 클릭했을 때 2페이지 클릭시 {selected: 1}이렇게 출력
    setPage(selected + 1); // 그래서 selected에 + 1 더해준것
  };
  console.log(data);

  const [sortedData, setSortedData] = useState(null); // 정렬된 데이터 상태 변수
  const [sortType, setSortType] = useState(''); // 정렬 유형 상태 변수

  const handleSortPopularRank = () => {
    const sortedMovies = [...data.results].sort(
      (a, b) => b.popularity - a.popularity
    );
    setSortedData(sortedMovies);
    setSortType('popular'); // 정렬 유형 업데이트
  };

  // 인기 적은 순으로 정렬하는 함수
  const handleSortUnpopularRank = () => {
    const sortedMovies = [...data.results].sort(
      (a, b) => a.popularity - b.popularity
    );
    setSortedData(sortedMovies);
    setSortType('unpopular'); // 정렬 유형 업데이트
  };

  // 최신순으로 정렬하는 함수
  const handleSortRecentRank = () => {
    const sortedMovies = [...data.results].sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );
    setSortedData(sortedMovies);
    setSortType('recent'); // 정렬 유형 업데이트
  };

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
  // 정렬된 데이터를 기준으로 영화 카드를 표시하는 함수
  const renderMovies = () => {
    if (
      sortType === 'popular' ||
      sortType === 'unpopular' ||
      sortType === 'recent'
    ) {
      return (
        <Row>
          {sortedData.map((movie, index) => (
            <Col key={index} lg={4} xs={12}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      );
    }

    // 아무 정렬도 선택되지 않은 경우 기본 데이터를 표시
    return (
      <Row>
        {data?.results.map((movie, index) => (
          <Col key={index} lg={4} xs={12}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    );
  };
  const fliterMovie = () => {}
  return (
    // 첫번째 row는 sort, 카드 보여주는 부분, 두번째 row는 카드의 정렬을 위해
    <Container>
      <Row>
        <Col lg={3} xs={12}>
          {' '}
          필터{' '}
          <Col>
            <Button variant="danger" onClick={fliterMovie}>Action</Button>{' '}
            <Button variant="danger">Adventure</Button>{' '}
            <Button variant="danger">Animation</Button>
          </Col>
          <Col>
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>
          </Col>
          <Col>
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>
          </Col>
          <Col>
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>
          </Col>
          <Col>
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>
          </Col>
          <Col>
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>
          </Col>
          <Col>
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>
          </Col>
          <Col>
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>
          </Col>
          <Col>
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>{' '}
            <Button variant="danger">Action</Button>
          </Col>
        </Col>

        <Col lg={9} xs={12}>
          <Row>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  정렬기준
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleSortPopularRank}>
                    인기 많은 순
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleSortUnpopularRank}>
                    {' '}
                    인기 적은 순{' '}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleSortRecentRank}>
                    최신순
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          {renderMovies()}
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} // 전체페이지가 몇개인지 알려주는
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1} // reactPaginate는 0을 1이라고 생각해서 -1해준거 // forcePage는 내가 선택한 페이지, 시작 페이지
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
