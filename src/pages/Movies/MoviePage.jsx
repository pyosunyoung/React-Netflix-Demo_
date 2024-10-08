import React, { useState, useEffect } from 'react';
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
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import './MoviePage.style.css'
import Footer1 from '../Homepage/components/Footer/Footer1';

const MoviePage = () => {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');
  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });
  const { data: genreData } = useMovieGenreQuery(); // 장르 데이터를 가져옴

  const [filteredData, setFilteredData] = useState([]); // 필터링된 데이터 상태
  const [selectedGenre, setSelectedGenre] = useState(null); // 선택된 장르 상태

  useEffect(() => {
    if (data) {
      // 선택된 장르가 없으면 전체 데이터를 사용
      const filteredMovies = selectedGenre
        ? data.results.filter(movie => movie.genre_ids.includes(selectedGenre))
        : data.results;
      setFilteredData(filteredMovies);
    }
  }, [data, selectedGenre]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const handleSortPopularRank = () => {
    const sortedMovies = [...filteredData].sort((a, b) => b.popularity - a.popularity);
    setFilteredData(sortedMovies);
  };

  const handleSortUnpopularRank = () => {
    const sortedMovies = [...filteredData].sort((a, b) => a.popularity - b.popularity);
    setFilteredData(sortedMovies);
  };

  const handleSortRecentRank = () => {
    const sortedMovies = [...filteredData].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    setFilteredData(sortedMovies);
  };

  const handleGenreFilter = (genreName) => {
    if (genreName === 'All') {
      setSelectedGenre(null); // 모든 영화를 보여줌
    } else {
      const genre = genreData.find(g => g.name.toLowerCase() === genreName.toLowerCase());
      if (genre) {
        setSelectedGenre(genre.id); // 선택된 장르의 ID를 저장
      }
    }
  };

  const renderMovies = () => {
    return (
      <Row>
        {filteredData.map((movie, index) => (
          <Col key={index} lg={4} xs={12}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    );
  };

  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner animation="border" variant="danger" style={{ width: '5rem', height: '5rem' }} />
        
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <h2>Genre Filter</h2>
          <Button className="custom-gradient-button" variant="danger" onClick={() => handleGenreFilter('All')}>All</Button>{' '}
          <Col>
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Action')}>Action</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Adventure')}>Adventure</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Animation')}>Animation</Button>
          </Col>
          <Col>
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Comedy')}>Comedy</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Crime')}>Crime</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Documentary')}>Documentary</Button>
          </Col>
          <Col>
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Drama')}>Drama</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Family')}>Family</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Fantasy')}>Fantasy</Button>
          </Col>
          <Col>
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('History')}>History</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Horror')}>Horror</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Music')}>Music</Button>
          </Col>
          <Col>
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Mystery')}>Mystery</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Romance')}>Romance</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Science Fiction')}>Science Fiction</Button>
          </Col>
          <Col>
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Thriller')}>Thriller</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('TV Movie')}>TV Movie</Button>{' '}
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('War')}>War</Button>
          </Col>
          <Col>
            <Button className="custom-gradient-button" variant="primary" onClick={() => handleGenreFilter('Western')}>Western</Button>{' '}
          </Col>
        </Col>

        <Col lg={8} xs={12}>
          <Row>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  정렬기준
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleSortPopularRank}>인기 많은 순</Dropdown.Item>
                  <Dropdown.Item onClick={handleSortUnpopularRank}>인기 적은 순</Dropdown.Item>
                  <Dropdown.Item onClick={handleSortRecentRank}>최신순</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          {renderMovies()}
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={13}
            marginPagesDisplayed={3}
            pageCount={data?.total_pages || 0}
            previousLabel="<"
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
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
    <Footer1/>
    </div>
  );
};

export default MoviePage;
