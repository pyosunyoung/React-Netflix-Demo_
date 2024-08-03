// 반복적으로 사용가능한 것들을 컴포넌트화 한것
import React from 'react'
import Carousel from 'react-multi-carousel'
import MovieCard from '../MovieCard/MovieCard';
import './MovieSlider.style.css'
import 'react-multi-carousel/lib/styles.css';

const MovieSlider = ({title, movies, responsive}) => {
  return (
    <div>
      <h3 className='slider-title'>{title}</h3>
      <Carousel
  infinite={true} // 슬라이더 무한 반복을 할 것이냐
  centerMode={false}
  itemClass='movie-slider p-1'
  containerClass='carousel-container'
  responsive={responsive} // 몇개의 아이템을 슬라이더에 보여줄지 설정
>
  {movies.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
</Carousel>
    </div>
  )
}

export default MovieSlider
