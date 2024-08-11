import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const {data:genreData} = useMovieGenreQuery(); // data를 grenreData로 재정의
  const showGenre = (genreIdList) => { // 이렇게하면 장르 id, movie.genre_ids이 값을 매개변수로 넘겨받을 수 있고 여기서 id를 장르로 변환시킬 수 있게됨
    if(!genreData) return [] // 데이터가 없으면 아무것도 안보여줌
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id) // 찾는다, genre api id와 현재 id값이 같은것들만 추출해서 (이 둘은 서로 다른 api 경로임)
      return genreObj.name; //이렇게 하면 장르 이름만 보여주게되겠지?
    })

    return genreNameList // 장르의 이름들만 모아놓은 리스트
  }
  const detailPage = () => {
    navigate(`/movies/${movie.id}`)
  }
  // console.log(movie);
  return (
    <div 
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}` +
          ')', 
      }}
      className="movie-card"
    >
      <div className="overlay" onClick={detailPage}>
        <h1 style={{fontSize:`32px`}}>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((id) => (
          <Badge className='movie-badge1' bg="primary" style={{marginRight:`3px`}}>{id}</Badge>
        ))}
      <div>
      <div className="info-item">
            <img src="https://noona-netflix-react-query.vercel.app/IMDB.png" alt="Rating" />
            {movie.vote_average}
          </div>
          <div className="info-item">
            <img src="https://www.shutterstock.com/image-vector/people-icon-black-yellow-600w-598410440.jpg" alt="Popularity" />
            {movie.popularity}
          </div>
        <div>{movie.adult ? 'over18' : <img style={{width:`20px`}} src='https://noona-netflix-react-query.vercel.app/under18.svg' alt=''/>}</div>
      </div>
      </div>
    </div>
  );// genre id는 장르 id값을 가져옴, 
};

export default MovieCard;
