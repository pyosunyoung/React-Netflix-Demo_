import {useQuery} from "@tanstack/react-query";
import api from '../utils/api';

const fetchUpcomingMovies=() => {
  return api.get(`/movie/upcoming`) // api로 베이스 주소를 만들어놔서 전체주소 안써줘도 적용됨
}

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey:['movie-upcoming'],
    queryFn:fetchUpcomingMovies,
    select:(result) => result.data
  })
}

//훅을 만드는 이유 나중에 다른 곳에서도 사용할 수 있으니
// 컴포넌트를 비지니스 로직과 ui를 분리해놓으면 좋음