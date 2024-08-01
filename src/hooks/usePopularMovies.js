import {useQuery} from "@tanstack/react-query";
import api from '../utils/api';

const fetchPopularMovies=() => {
  return api.get(`/movie/popular`) // api로 베이스 주소를 만들어놔서 전체주소 안써줘도 적용됨
}

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey:['movie-popular'],
    queryFn:fetchPopularMovies,
    select:(result) => result.data
  })
}

//훅을 만드는 이유 나중에 다른 곳에서도 사용할 수 있으니
// 컴포넌트를 비지니스 로직과 ui를 분리해놓으면 좋음